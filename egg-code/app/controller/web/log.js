'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken')
class LoginController extends Controller {
  async login() {
    const { ctx } = this;
    const {user,pwd} = ctx.request.body;
    let data = await this.service.user.finduser(user,pwd)
    if(data.length === 0){
        ctx.body={code:400,msg:"用户不存在，请注册"}
        return
    }
    if(data[0].pwd !== pwd){
        ctx.body={code:400,msg:'密码错误'}
        return
    }
    let obj   = {...data[0],signTime:new Date().getTime()}
    let webtoken = jwt.sign(obj,'web')
    ctx.cookies.set('webtoken', webtoken);
    ctx.body={code:200,msg:"登录成功",data:{webtoken}}
  }
  async register(){
    const {ctx} = this;
    const {user,email,pwd,age} = ctx.request.body;
    let res = await this.service.user.finduser(user)
    if(res.length >0){
        ctx.body={code:400,msg:"用户已存在"}
        return;
    }
    let resdata = await this.service.user.webinsert(user,email,pwd,age)
    if(resdata.affectedRows === 1){
        ctx.body={code:200,msg:"注册成功"}
        return
    } 
    ctx.body={code:400,msh:"注册失败"}
}
}

module.exports = LoginController;
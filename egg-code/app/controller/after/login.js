'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken')
class LoginController extends Controller {
  async login() {
    const { ctx } = this;
    const {user,pwd} = ctx.request.body;
    let data = await this.service.user.find(user,pwd)
    if(data.length === 0){
        ctx.body={code:400,msg:"用户不存在，请注册"}
        return
    }
    if(data[0].pwd !== pwd){
        ctx.body={code:400,msg:'密码错误'}
        return
    }
    let obj   = {...data[0],signTime:new Date().getTime()}
    let crmtoken = jwt.sign(obj,'crm')
    ctx.cookies.set('crmtoken', crmtoken);
    ctx.body={code:200,msg:"登录成功",data:{crmtoken}}
  }
}

module.exports = LoginController;
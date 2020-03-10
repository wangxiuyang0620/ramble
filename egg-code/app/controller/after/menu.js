'use strict';

const Controller = require('egg').Controller;
const Menu = require('../../../config/menu.js')
class MenuController extends Controller {
  async list() {
    const { ctx } = this;
    let menulist =[]
    Menu.forEach(item=>{
        let index = menulist.findIndex(jtem=>jtem.belong === item.belong)
        if(index !== -1){
            menulist[index].sub.push({
                name:item.name,
                key:item.key,
                to:item.to
            })
            return
        }
        menulist.push({
            belong:item.belong,
            icon:item.icon,
            sub:[
                {
                    name:item.name,
                    key:item.key,
                    to:item.to
                }
            ]
        })
    })
  
  ctx.body={code:200,data:menulist}
}
}

module.exports = MenuController;
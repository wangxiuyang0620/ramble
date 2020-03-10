const Service = require('egg').Service;
class UserService extends Service {
    async find(user) {
        return await this.app.mysql.select('crm_user', { where: { user } })
    }
    async finduser(user){
        return await this.app.mysql.select('user',{where:{user}})
    }
    async webinsert(user, email, pwd, age) {
        return await this.app.mysql.insert('user',{id:null,user, email, pwd, age})
    }
}
module.exports = UserService
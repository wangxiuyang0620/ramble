<template>
  <div class="wrapper">
    <el-dialog
      title="Login Hare"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span style="display:block;width:100%;height:40px;margin:10px 0;" >
        <input v-model="user" type="text" placeholder="User Name" style="width:100%;height:100%;border:none;border-bottom:1px solid #ccc;"/>
      </span>
      <span style="display:block;width:100%;height:40px;margin:10px 0;" v-show="flag">
        <input v-model="email" type="text" placeholder="Email" style="width:100%;height:100%;border:none;border-bottom:1px solid #ccc;"/>
      </span>
      <span style="display:block;width:100%;height:30px;">
        <input v-model="pwd" type="text" placeholder="Password" style="width:100%;height:100%;border:none;border-bottom:1px solid #ccc;"/>
      </span>
        <span style="display:block;width:100%;height:40px;margin:10px 0;" v-show="flag">
        <input v-model="age" type="text" placeholder="Age" style="width:100%;height:100%;border:none;border-bottom:1px solid #ccc;"/>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="log('/login')" v-show="!flag">LOGIN NOW</el-button>
         <el-button type="primary" @click="log('/register')" v-show="flag">REGISTER NOW</el-button>
      </span>
    </el-dialog>
    <div class="header">
      <div class="logo">
        <img src="../../public/images/logo/ramble.png" alt />
      </div>
      <div class="center">
        <div class="top">
          <p>
            <span>Contact:</span>0088-234-675-827
          </p>
          <p>
            <span>Opening Hours:</span>Mon - Sat 8.00 - 18.00. Sunday CLOSE
          </p>
          <div class="log">
            <span class="iconfont icon-yonghu" @click="dialogVisible = true">Login</span>
            <span class="iconfont icon-tianjiayonghu" @click="regisetr">Register</span>
          </div>
        </div>
        <div class="bottom">
          <router-link
            v-for="item in navlist"
            :key="item.key"
            tag="span"
            :to="item.path"
            @click.native="navClick(item.key)"
          >{{item.title}}</router-link>
        </div>
      </div>
      <div class="tel">
        <span class="iconfont icon-in"></span>
        <span class="iconfont icon-boke"></span>
        <span class="iconfont icon-t"></span>
        <span class="iconfont icon-G"></span>
        <span class="iconfont icon-f"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navlist: [
        {
          title: "HOME",
          path: "/home",
          key: "home"
        },
        {
          title: "ABOUT",
          path: "/home/about",
          key: "about"
        },
        {
          title: "SERVICES",
          path: "/home/services",
          key: "services"
        },
        {
          title: "PAGES",
          path: "/home/pages",
          key: "pages"
        },
        {
          title: "GALLERY",
          path: "/home/gallery",
          key: "gallery"
        },
        {
          title: "BLOG",
          path: "/home/blog",
          key: "blog"
        },
        {
          title: "CONTACT",
          path: "/home/contact",
          key: "contact"
        }
      ],
      dialogVisible: false,
      flag:false,
      user:'',
      pwd:"",
      email:'',
      age:""
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    navClick(key) {
      sessionStorage.setItem("nowNav", key);
      let res = key === "home" ? true : false;
      this.$emit("changeIsShow", res);
    },
    regisetr(){
      this.flag=true;
      this.dialogVisible=true;
    },
     async log (url){
       const {user,pwd,email,age} = this;
       if(user===''){
         return alert('用户名不能为空')
       }
       if(pwd===''){
         return alert('密码不能为空')
       }
     
       if(url === '/login'){
         let res = await this.$http('post','/web/login',{user,pwd});
        if(res.data.code === 200){
          localStorage.setItem('websource',res.data.data.webtoken);
          localStorage.setItem('webuser',user)
        }
        alert(res.data.msg)
        this.dialogVisible=false;
        return
       }
        if(url === '/register'){
            if(email===''){
         return alert('邮箱不能为空')
       }
       if(age===''){
         return alert('年龄不能为空')
       }
         let res = await this.$http('post','/web/register',{user,pwd,email,age});
        alert(res.data.msg)
        this.dialogVisible=false;
        return
       }
       
     }
  }
};
</script>

<style lang='scss' scoped>
.wrapper {
  position: relative;
}
.header {
  min-width: 1100px;
  width: 100vw;
  height: 100px;
  padding: 0 20px;
  display: flex;
  position: absolute;
  top: 0;
  left: 40px;
  z-index: 200;
  margin: auto;
}
.logo {
  padding: 20px 10px;
}
.center {
  min-width: 750px;
  width: 900px;
  height: 100%;
  margin: 0 20px;
  .top {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #909090;
    display: flex;
    box-sizing: border-box;
    p {
      line-height: 50px;
      font-size: 14px;
      margin: 0 20px;
      color: #fff;
      span {
        color: #f90;
      }
    }
    .log {
      line-height: 50px;
      margin-left: 10px;

      span {
        margin: 0 10px;
        color: #fff;
        &:hover {
          color: #f90;
        }
      }
    }
  }
  .bottom {
    line-height: 50px;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    span {
      flex: 1;
      text-align: center;
      font-size: 16px;
      color: #fff;
      &:hover {
        color: #f90;
      }
    }
  }
}
.tel {
  width: 200px;
  min-width: 200px;
  span {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 0 10px;
    font-size: 20px;
    line-height: 100px;
    color: #fff;
    &:hover {
      color: #f90;
    }
  }
}
</style>
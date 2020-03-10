<template>
  <div class="content">
     <div class="content-head">
      <div class="img">
          <img src="../../public/images/others/contact/1.jpg" alt="">
      </div>
      <div class="conect">
          <h3>CONTACT <span>FORM</span></h3>
          <p><input type="text" placeholder="YOUR NAEM" v-model="name"><input type="text" v-model="mail" placeholder="MAIL"></p>
          <div><input type="text" placeholder="SUBJECT" v-model="subject"></div>
          <div><input type="text" placeholder="Type Your Message" v-model="message"></div>
          <button >SEND MESSAGE</button>
      </div>
     </div>
  </div>
</template>

<script>
export default {
  data(){
      return{
          name:"",
          mail:"",
          subject:'',
          message:''
      }
  },
  methods:{
   
}
}
</script>

<style lang='scss' scoped>
  .content{
      width: 100vw;
      min-width: 1000px;
  } 
  .content-head{
      width: 100vw;
      height: 650px;
      padding: 20px ;
      position: relative;
      .img{
          width: 550px ;
          height: 625px;
          img{
              width: 100%;
              height: auto;
          }
      }

  }
  .conect{
      position: absolute;
      width: 570px;
      height: 520px;
      box-sizing: border-box;
      padding: 100px 50px;
      background: #eee;
      top: 80px;
      left: 500px;
  }
</style>
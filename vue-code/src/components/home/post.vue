<template>
  <div class="topcontent">
     <div class="content">
       <div class="header">
         <h3> LATEST  <span>POST</span></h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utllaf</p>
          <p></p>
       </div>
   </div>
   <div class="bottom">
    <div class="left">
        <div class="head"> <img src="../../../public/images/blog/blog-img/1.jpg" alt=""></div>
           
        <div class="under">
            <p>Date : 26 oct 2016</p>
            <h2>BLOG POST DUMMY TITLE</h2>
            <p>Lorem ipsum dolor silt ameconsecur adipisicing elit, sehgbd djlo eiusmod temporconsequat</p>
            <ul><li>20 Likes</li><li>02 Comments</li></ul>
            <h3>READ MORE</h3>
        </div>
    </div>
    <div class="right">
        <div class="head">  <img src="../../../public/images/blog/blog-img/2.jpg" alt=""></div>
      
         <div class="under">
             <p>Date : 26 oct 2016</p>
             <h2>BLOG POST DUMMY TITLE</h2>
             <p>Lorem ipsum dolor silt ameconsecur adipisicing elit, sehgbd djlo eiusmod temporconsequat</p>
             <ul><li>21 Likes</li><li>02 Comments</li></ul>
             <h3>READ MORE</h3>
         </div>
    </div>

   </div>
  </div>
</template>


<script>
export default {

}
</script>

<style lang='scss' scoped>
.topcontent{
    min-width: 1200px;
    width: 100vw;
    height: 100%;
}
.content{
    min-width: 1200px;
  width: 100vw;
  height: 200px;
  box-sizing: border-box;
  padding: 0 110px;
  .header{
    width: 100%;
    height: 200px;
     padding: 30px 0;
    h3{
      width: 100%;
      height: 60px;
      text-align: center;
      line-height: 60px;
      font-size: 30px;
      span{
        color: #ffb300;
      }
    }
    p{
      height: 50px;
      text-align: center;
      line-height: 50px;
      &:nth-child(3){
        background: url('../../../public/images/shape/1.png') no-repeat 480px 20px;
      }
    }
  }
 
}
.bottom{
    min-width: 1200px;
    width: 100vw;
    height: 350px;
    display: flex;
    padding: 0 100px;
    .left{
        width: 45%;
        height: 100%;
        display: flex;
        position: relative;
    }
    .right{
       width: 45%;
        height: 100%;
       margin-left: 30px;
        display: flex;
        position: relative;
    }
    .head{
        width: 100%;
        height: 100%;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .under{
        position: absolute;
        right: 0;
        bottom: 0;
        width: 50%;
        height: 100%;
        box-sizing: border-box;
        background: rgba(0, 0, 0, .6);
        color: #ccc;
        padding: 20px;
        p{
            line-height: 30px;
            font-size: 12px;
            color: #fff;
        }
        h2{
            font-size: 20px;
             color: #fff;
            &:hover{
                color: #ffb300;
            }
        }
        ul{
            display: flex;
            justify-content: space-between;
            li{
                 color: #fff;
                list-style: none;
            }
        }
        h3{
             color: #fff;
            margin-top: 30px;
            &:hover{
                color: #ffb300;
            }
        }
    }
   }
    

</style>
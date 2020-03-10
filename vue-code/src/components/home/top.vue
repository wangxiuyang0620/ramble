<template>
  <div class="topcontent">
     <div class="content">
       <div class="header">
         <h3> TOP  <span>DESTINATION</span></h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utllaf</p>
          <p></p>
       </div>
   </div>
   <div class="bottom">
   <div class="left">
       <div >
           <img src="../../../public/images/top/1.jpg" alt="">
          <div class="des">
              <h3>OTTAWA</h3>
              <p>CANADA</p>
          </div>
          <div class="black"></div>
       </div>
       <div  >
           <img src="../../../public/images/top/3.jpg" alt="">
            <div class="des">
              <h3>TOKYO</h3>
              <p>JANPAN</p>
          </div>
           <div class="black"></div>
       </div>


       <div>
           <img src="../../../public/images/top/2.jpg" alt="">
            <div class="des">
              <h3>SYDNEY</h3>
              <p>AUSTRALIA</p>
          </div>
           <div class="black"></div>
       </div>
       <div >
           <img src="../../../public/images/top/2.jpg" alt="">
            <div class="des">
              <h3>SINGOPRE</h3>
              <p>SINGOPRE</p>
          </div>
           <div class="black"></div>
       </div>
   </div>
   <div class="right">
       <img src="../../../public/images/top/big-img/1.jpg" alt="">
       <div class="des">
           <h3>SAESON</h3>
           <h2>SPECAIL & AMAZING</h2>
           <h6>TOUR</h6>
           <p>PRICE DROP <span>$499</span></p>
           <div class="divs"><button>BOOK NOW</button></div>
       </div>
        <div class="black"></div>
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
  margin-bottom: 20px;
  .header{
    width: 100%;
    height: 200px;
    padding: 50px 0;
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
    height: 620px;
    display: flex;
    .left{
        min-width: 850px;
        width: 65%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        div{
             width: 45%;
             height: 45%;
             margin: 10px 20px;
             position: relative;
             .black{
                 width: 100%;
                 height: 100%;
                 background: rgba(0, 0, 0, .5);
                 position: absolute;
                 top: -10px;
                 left: -20px;
                 display: none;
                
             }
             &:hover .black{
                 display: block;
                  z-index: 99;
             }
             img{
                 width: 100%;
                 height: 100%;
             }
             .des{
                 width: 150px;
                 height: 60px;
                 position: absolute;
                 top: 100px;
                 left: 100px;
                 font-size: 24px;
                 text-align: center;
                 z-index: 100;
                 h3{
                     color: #fff;
                 }
                 p{
                     color: #fff;
                 }
             }
        }
    }
    .right{
        width: 30%;
        height: 95%;
        background: #ffb300;
        margin: 10px 20px;
        padding: 0 0 10px 10px;
        position: relative;
         .black{
                 width: 100%;
                 height: 100%;
                 background: rgba(0, 0, 0, .5);
                 position: absolute;
                 top: 0px;
                 left: 0px;
                 display: none;
                
             }
             &:hover .black{
                 display: block;
                  z-index: 99;
             }
        img{
            width: 100%;
            height: 100%;
        }
        .des{
                 width: 100%;
                 position: absolute;
                 top: 10px;
                 left: 40px;
                padding: 20px 0;
                z-index: 100;
                h3{
                    width: 100%;
                    line-height: 50px;
                    font-size: 24px;
                    color: #fff;
                }
                h2{
                    width: 100%;
                    line-height: 50px;
                    font-size: 30px;
                     color: #fff;
                }
                h6{
                    width: 100%;
                    line-height: 50px;
                    font-size: 20px;
                     color: #fff;
                }
                p{
                    width: 100%;
                    line-height: 50px;
                    font-size: 20px;
                     color: #fff;
                    span{
                        font-size: 36px;
                        color: #ffb300;
                    }

                }
                .divs{
                     width: 100%;
                     button{
                         width: 130px;
                         height: 40px;
                         border: 1px solid #ffb300;
                         line-height: 40px;
                         border-radius: 30px;
                         background: none;
                         outline: none;
                         color: #fff;
                         margin: 30px 80px;
                         &:hover{
                             background: #ffb300;
                         }
                        
                     }
                     
                }
             }
    }
}

</style>
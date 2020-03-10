<template>
  <div class="lbt">
    <div class="lbts">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in [1,2,3,4]" :key="item">
            <div class="img">
              <img src="../../../public/images/test/client/1.png" alt="">
            </div>
            <p class="text">"Lorem ipsum dolor sit amet, consecteitur adipisicing elit, sedgh do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "</p>
             <p class="name">NIPA BALI</p>
             <p class="per">CEO</p>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/js/swiper.min.js";
import "swiper/css/swiper.min.css";
export default {
  mounted() {
    new Swiper(".swiper-container", {
      autoplay: true, //可选选项，自动滑动
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
};
</script>

<style lang='scss' scoped>
.lbt {
  min-width: 1200px;
  width: 100vw;
  height: 620px;
  background: url("../../../public/images/bg/3.jpg") no-repeat;
  background-size: 100vw 620px;
  position: relative;
  .lbts {
    min-width: 1200px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    box-sizing: border-box;
    padding: 100px 0;
    .swiper-container {
      width: 100%;
      height: 100%;
      padding: 20px 0;
      .swiper-wrapper{
        width: 100%;
        .swiper-slide{
          width: 100%;
          .img{
            width: 100%;
            text-align: center;
          }
          .text{
            margin: 0 80px;
            padding: 0 170px;
            box-sizing: border-box;
            width: 80%;
            text-align: center;
            flex-wrap: wrap;
            line-height: 30px;
            font-size: 20px;
            color: #fff;
          }
          .name{
            margin: 10px 0;
            width: 100%;
            text-align: center;
            font-size: 24px;
            color: #ffb300;
            line-height: 40px;
          }
           .per{
            width: 100%;
            text-align: center;
            font-size: 20px;
            color: #fff;
            line-height: 40px;
          }
        }
      }
    }

    .swiper-pagination {
      position: absolute;
      left: 10%;
      bottom: 20%;
      right: 20%;
      z-index: 121;
    }
  }
}
</style>
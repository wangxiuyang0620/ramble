<template>
  <div class="swiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in [2,3,4]" :key="item">
          <img :src="require('../../public/images/slider/bg/'+item+'.jpg')" />
        </div>
      </div>
    </div>
    <div class="black"></div>
    <div class="swiper-pagination"></div>
     <div class="box">
      <h2>FIND YOUR SPECIAL TRUE TODAY</h2>
      <h2>WITH RAMBLE TOURS</h2>
      <button>VIEW TOURS</button>
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
.swiper {
  width: 100vw;
  height: 740px;
  min-width: 1100px;
  box-sizing: border-box;
  position: relative;
}
.swiper-container {
  width: 100%;
  height: 100%;
  .swiper-wrapper {
    width: 100%;
    .swiper-slide {
      width: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  
}
.black {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba($color: #000000, $alpha: 0.5);
  z-index: 100;
  pointer-events: none;
}
.swiper-pagination {
  position: absolute;
  top: 50%;
  left: 10%;
  bottom: 50%;
  right: 90%;
  z-index: 121;
}
//  .swiper-pagination .swiper-pagination-bullet{
//     display: block;
//     margin: 10px;
//     border-radius:0;
//     width: 12px;
//     height: 4px;
//     transition:width 0.5s;
//     background: red;
// }
//  .swiper-pagination .swiper-pagination-bullet-active{
//     width: 30px;
//     background:orange;
//     outline: none;
// }
.box{
  width: 100vw;
  height: 200px;
  position: absolute;
  top:50%;
  left: 0;
  z-index: 100;
  margin-top: -180px;
  text-align: center;
  h2{
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 50px;
    font-weight: normal;
  }
  button{
    width: 150px;
    height: 40px;
    border: 1px solid #ffb300;
    outline: none;
    border-radius: 30px;
    background: none;
    margin-top: 30px;
    color: #fff;
    &:hover{
      background: #ffb300;
    }
  }
}
</style>
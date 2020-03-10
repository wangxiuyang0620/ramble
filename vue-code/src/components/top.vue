<template>
  <div class="top">
    <Header @changeIsShow="changeIsShow"></Header>
    <Swiper v-show="isShow"></Swiper>
    <Search v-show="isShow"></Search>
    <Imgbg v-show="!isShow"></Imgbg>
    <div v-if="scroll>50" class="suction_top" @click="goBackTop">
      <span class="el-icon-arrow-up"></span>
    </div>
  </div>
</template>

<script>
import Swiper from "./swiper";
import Header from "./header.vue";
import Search from "./search";
import Imgbg from "./bg";
export default {
  data() {
    return {
      scroll: 0,
      isShow:
        sessionStorage.getItem("nowNav") === "home" ||
        sessionStorage.getItem("nowNav") === null
          ? true
          : false
    };
  },
  components: {
    Header,
    Swiper,
    Search,
    Imgbg
  },
  mounted() {
    window.addEventListener("scroll", this.getScrollTop);
    console.log(document.documentElement.scrollTop);
  },
  methods: {
    changeIsShow(val) {
      this.isShow = val;
    },
    getScrollTop() {
      this.scroll = document.documentElement.scrollTop;
    },
    goBackTop() {
      if (document.documentElement.scrollTop > 30) {
        setTimeout(() => {
          this.scroll -= 30;
          document.documentElement.scrollTop -= 30;
          this.goBackTop();
        }, 20);
      } else {
        document.documentElement.scrollTop = 0;
        this.scroll = 0;
        return;
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.top {
  width: 100vw;
  position: relative;
}
.suction_top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 30px;
  height: 30px;
  background: orange;
  color: #fff;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
}
</style>
<template>
  <div class="wrap">
    <Top></Top>
    <router-view></router-view>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Top from "../components/top";
import Bottom from '../components/bottom'
export default {
  components: {
    Top,
    Bottom
  }
};
</script>

<style lang='scss' scoped>
.wrap {
  min-width: 1100px;
  height: 100%;
  box-sizing: border-box;
}
</style>
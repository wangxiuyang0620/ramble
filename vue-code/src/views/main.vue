<template>
  <div class="main">
    <Choose></Choose>
    <Welcome></Welcome>
    <Service></Service>
    <Fourbg></Fourbg>
    <Package></Package>
    <Sixbg></Sixbg>
    <Meet></Meet>
    <Top></Top>
    <Lbt></Lbt>
    <Post></Post>
    <Tv></Tv>
    <Tel></Tel>
  </div>
</template>

<script>
import Choose from "../components/home/choose";
import Welcome from "../components/home/welcome";
import Service from "../components/home/service";
import Fourbg from "../components/home/fouthbg";
import Package from "../components/home/packages";
import Sixbg from "../components/home/sixbg";
import Meet from "../components//home/meet";
import Top from "../components/home/top";
import Lbt from "../components/home/lbt";
import Post from "../components/home/post";
import Tv from "../components/home/tv";
import Tel from "../components/home/tel";
export default {
  components: {
    Choose,
    Welcome,
    Service,
    Fourbg,
    Package,
    Sixbg,
    Meet,
    Top,
    Lbt,
    Post,
    Tv,
    Tel
  }
};
</script>

<style lang='scss' scoped>
.main {
width: 100vw;
}
</style>
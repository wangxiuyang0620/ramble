<template>
  <div class="two">
    <div class="two-left"></div>
    <div class="two-right">
      <h3>
        WELCOME TO
        <span>RAMBLE</span>
      </h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincidid ut labore et dolore magna aliqua. Utjij enim ad minim veniam, quis nostrud exercitatio</p>
      <p>ullamco laboris nisi utjjij aliquip ex ea commodo consequat.ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.ed do eiusmod tempor incididuenimdunt.</p>
      <p>Fipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempoed doeiumod tempoquis</p>
      <div>
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
export default {};
</script>

<style lang='scss' scoped>
.two {
  min-width: 1100px;
  width: 100vw;
  height: 450px;
  display: flex;
  .two-left {
    min-width: 440px;
    width: 40%;
    height: 420px;
    background: url("../../../public/images/others/welcome/1.jpg") no-repeat;
    background-size: 450px 420px;
  }
  .two-right {
    min-width: 660px;
    background: rgb(248, 245, 245);
    width: 60%;
    height: 420px;
    padding: 0 25px;
    h3 {
      width: 100%;
      height: 100px;
      font-size: 30px;
      line-height: 100px;
      span {
        color: #ffb300;
      }
    }
    p {
      width: 100%;
      line-height: 25px;
      flex-wrap: wrap;
    }
    div {
      width: 100%;
      height: 65px;
      margin: 20px 0 0 0;
      span {
        display: inline-block;
        width: 40px;
        height: 40px;
        background: #fff;
        margin: 0 10px;
        text-align: center;
        line-height: 40px;
        color: #ffb300;
        font-size: 20px;
        &:hover {
          background: #ffb300;
          color: #fff;
        }
      }
    }
  }
}
</style>
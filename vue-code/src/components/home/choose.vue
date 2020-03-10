<template>
  <div class="one">
    <div class="content">
      <div class="header">
        <h3>
          WHY
          <span>CHOOSE US</span>
        </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utllaf</p>
        <p></p>
      </div>
    </div>
    <div class="one-content">
      <div class="one-content-item">
        <div class="icon">
          <span class="iconfont icon-shan"></span>
          <span class="iconfont icon-shan icon_orange"></span>
        </div>
        <h4>Diverse Destination</h4>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laborelorem</div>
      </div>
      <div class="one-content-item">
        <div class="icon">
          <span class="iconfont icon-87"></span>
          <span class="iconfont icon-87 icon_orange"></span>
        </div>
        <h4>Value Of Money</h4>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laborelorem</div>
      </div>
      <div class="one-content-item">
        <div class="icon">
          <span class="iconfont icon-yusan-"></span>
          <span class="iconfont icon-yusan- icon_orange"></span>
        </div>
        <h4>Passionate Travel</h4>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laborelorem</div>
      </div>
      <div class="one-content-item">
        <div class="icon">
          <span class="iconfont icon-yangguangshatan"></span>
          <span class="iconfont icon-yangguangshatan icon_orange"></span>
        </div>
        <h4>Beautiful Places</h4>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laborelorem</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.one {
  width: 100vw;
  min-width: 1100px;
  height: 500px;
}
.content {
  width: 100vw;
  height: 200px;
  min-width: 1100px;
  box-sizing: border-box;
  padding: 0 110px;
  margin-bottom: 20px;
  .header {
    width: 100%;
    height: 200px;
    padding: 50px 0;
    h3 {
      width: 100%;
      height: 60px;
      text-align: center;
      line-height: 60px;
      font-size: 30px;
      span {
        color: #ffb300;
      }
    }
    p {
      height: 50px;
      text-align: center;
      line-height: 50px;
      &:nth-child(3) {
        background: url("../../../public/images/shape/1.png") no-repeat 480px
          20px;
      }
    }
  }
}
.one-content {
  min-width: 1200px;
  width: 100vw;
  height: 250px;
  display: flex;
  box-sizing: border-box;
   padding: 0 80px;
}
.one-content-item {
  height: 260px;
  width: 24%;
  margin: 0 5px;
  .icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 0 auto;
    background: #f6f6f6;
    position: relative;
     span {
       font-size: 30px;
      display:inline-block;
      width: 80px;
      height: 80px;
      line-height: 80px;
      border-radius: 50%;
      color: #ffb300;
    }
  }
  .icon .icon_orange {
    position: absolute;
    background: orange;
    color: #f6f6f6;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 0;
    transition: width 0.3s;
    -moz-transition: width 0.3s;
    -webkit-transition: width 0.3s;
    -o-transition: width 0.3s;
  }
  .icon_orange::before {
    opacity: 0;
    transition: opacity 0.3s;
  }
  .icon:hover .icon_orange {
    width: 80px;
  }
  .icon:hover .icon_orange::before {
    opacity: 1;
  }
  h4 {
    text-align: center;
    line-height: 40px;
    color: #999;
    &:hover {
      color: #ffb300;
    }
  }
  div {
    width: 100%;
    height: 135px;
    flex-wrap: wrap;
    text-align: center;
    line-height: 30px;
    color: #999;
  }
}
</style>
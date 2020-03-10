<template>
  <div class="sev">
    <div class="content">
      <div class="header">
        <h3>
          MEET
          <span>THE GUYS</span>
        </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utllaf</p>
        <p></p>
      </div>
    </div>
    <div class="sevcontent">
      <div class="item">
        <div class="item-img">
          <img src="../../../public/images/team/2.jpg" alt />
        </div>
        <div class="des">
          <h3>ANIKA MOLLIK</h3>
          <p>Chief CEO Officer</p>
          <div class="tel">
            <span class="iconfont icon-in"></span>
            <span class="iconfont icon-boke"></span>
            <span class="iconfont icon-t"></span>
            <span class="iconfont icon-G"></span>
            <span class="iconfont icon-f"></span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-img">
          <img src="../../../public/images/team/1.jpg" alt />
        </div>
        <div class="des">
           <h3>NIPA BALI</h3>
          <p>Chief CEO Officer</p>
          <div class="tel">
            <span class="iconfont icon-in"></span>
            <span class="iconfont icon-boke"></span>
            <span class="iconfont icon-t"></span>
            <span class="iconfont icon-G"></span>
            <span class="iconfont icon-f"></span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-img">
          <img src="../../../public/images/team/3.jpg" alt />
        </div>
        <div class="des">
           <h3> JON SMITH</h3>
          <p>Chief CEO Officer</p>
          <div class="tel">
            <span class="iconfont icon-in"></span>
            <span class="iconfont icon-boke"></span>
            <span class="iconfont icon-t"></span>
            <span class="iconfont icon-G"></span>
            <span class="iconfont icon-f"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.sev {
  min-width: 1200px;
  width: 100vw;
  height: 750px;
  .sevcontent {
    min-width: 1200px;
    width: 100%;
    height: 550px;
    display: flex;
    .item {
      width: 30%;
      height: 100%;
      margin: 10px 20px;
      position: relative;
      .item-img {
        width: 100%;
        background: #ffb300;
        box-sizing: border-box;
        padding: 2px;
        img {
          width: 100%;
        }
      }
      .des {
        width: 330px;
        height: 150px;
        background: #fff;
        position: absolute;
        bottom: 20px;
        left: 10px;
        padding: 20px;
        h3{
          width: 100%;
          text-align: center;
          line-height: 40px;
          font-size: 20px;
        }
        p{
          width: 100%;
          text-align: center;
          line-height: 30px;
          color: #ccc;
          font-size: 14px;
        }
        .tel{
          margin-top: 30px;
          width: 100%;
          display: flex;
          span{
            flex: 1;
            line-height: 40px;
            color: #ccc;
            text-align: center;
            &:hover{
              color: #ffb300;
            }
          }
        }
      }
    }
  }
}
.content {
  min-width: 1200px;
  width: 100vw;
  height: 200px;
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
</style>
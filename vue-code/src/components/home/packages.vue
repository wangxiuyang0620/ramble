<template>
  <div class="five">
    <div class="content">
      <div class="header">
        <h3>
          SPECIAL
          <span>PACKAGES</span>
        </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utllaf</p>
        <p></p>
      </div>
    </div>
    <div class="five-content">
      <div class="item">
        <div class="item-img">
          <img src="../../../public/images/special/1.jpg" alt />
        </div>
        <p>
          Offer Available
          <strong>$300</strong>
        </p>
      </div>
      <div class="item">
        <div class="item-img">
          <img src="../../../public/images/special/8.jpg" alt />
        </div>
        <p>
          Offer Available
          <strong>$300</strong>
        </p>
      </div>
      <div class="item">
        <div class="item-img">
          <img src="../../../public/images/special/3.jpg" alt />
        </div>
        <p>
          Offer Available
          <strong>$300</strong>
        </p>
      </div>
      <div class="item">
        <div class="item-img">
          <img src="../../../public/images/special/4.jpg" alt />
        </div>
        <p>
          Offer Available
          <strong>$300</strong>
        </p>
      </div>
      <div class="item">
        <div class="item-img">
          <img src="../../../public/images/special/5.jpg" alt />
        </div>
        <p>
          Offer Available
          <strong>$300</strong>
        </p>
      </div>
      <div class="item">
        <div class="item-img">
          <img src="../../../public/images/special/6.jpg" alt />
        </div>
        <p>
          Offer Available
          <strong>$300</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.five {
  min-width: 1100px;
  width: 100vw;
  height: 1000px;
  margin-bottom: 60px;
  .five-content {
    min-width: 1200px;
    width: 100%;
    height: 750px;
    display: flex;
    flex-wrap: wrap;
    padding: 0 25px;
    .item {
      width: 28%;
      height: 50%;
      margin: 10px 30px;
      position: relative;
      .item-img {
        width: 100%;
        img {
          width: 100%;
        }
      }
      p {
        font-size: 20px;
        width: 320px;
        height: 70px;
        background: #fff;
        position: absolute;
        bottom: 50px;
        right: 20px;
        line-height: 70px;
        text-align: center;
      }
    }
  }
}
.content {
  min-width: 1100px;
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
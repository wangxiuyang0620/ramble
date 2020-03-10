<template>
  <div class="four">
    <div class="black">
      <div class="con">
        <div>
          <span class="iconfont icon-feiji"></span>
          <h4>94604</h4>
          <p>CUSTOMERS</p>
        </div>
        <div>
          <span class="iconfont icon-yangguangshatan"></span>
          <h4>1019</h4>
          <p>DESTINATION</p>
        </div>
        <div>
          <span class="iconfont icon-87"></span>
          <h4>25465</h4>
          <p>TOURS</p>
        </div>
        <div>
          <span class="iconfont icon-yonghu"></span>
          <h4>15</h4>
          <p>TOUR TYPES</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.four {
  min-width: 1100px;
  width: 100vw;
  height: 300px;
  background: url("../../../public/images/bg/1.jpg") no-repeat;
  position: relative;
}
.black {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  padding: 80px 0;
}
.con {
  width: 95%;
  height: 150px;
  margin: 0 45px;
  padding: 0 200px;
  box-sizing: border-box;
  display: flex;
  div {
    width: 22%;
    height: 98%;
    margin: 0 50px;
    padding: 10px 0;
    span {
      width: 100%;
      line-height: 40px;
      font-size: 50px;
      color: #fff;
      text-align: center;
      display: inline-block;
    }
    h4 {
      font-size: 30px;
      color: #f90;
      width: 100%;
      line-height: 50px;
      text-align: center;
    }
    p {
      width: 100%;
      text-align: center;
      color: #fff;
    }
  }
}
</style>
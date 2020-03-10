<template>
  <div class="six">
    <div class="black">
      <h2>SPECIAL TOUR IN JUNE, DISCOVER AMERICA FOR 100</h2>
      <p>
        CUSTOMERS WITH DISCOUNT
        <span>40%</span>
      </p>
      <div class="time">
        <p>0</p>
        <p>0</p>
        <p>00</p>
        <p>00</p>
      </div>
      <p class="btn"> <span>GET TOUR</span></p>
     
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.six {
  width: 100vw;
  height: 480px;
  background: url("../../../public/images/bg/2.jpg") no-repeat;
  position: relative;
}
.black {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  padding: 100px;
  box-sizing: border-box;
  h2{
    width: 95%;
    text-align: center;
    line-height: 50px;
    font-size: 35px;
    color: #fff;
  }
  p{
    width: 95%;
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-size: 30px;
    span{
      color: #ffb300;
      font-size: 50px;
    }
  }
  .time{
  width: 80%;
  height: 70px;
  margin: 30px 100px;
  padding: 10px 250px;
  box-sizing: border-box;
  display: flex;
  p{
     width: 40px;
    margin: 0 20px;
    height: 90%;
    background: rgba(255, 255, 255, .2);
    padding: 5px;
    color: #ffb300;
  }
  }
  .btn{
    width: 80%;
    height: 60px;
    margin: 0 80px;
    span{
      display: inline-block;
      font-size: 16px;
      color:#fff;
      width: 150px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      border: 1px solid #ffb300;
      border-radius: 30px;
      &:hover{
        background: #ffb300;
      }
    }
  }
}
</style>
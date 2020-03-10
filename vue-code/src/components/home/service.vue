<template>
  <div class="three">
    <div class="content">
      <div class="header">
        <h3>
          OUR
          <span>SERVICES</span>
        </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utllaf</p>
        <p></p>
      </div>
      <div class="three-content">
        <ul>
          <li>
            <dl>
              <dt class="icon">
                <span class="iconfont icon-shouji"></span>
                <span class="iconfont icon-shouji icon_orange"></span>
              </dt>
              <dd>
                <h3>Online Booking Services</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dliluptatem sequi nesciunt. Neque porro quisquam est</p>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt class="icon">
                <span class="iconfont icon-feiji"></span>
                <span class="iconfont icon-feiji icon_orange"></span>
              </dt>
              <dd>
                <h3>Book Cheap Online</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dliluptatem sequi nesciunt. Neque porro quisquam est</p>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt class="icon">
                <span class="iconfont icon-chuang"></span>
                <span class="iconfont icon-chuang icon_orange"></span>
              </dt>
              <dd>
                <h3>Hotel Booking</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dliluptatem sequi nesciunt. Neque porro quisquam est</p>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt class="icon">
                <span class="iconfont icon-qiche"></span>
                <span class="iconfont icon-qiche icon_orange"></span>
              </dt>
              <dd>
                <h3>Taxi Cap Booking</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dliluptatem sequi nesciunt. Neque porro quisquam est</p>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt class="icon">
                <span class="iconfont icon-yusan-"></span>
                <span class="iconfont icon-yusan- icon_orange"></span>
              </dt>
              <dd>
                <h3>Amazing Tour</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dliluptatem sequi nesciunt. Neque porro quisquam est</p>
              </dd>
            </dl>
          </li>
        </ul>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.three {
  min-width: 1100px;
  width: 100vw;
  height: 850px;
  .three-content {
    min-width: 1100px;
    width: 100%;
    height: 600px;
    display: flex;
    ul {
      width: 60%;
      height: 100%;
      li {
        width: 100%;
        height: 120px;
        padding: 0 15px;
        list-style: none;
        dl {
          width: 100%;
          height: 100%;
          display: flex;
          .icon {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin: 0 auto;
            background: #f6f6f6;
            position: relative;
            span {
              text-align: center;
              font-size: 30px;
              display: inline-block;
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
          dd {
            margin: 0 10px;
            flex: 8;
            h3 {
              line-height: 40px;
              color: #252525;
              font-weight: normal;
              &:hover {
                color: #ffb300;
              }
            }
            p {
              line-height: 30px;
              color: #999;
            }
          }
        }
      }
    }
    div {
      width: 40%;
      height: 100%;
      background: url("../../../public/images/others/service/1.png") no-repeat;
      background-size: 500px auto;
    }
  }
}
.content {
  min-width: 1100px;
  width: 100vw;
  height: 200px;
  box-sizing: border-box;
  padding: 0 110px;
  .header {
    min-width: 1100px;
    width: 100%;
    height: 150px;
    padding: 50px 0;
    h3 {
      width: 100%;
      height: 40%;
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
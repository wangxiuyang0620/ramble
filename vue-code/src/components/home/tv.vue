<template>
    <div class="tv">
          <ul>
            <li>
              <img src="../../../public/images/brand/1.png" alt="">
            </li>
            <li>
              <img src="../../../public/images/brand/2.png" alt="">
            </li>
            <li>
              <img src="../../../public/images/brand/3.png" alt="">
            </li>
            <li>
              <img src="../../../public/images/brand/4.png" alt="">
            </li>
            <li>
              <img src="../../../public/images/brand/1.png" alt="">
            </li>
          </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.tv{
  min-width: 1200px;
   width: 100vw;
   height: 350px;
   box-sizing: border-box;
   padding: 100px ;
   ul{
      box-sizing: border-box;
     width: 100%;
     height: 100%;
     display: flex;
     padding: 50px;
     border: 2px solid #ccc;
     li{
       list-style: none;
       padding: 20px;


     }
   }
}
</style>
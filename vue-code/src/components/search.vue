<template>
  <div class="sel">
    <div>
      <input v-model="user" type="text" placeholder="请输入你的名字" />
      <select v-model="arevalue">
        <option v-for="item in arelist" :key="item" :value="item">{{item}}</option>
      </select>
      <select v-model="monthvalue">
        <option v-for="item in monthlist" :key="item" :value="item">{{item}}</option>
      </select>
      <select v-model="numvalue">
        <option v-for="item in numlist" :key="item" :value="item">{{item}}</option>
      </select>
      <button>提交</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      arevalue: "",
      monthvalue: "",
      numvalue: "",
      arelist: ["巴黎", "埃及", "新加坡", "印度"],
      monthlist: ["六月", "七月", "八月", "九月"],
      numlist: ["两人", "三人", "四人", "五人"]
    };
  },
  methods: {
    async submit() {
      const { user, arevalue, monthvalue, numvalue } = this;
      let res = await this.$http("post", "/submit", {
        user,
        arevalue,
        monthvalue,
        numvalue
      });
      console.log(res);
      if (res.data.code === 200) {
        alert(res.data.msg);
      }
    },
    dataJson(name, value, type) {
      return { name, value, type };
    }
  },
  created() {
    this.arevalue = this.arelist[0];
    this.monthvalue = this.monthlist[0];
    this.numvalue = this.numlist[0];
  }
};
</script>
 
<style lang='scss' scoped>
.sel {
  min-width: 1000px;
  position: absolute;
  width: 90%;
  height: 150px;
  left: 0;
  bottom: 15px;
  z-index: 9999;
  box-sizing: border-box;
margin: auto;
padding: 0 100px;
  div {
    min-width: 1000px;
    box-sizing: border-box;
    padding: 50px 70px;
    width: 100%;
    height: 100%;
    border-radius: 120px;
    background: rgba($color: #fff, $alpha: 0.2);
    display: flex;
    input {
      flex: 1;
      border: none;
      outline: none;
    }
    select {
      flex: 1;
      margin: 0 10px;
      border: none;
      outline: none;
    }
    button {
      flex: 1;
      border: none;
      outline: none;
      background: #ffb300;
      color: #fff;
    }
  }
}
</style>
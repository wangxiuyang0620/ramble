<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
  color: #000;
}
html,body,#app{
  width: 100%;
  height: 100%;
}
#app{
  overflow-x: hidden;
}
</style>

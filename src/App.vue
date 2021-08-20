<template>
  <div id="app">
    <div class="box">
      <navbar></navbar>
      <router-view/>
      <foot></foot>
    </div>
  </div>
</template>
<script>
import navbar from "./components/nav/nav.vue"
import foot from "./components/footer/footer.vue"
export default {
    components:{
      navbar,foot
    },
    methods:{
      color(){
        console.log(123);
        document.body.style.setProperty("--textColor", "#d85916");
      }
    }
}
</script>
<style lang="less" scoped>
@import "./assets/css/base.css";
@import url("./assets/css/adaptive/2000.less") screen and (max-width:2000px);
@import url("./assets/css/adaptive/1200.less") screen and (max-width:1200px); 
@import url("./assets/css/adaptive/992.less") screen and (max-width:992px); 
@import url("./assets/css/adaptive/768.less") screen and (max-width:768px);

#app{
    width: 100vw;
    height: 100vh;
    .box{
        height: 100vh;
        overflow: auto;
        // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        position: absolute;
        top: 0;left: 0;right: 0;bottom: 0;
        margin: auto;
        &::-webkit-scrollbar{
            display: none;
        }
    }
}
</style>

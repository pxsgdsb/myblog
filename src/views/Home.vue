<template>
  <div class="home">
    <header>
      <div class="glass">
        <h1>HELLO WORLD</h1>
      </div>
    </header>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    
  }
}
</script>
<style lang="less" scoped>
  header{
    width: 100vw;
    height: 100vh;
    background: url("../assets/image/headerbg2.jpg");
    background-size:cover;
    .glass{
      width: 100%;
      height: 100%;
      background: rgba(08,08,08,0.4);
      box-shadow:inset 5px 5px 40px 20px #080808;
      animation: outrgba 2s ease 0s;
      animation-fill-mode: forwards;
      display: flex;
      align-items: center;
      h1{
        text-align: center;
        color: white;
        width: 100%;
        font-size: 50px;
      }
      &:hover{
        animation: inrgba 2s ease 0s;
        animation-fill-mode: forwards;
      }
      @keyframes inrgba{
          from {background: rgba(08,08,08,0.3);}
          to {background: rgba(08,08,08,.0);}
      }
      @keyframes outrgba{
          from {background: rgba(08,08,08,0);}
          to {background: rgba(08,08,08,.0.3);}
      }
    }
  }
</style>

<template>
  <div class="nav">
    <h1><span>鹿鹿鱼鱼</span><img src="../../assets/image/yz.png" alt=""></h1>
    <ul>
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/Class">分类</router-link></li>
      <li><router-link to="/About">关于</router-link></li>
    </ul>
    <hr />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import url("../../assets/css/adaptive/2000.less") screen and (max-width: 2000px);
@import url("../../assets/css/adaptive/1200.less") screen and (max-width: 1200px);
@import url("../../assets/css/adaptive/992.less") screen and (max-width: 992px);
@import url("../../assets/css/adaptive/768.less") screen and (max-width: 768px);
.nav {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  img{
    width: .8rem;
    height: 1.5rem;
    margin-bottom: .6rem;
  }
  h1 {
    font-family: var(--myfont);
    letter-spacing: 5px;
    font-size: 50px;
    color: var(--textColor);
    cursor: pointer;
    margin-bottom: 1rem;
    span {
      &:hover {
        margin-right: 0.1rem;
      }
    }
  }
  ul {
    display: flex;
    margin-bottom: 0.5rem;
    li {
      margin: 0 .3rem;
      border: 2px solid #080808;
      border-radius: 50%;
      width: 3rem;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
         margin-top: -.1rem;
      }
      a {
        width: 2.5rem;
        height: 2.5rem;
        text-align: center;
        line-height: 2.5rem;
        border: 1px solid #080808;
        border-radius: 50%;
        color: var(--textColor);
        font-family: var(--myfont2);
      }
    }
  }
  hr {
    background-color: var(--textColor);
    height: 1px;
    border: none;
  }
}
</style>
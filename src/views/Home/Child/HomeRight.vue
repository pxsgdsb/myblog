<template>
  <div class="home_right">
      <input type="text" class="search" placeholder="全站搜索">
      <p>分类</p>
      <hr>
      <ul>
        <li><div>&nbsp;&nbsp;</div><span>css(3)</span></li>
        <li><div>&nbsp;&nbsp;</div><span>js(2)</span></li>
        <li><div>&nbsp;&nbsp;</div><span>nodejs(3)</span></li>
        <li><div>&nbsp;&nbsp;</div><span>vue(3)</span></li>
        <li><div>&nbsp;&nbsp;</div><span>css(3)</span></li>
      </ul>
      <p>标签</p>
      <hr>
      <div>
        <span>css</span><span>python</span><span>net</span><span>go</span><span>php</span><span>js</span>
        <span>html</span><span>mqtt</span><span>net</span><span>nodejs</span><span>php</span><span>js</span>
      </div>
     
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import url("../../../assets/css/adaptive/2000.less") screen and (max-width: 2000px);
@import url("../../../assets/css/adaptive/1200.less") screen and (max-width: 1200px);
@import url("../../../assets/css/adaptive/992.less") screen and (max-width: 992px);
@import url("../../../assets/css/adaptive/768.less") screen and (max-width: 768px);
.home_right{
  input{
    width: 90%;
    border: 1px solid var(--textColor);
    padding: .5rem 5%;
    border-radius: 0;
    margin-top: 1rem;
    font-family: var(--myfont);
    &:focus{
      border: 1px solid var(--textColorHover);
    }
    &::-webkit-input-placeholder {
      font-family: var(--myfont);
    }
  }
  p{
    font-family: var(--myfont2);
    color: var(--textColor);
    letter-spacing: .2rem;
    font-weight: 800;
    margin: 3rem 0 .5rem 0;
  }
  hr{
    background-color: var(--textColor);
    height: 1px;
    border: none;
  }
  ul{
    li{
      margin-top: .5rem;
      display: flex;
      align-items: center;
      div{
          width: .3rem;
          height:.3rem;
          transform:rotate(45deg);
          -ms-transform:rotate(45deg); /* Internet Explorer */
          -moz-transform:rotate(45deg); /* Firefox */
          -webkit-transform:rotate(45deg); /* Safari 和 Chrome */
          -o-transform:rotate(45deg); /* Opera */
          background: #707070;
          display: inline-block;
          margin-top: 2px;
          margin-right: 1rem;
      }
      span{
        font-family: var(--myfont);
        color: #707070;
        letter-spacing: .1rem;
        &:hover{
          text-decoration: underline;
        }
      }
      &:hover span{
        color: var(--textColorHover);
      }
      &:hover div{
        background: var(--textColorHover);
      }
    }
  }
  div{
    width: 100%;
    span{
      display: inline-block;
      font-family: var(--myfont);
      color: #707070;
      letter-spacing: .1rem;
      margin-top: .5rem;
      padding: .2rem .5rem .2rem 0;
      &:hover{
        text-decoration: underline;
        color:  var(--textColorHover);
      }
    }
  }
}
</style>
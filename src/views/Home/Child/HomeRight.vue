<template>
  <div class="home_right">
      <input type="text" class="search" placeholder="全站搜索">
      <p>分类</p>
      <hr>
      <ul>
        <li v-for="(item,index) in classList" :key="index" :data-id="item.id"><div>&nbsp;&nbsp;</div><span>{{item.class_name}}</span></li>
      </ul>
      <p>标签</p>
      <hr>
      <div>
        <span v-for="(item,index) in labelList" :key="index" :data-id="item.id">{{item.label_name}}</span>
      </div>
     
  </div>
</template>

<script>
import {getClassList,getLabelList} from '@/request/getArticleData.js'
export default {
  data(){
    return{
      classList:[],
      labelList:[]
    }
  },
  created() {
    this.getData()
  },
  methods: {
      //分类与标签数据
      getData() {
        getClassList().then(res=>{
          this.classList = res.code===20000 || res.code===0 ? res.data : this.classList;
        })
        getLabelList().then(res=>{
          this.labelList = res.code===20000 || res.code===0 ? res.data : this.labelList;
        })
      }
  }
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
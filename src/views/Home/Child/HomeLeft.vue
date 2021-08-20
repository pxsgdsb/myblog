<template>
  <div class="home_left">
     <ul>
        <li v-for="(item,index) in listData" :key="index">
          <p class="title">{{item.article_title}}</p>
          <p class="date">{{item.add_time}}</p>
          <p>{{item.article_describe}}</p>
        </li>
     </ul>
  </div>
</template>

<script>
import {articleList} from '@/request/getArticleData.js'
export default {
  data(){
    return{
      listData:[{article_title:"数据请求失败!"}]
    }
  },
  created() {
    this.getData()
  },
  methods: {
      getData() {
        articleList().then(res => {
          this.listData = res.code===20000?res.data:this.listData;
          // console.log(this.listData);
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
.home_left{
  ul{
    li{
      font-family: var(--myfont);
      color: var(--textColor);
      letter-spacing: .2rem;
      margin-bottom: 3rem;
      .title{
        font-weight: 600;
        font-size: 20px;
      }
      p{
        margin: 1rem 0;
        color: #464545;
        
      }
      .date{
        font-size: .8rem;
        color: #7a7a7a;
        letter-spacing: .1rem;
      }
    }
  }
}
</style>
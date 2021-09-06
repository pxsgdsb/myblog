<template>
  <div class="Article">
    <div id="editor">
        <mavon-editor 
            v-model = 'markdownValue'
            previewBackground="#ffffff"
            :ishljs = "true"
            :boxShadow="false"
            :toolbarsFlag="false"
            :subfield="false"
            defaultOpen="preview"
        style="height: 100%">
        </mavon-editor>
    </div>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import {editorArticle} from '@/request/getArticleData.js'
export default {
    components: {
        mavonEditor 
    },
    data(){
        return{
            markdownValue:"数据请求失败!"
        }  
    },
    created() {
        //路由传参
        let id = this.$route.query.id
        if(id){
            editorArticle({id}).then(res=>{
                // console.log(res);
                this.markdownValue=res.data.word
            })
        }
    },
}
</script>

<style>
.v-note-wrapper{
    border: 0 !important;
    font-family: var(--myfont) !important;
}
</style>
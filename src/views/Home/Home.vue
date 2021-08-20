<template>
    <div class="home">
        <home-left></home-left>
        <home-right></home-right>
    </div>
</template>

<script>
import HomeLeft from "./Child/HomeLeft.vue"
import HomeRight from "./Child/HomeRight.vue"
export default {
    components:{
        HomeLeft,HomeRight
    }
}
</script>

<style lang="less" scoped>
.home{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}
</style>
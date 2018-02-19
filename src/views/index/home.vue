<template>
    <div class="index-wrap flex-column">
        <div class="headHome">
            <div class="w1200 clearfix">
                <span class="mr_15 fl span1">TOP5</span>
                <span class="mr_15 fl span2">24h涨跌</span>
                <span class="fl">1.NAS2CK.USD</span>
                <span class="ml_15 fl span3">+81.86%</span>
                <span class="ml_20 fl">1.NAS2CK.USD</span>
                <span class="ml_15 fl span3">+81.86%</span>
                <span class="ml_20 fl">1.NAS2CK.USD</span>
                <span class="ml_15 fl span3">+81.86%</span>
                <span class="ml_20 fl">1.NAS2CK.USD</span>
                <span class="ml_15 fl span3">+81.86%</span>
                <span class="ml_20 fl">1.NAS2CK.USD</span>
                <span class="ml_15 fl span3">+81.86%</span>
            </div>
        </div>
        <img v-bind:src="msg" alt="">
        <div class="banner">
            <div class="block">
                <el-carousel height="500px">
                <el-carousel-item v-for="item in itemList" :key="item">
                    <h3><img v-bind:src="item" alt=""></h3>
                </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <div class="home w1000">
            <div class="homeInfo">
                
            </div>
        </div>
        <Foot/>
    </div>
</template>
<script>
    import Head from '@/components/Head'
    import Foot from '@/components/Foot'
    export default {
        name: 'home',
        components: {Head,Foot},
        data() {
            return {
                msg: '@/assets/img/img5.jpg',
                itemList: ["@/assets/img/img5.jpg"]
            }
            
        },
        created(){
            
        },
        methods: {}
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
    .w1200{
        width: 1200px;
        margin: 0 auto;
    }
    .headHome{
        height: 40px;
        background: #272727;
        line-height: 40px;
        color: #fff;
        .span1{
            color: #ffb400;
        }
        .span3{
            color: #1fa26e;
        }
    }
</style>

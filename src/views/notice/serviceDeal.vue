<template>
    <div class="serviceDeal-wrap flex-column">
        <Head/>
        <div class="serviceDeal w1000">
            <img src="@/assets/img/img2.jpg" alt="">
        </div>
        <Foot/>
    </div>
</template>
<script>
    import Head from '@/components/Head'
    import Foot from '@/components/Foot'
    export default {
        name: 'serviceDeal',
        components: {Head,Foot},
        data() {
            return {
                msg: ''
            }
            
        },
        created(){
            
        },
        methods: {}
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
    .serviceDeal{

    }
</style>

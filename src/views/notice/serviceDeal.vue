<template>
    <div class="serviceDeal-wrap flex-column">
        <Head :userName="userName"/>
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
                msg: '',
                userName:''
            }
            
        },
        created(){
            let _this = this;
            this.$filter.auth(function (msg) {
                _this.userName = msg.name;
            });
            
        },
        methods: {}
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
    .serviceDeal{

    }
</style>

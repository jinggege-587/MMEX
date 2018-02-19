<template>
    <div class="index-wrap flex-column">
        <Head/>
        <div class="index w1000">
            <div class="indexInfo">
                
            </div>
        </div>
        <Foot/>
    </div>
</template>
<script>
    import Head from '@/components/Head'
    import Foot from '@/components/Foot'
    export default {
        name: 'index',
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
    
</style>

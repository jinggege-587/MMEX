<template>
    <div class="apply-wrap flex-column">
        <Head/>
        <div class="apply w1000">
            <div class="applyInfo">
                <p class="p1">上币申请</p>
                <p class="p2">如果您想在MMEX申请上币，请下载附件《MMEX上币信息表》，请按要求填写我们附件内所需要的信息。

                    填写完成后请通过上传功能将信息发送给我们，我们会在5个工作日内了解项目并与您联系。

                    MMEX商务邮箱：business@mmex.ca。
                </p>
                <div class="applyBtm">
                    <div class="top">

                    </div>
                </div>
            </div>
        </div>
        <Foot/>
    </div>
</template>
<script>
    import Head from '@/components/Head'
    import Foot from '@/components/Foot'
    export default {
        name: 'apply',
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
    .apply{
        .applyInfo{
            margin-top: 45px;
            border: 1px solid #f9f9f9;
            min-height: 450px;
            margin-bottom: 180px;
            color: #666666;
            .p1{
                padding-top: 60px;
                padding-bottom: 40px;
                font-size: 17px;
                font-weight: bold;
                text-align: center;
            }
            .p2{
                font-size: 16px;
                line-height: 40px;
                padding: 0 132px;
                text-align: left;
            }
            .applyBtm{
                padding-top: 60px;
            }
        }
    }
</style>

<template>
    <div class="payAndSell-wrap flex-column">
        <Head/>
        <div class="payAndSell">
            <div class="payAndSellTop ">
                <div class="w1000 clearfix">
                    <div class="left fl">
                        <p class="p1">MMEX充值与变现攻略</p>
                        <div class="tab">
                            <span class="on">购买CK.USD</span>
                            <span>变现CK.USD</span>
                        </div>
                    </div>
                    <div class="right fr">
                        <img src="@/assets/img/img4.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class=" w1000">
                <img src="@/assets/img/img3.jpg" alt="">
            </div>
        </div>
        <Foot/>
    </div>
</template>
<script>
    import Head from '@/components/Head'
    import Foot from '@/components/Foot'
    export default {
        name: 'payAndSell',
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
    .payAndSell{
        .payAndSellTop{
            height: 120px;
            background: #3e868f;
            .left{
                .p1{
                    font-size: 18px;
                    color: #ffffff;
                    text-align: left;
                    padding-top: 45px;
                    padding-bottom: 25px;
                }
                .tab{
                    span{
                        color: #fff;
                        font-size: 12px;
                        margin-right: 15px;
                        cursor: pointer;
                        &.on{
                            color: #ffb400;
                            border-bottom: 2px solid #ffb400;
                        }
                    }
                }
            }
            .right{
                padding-top: 40px;
            }
        }
    }
</style>

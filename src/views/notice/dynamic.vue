<template>
    <div class="dynamic-wrap flex-column">
        <Head :userName="userName"/>
        <div class="dynamicBox w1000">
            <div class="searBox clearfix">
                <div class="searInfo clearfix">
                    <el-input v-model="input" placeholder="请输入搜索内容"></el-input>
                    <el-button type="primary">搜索</el-button>
                </div>
            </div>
            <div class="newMove">
                <div class="title">
                    最新动态
                </div>
                <div class="list">
                    <ul>
                        <li v-for="item in list">
                            <a href="" class="clearfix">
                                <div class="ListLeft fl">
                                    {{item.txt}}
                                </div>
                                <div class="ListRight fr">
                                    {{item.time}}
                                </div>
                            </a>
                        </li>
                    </ul>
                    <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
                    </el-pagination>
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
        name: 'dynamic',
        components: {Head,Foot},
        data() {
            return {
                msg: '',
                input: '',
                list:[
                    {
                        txt:'【系统】MMEX赠送活动现在已结束并完成送币',
                        time:'2017-12-29  12:13:39'
                    },
                    {
                        txt:'【系统】MMEX赠送活动现在已结束并完成送币',
                        time:'2017-12-29  12:13:39'
                    },
                    {
                        txt:'【系统】MMEX赠送活动现在已结束并完成送币',
                        time:'2017-12-29  12:13:39'
                    },
                    {
                        txt:'【系统】MMEX赠送活动现在已结束并完成送币',
                        time:'2017-12-29  12:13:39'
                    },{
                        txt:'【系统】MMEX赠送活动现在已结束并完成送币',
                        time:'2017-12-29  12:13:39'
                    },{
                        txt:'【系统】MMEX赠送活动现在已结束并完成送币',
                        time:'2017-12-29  12:13:39'
                    },{
                        txt:'【系统】MMEX赠送活动现在已结束并完成送币',
                        time:'2017-12-29  12:13:39'
                    }
                ],
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
    .dynamicBox{
        .searBox{
            .searInfo{
                float: right;
                width: 250px;
                padding: 5px 0;
                .el-input{
                    float: left;
                    width: 170px;
                    margin-right: 5px;
                }
                .el-button{
                    float: left;
                }
            }
        }
        .newMove{
            border: 1px solid #ebebeb;
            border-top: 2px solid #ebebeb;
            min-height: 450px;
            margin-bottom: 75px;
            .title{
                height: 49px;
                line-height: 49px;
                text-align: left;
                color: #666666;
                border-bottom: 1px solid #3e868f;
                padding-left: 25px;
            }
            .list{
                ul{
                    li{
                        height: 52px;
                        line-height: 52px;
                        color: #666666;
                        border-bottom: 1px dotted #ebebeb;
                        .ListLeft{
                            padding-left: 25px;
                        }
                        .ListRight{
                            padding-right: 85px;
                        }
                    }
                }
                .el-pagination{
                    padding: 40px 0;
                }
            }
        }
    }
</style>

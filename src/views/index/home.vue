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
        <div class="banner">
            <div class="w1200 header clearfix">
                <div class="logo fl">
                    <img src="@/assets/img/logo.png" alt="">
                </div>
                <div class="fl menuTop">
                    <ul>
                        <li><a href="#/home" class="active">交易中心</a></li>
                        <li><a href="#/dynamic">公告中心</a></li>
                        <li><a href="#/user_index">我的账户</a></li>
                        <!-- <li class="icon">
                            <a href="javascript:;">我的账户</a>
                            <dl>
                                <dt><a href="#/user_index/">账户资产</a></dt>
                                <dt><a href="#/record">充提记录</a></dt>
                                <dt><a href="#/delegation/">委托管理</a></dt>
                                <dt><a href="#/my_order/">我的成交</a></dt>
                                <dt><a href="#/securitys/">安全中心</a></dt>
                                <dt><a href="#/realName/">实名认证</a></dt>
                                <dt><a href="#/affirm/">双重认证</a></dt>
                                <dt><a href="#/updatePsw/">修改密码</a></dt>
                                <dt><a href="#/syslist/">系统消息</a></dt>
                            </dl>
                        </li> -->
                        <li><a href="#/dynamic">最新活动</a></li>
                    </ul>
                </div>
                <div class="fr login_rgeise clearfix">
                    <span class="fl"><a href="#/login">登录</a></span>
                    <span class="center"></span>
                    <span class="fr"><a href="#/register">注册</a></span>
                </div>
            </div>
            <div class="block">
                <el-carousel height="500px">
                <el-carousel-item v-for="item in itemList" :key="item">
                    <h3><img v-bind:src="item" alt=""></h3>
                </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <div class="home w1200">
            <div class="notice">
                <i></i>
                <span>最新公告：MMEX即将开启暴风BCF播酷云第一轮抢购</span>
                <a href="">查看更多</a>
            </div>
            <div class="homeInfo">
                <div class="panel clearfix">
                    <span class="on">CK.USD交易区</span>
                    <span>BTC交易区</span>
                    <span>ETH交易区</span>
                </div>
                <template>
                    <el-table
                        :data="tableData"
                        style="width: 100%;"
                         class="el_table"
                        :default-sort = "{prop: 'name', order: 'descending'}"
                    >
                        <el-table-column
                            prop="name"
                            label="币名"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="newPrice"
                            label="最新价格(CK.USD）"
                            sortable
                            width="220">
                        </el-table-column>
                        <el-table-column
                            prop="make24"
                            sortable
                            label="24h成交量"
                            width="165">
                        </el-table-column>
                        <el-table-column
                            prop="make24ck"
                            sortable
                            label="24h成交额(CK.USD)"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="allPrice"
                            sortable
                            label="总市值(CK.USD)"
                            width="170">
                        </el-table-column>
                        <el-table-column
                            prop="upAndDown24h"
                            sortable
                            label="24H涨跌"
                            width="100">
                        </el-table-column>
                        <el-table-column
                            prop="upAndDown7d"
                            sortable
                            label="7D涨跌"
                            width="95">
                        </el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <a href="">去交易</a>
                            </template>
                        </el-table-column>
                    </el-table>
                </template>
                <div class="partner clearfix">
                    <div class="fl">
                        <a href="" ></a>
                    </div>
                    <div class="fl ml_15">
                        <a href="" class="a2"></a>
                    </div>
                    <div class="fl ml_15">
                        <a href="" class="a3"></a>
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
        name: 'home',
        components: {Head,Foot},
        data() {
            return {
                itemList: ['https://static.bcex.ca/upload/admin/1fc37af88bcf53976612d43009fc589a.jpg','https://static.bcex.ca/upload/admin/d8988f65f17ab94583b66d18b71a1c34.jpg','https://static.bcex.ca/upload/admin/97785c0ad7f17d169d38b86fec437912.jpg'],
                tableData:[
                    {
                        name:'比特币BTC',
                        newPrice:'16716.00↓/￥102522.2112',
                        make24:'2111689.2265',
                        make24ck:'2111689.2265',
                        allPrice:'5461111453000.00',
                        upAndDown24h:'+10.59%',
                        upAndDown7d:'-10.59%'
                    },
                    {
                        name:'比特币BTC',
                        newPrice:'16716.00↓/￥102522.2112',
                        make24:'2111689.2265',
                        make24ck:'2111689.2265',
                        allPrice:'5461111453000.00',
                        upAndDown24h:'+10.59%',
                        upAndDown7d:'-10.59%'
                    }
                ]
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
    .banner{
        background: #000000;
        position: relative;
        .block{
            width: 1920px;
            position: relative;
            left: 50%;
            margin-left: -960px;
        }
        
    }
    .header{
        position: absolute;
        top: 0px;
        z-index: 9999;
        left: 50%;
        margin-left: -600px;
		height: 58px;
		line-height: 58px;
		.logo{
			height: 58px;
			img{
				padding: 10px 0;
			}
        }
        .menuTop{
            margin-left: 120px;
            ul{
                li{
                    float: left;
                    width: 100px;
                    a{
                        color: #fff;
                        &.active{
                            border-bottom: 2px solid #ffffff;
                        }
                    }
                    &.icon{
                        background: url(../../assets/img/icon5.png) no-repeat right;
                        position: relative;
                        dl{
                            display: none;
                            position: absolute;
                            z-index: 9;
                            background: #fff;
                            top: 30px;
                            left: 12px;
                            border: 1px solid #eaeaea;
                            dt{
                                width: 100px;
                                a{
                                    height: 26px;
                                    line-height: 26px;
                                    font-size: 12px;
                                    width: 70px;
                                    text-align: center;
                                    display: block;
                                }
                                &:hover{
                                    background: #3e868f;
                                    a{
                                        color: #fff;
                                    }
                                }
                            }
                        }
                        &:hover{
                            dl{
                                display: block;
                            }
                        }
                    }
                }
            }
        }
        .login_rgeise{
            height: 30px;
            width: 125px;
            border: 1px solid #fff;
            border-radius: 15px;
            margin-top: 15px;
            span{
                line-height: 30px;
                text-align: center;
                width: 62px;
                a{
                    color: #fff;
                }
            }
            .center{
                float: left;
                width: 1px;
                height: 13px;
                margin-top: 9px;
                background: #ffffff;
            }
        }
    }
    .home{
        .notice{
            height: 56px;
            line-height: 56px;
            margin: 15px 0 20px;
            border: 2px solid #f7f7f7;
            i{
                width: 13px;
                height: 15px;
                display: inline-block;
                background: url(../../assets/img/icon8.png) no-repeat;
            }
            span{
                font-size: 14px;
                color: #333;
            }
            a{
                font-size: 12px;
            }
        }
        .homeInfo{
            text-align: left;
            .panel{
                padding-top: 30px;
                border-top: 2px solid #f7f7f7;
                border-bottom: 2px solid #f7f7f7;
                margin-bottom: 20px;
                span{
                    font-size: 16px;
                    color: #333333;
                    margin-right: 55px;
                    float: left;
                    line-height: 34px;
                    cursor: pointer;
                    margin-bottom: -1px;
                    padding-right: 10px;
                    padding-left: 5px;
                    &:hover{
                        color: #3e868f;
                        border-bottom: 4px solid #3e868f;
                    }
                    &.on{
                        color: #3e868f;
                        border-bottom: 4px solid #3e868f;
                    }
                }
            }
            .el_table{
                margin-bottom: 30px;
            }
            .partner{
                margin-bottom: 20px;
                div{
                    width: 385px;
                    height: 86px;
                    border: 2px solid #f6f4f4;
                    border-radius: 5px;
                    a{
                        width: 385px;
                        height: 86px;
                        line-height: 86px;
                        display: block;
                        background:url(../../assets/img/img6.jpg) no-repeat center;
                    }
                    .a2{
                        background:url(../../assets/img/img7.jpg) no-repeat center;
                    }
                    .a3{
                        background:url(../../assets/img/img8.jpg) no-repeat center;
                    }
                }
            }
        }
    }
</style>

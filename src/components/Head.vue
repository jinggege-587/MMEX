<template>
    <div class="template ">
        <div class="head-top">
            <div class="w1000 clearfix">
                <div class="fl headTopLeft clearfix">
                    <div class="service fl">
                        客服:{{service}}
                    </div>
                    <div class="country fl ">
                        <a class="ml_10" href="javascript:;">中国</a>
                        <i></i>
                    </div>
                </div>
                <div class="fr headTopRight">
                    <div class="backOut fr" @click="backOut()">退出</div>
                    <i></i>
                    <div class="userName fr">{{userName}}</div>
                </div>
            </div>
        </div>
		<div class="header w1000 clearfix">
			<div class="logo fl">
				<img src="@/assets/img/logo.png" alt="">
			</div>
			<div class="fr menuTop">
                <ul>
                    <li><a href="#/home">交易中心</a></li>
                    <li><a href="#/dynamic">公告中心</a></li>
                    <li class="icon">
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
                    </li>
                    <li><a href="#/dynamic">最新活动</a></li>
                </ul>
			</div>
		</div>
		<div class="hbb"></div>
    </div>
</template>

<script>
export default {
    name: 'Head',
    data () {
        return {
        msg: '',
        service:'service@mmex.ca',
        userName:'12345678912@qq.com (ID:125546)'
        }
    },
    created(){
        // this.login();
    },
    methods:{
        backOut(){

        },
        login(){
            let host = localStorage.mc,jwt = localStorage.jwt;
            this.auth_server = require('socket.io-client')(host);
            window.auth_server = this.auth_server;
            this.auth_server.emit('user', { path: '/user/login', body: {jwt:jwt} }, (msg) => {
                console.log('登录成功！',msg);
                if(msg.error){
                    this.$message.error({
                        message: msg.error
                    });
                }else{
                    this.$router.push({path: '/index'})
                }
            });
        }
    }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
	.hbb{
		height: 0px;
		border-bottom: 1px solid #ebebeb;
	}
	.header{
		height: 58px;
		line-height: 58px;
		.logo{
			height: 58px;
			img{
				padding: 10px 0;
			}
        }
        .menuTop{
            ul{
                li{
                    float: left;
                    width: 100px;
                    a{
                        color: #999;
                    }
                    &.icon{
                        background: url(../assets/img/icon5.png) no-repeat right;
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
    }
    .head-top{
        height: 30px;
        padding-top: 10px;
        background: #f9f9f9;
        line-height: 22px;
        .headTopLeft{
            width: 45%;
            .service{
                padding-left: 25px;
                color: #999;
                background: url(../assets/img/icon6.png) no-repeat left;
            }
            .country{
                margin-left: 70px;
                padding-left: 25px;
                color: #999;
                float: left;
                background: url(../assets/img/icon6.png) no-repeat left;
                i{
                    float: right;
                    width: 22px;
                    height: 22px;
                    margin-left: 5px;
                    display: inline-block;
                    background: url(../assets/img/icon5.png) no-repeat left;
                }
            }
        }
        .headTopRight{
            width: 45%;
            font-size: 14px;
            color: #999;
            .backOut{
                padding-left: 15px;
                cursor: pointer;
            }
            .userName{
                margin-right: 15px;
            }
            i{
                float: right;
                height: 15px;
                margin-top: 3px;
                border-left: 1px solid #999999;
            }
        }
    }
</style>

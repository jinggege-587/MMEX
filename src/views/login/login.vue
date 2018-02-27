<template>
    <div class="login-wrap flex-column">
        <Header/>
        <div class="login w1000">
            <div class="box-con">
                <div class="clearfix">
                    <div class="login-info fl">
                        <div class="title">
                            MMEX用户登录
                        </div>
                        <el-form :model="ruleForm" :rules="rulesLogin" ref="ruleForm" class="ruleForm">
                            <el-form-item label="手机号/邮箱" prop="username">
                                <el-input v-model="ruleForm.username" placeholder="请输入手机号/邮箱"/>
                            </el-form-item>
                            <el-form-item label="登录密码" prop="password" class="el-form-item__password">
                                <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码" auto-complete="off"/>
                            </el-form-item>
                            <div class="forget-box">
                                <span class="forget fr wt-interact" @click="$router.push({query:{view:'f'}})">忘记密码</span>
                            </div>
                            <el-form-item class="pt5">
                                <el-button class="submitBtn" type="primary" @click="submitForm('ruleForm')">登录</el-button>
                            </el-form-item>
                            <p class="btm-p">没有MMBX帐号？<a href="#/register">注册一个</a></p>
                        </el-form>
                    </div>
                    <div class="other-login fl">
                        <div class="otherInfo">
                            <div class="title">
                                快捷登录方式
                            </div>
                            <ul>
                                <li></li>
                                <li class="li1"></li>
                                <li class="li2"></li>
                                <li class="li3"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import Footer from '@/components/Footer'
    export default {
        name: 'login',
        components: {Header,Footer},
        data() {
            return {
                msg: '',
                ruleForm: {
                    password: '',
                    username:''
                },
                rulesLogin:{
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 6, max: 20, message: '请输入正确密码', trigger: 'blur' }
                    ],
                    username: [
                        { required: true, message: '请输入手机号/邮箱', trigger: 'blur' },
                        { min: 1, max: 20, message: '请输入正确手机号/邮箱', trigger: 'blur' }
                    ]
                },
            }
            
        },
        sockets: {
            connect() {
                console.log('socket connected');
            }
        },
        created(){
            // this.$store.dispatch("loginFailure")
            const jwt = require('jsonwebtoken');
            const _ = require('lodash');

            const sleep = function (t) {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve();
                    }, t);
                })
            }
            const user = {
                email: 'boyce.zheng@lingxi.co',
                _id: '5a643c4ae75c051f3511a294',
                group: '589802a84f13fa6973655bac',
                name: 'boyce'
            }

            const user_info_register = {
                path: '/user/info/register',
                body: {
                    email: 'bbbbbb@12.com',
                    loginPassword: '123456',
                    country: '中国',
                    inviteCode: '123456'
                }
            }
            const user_certification_identify = {
                path: '/user/certification/identify',
                body: {
                    name: 'boyce',
                    type: '身份证',
                    id: '330124198605282231',
                    phone: '15000095455',
                    code: '408839'
                }
            }

            const user_password_register = {
                path: '/user/password/register',
                body: {
                    tradePassword: '123456',
                }
            }

            class Client {

                constructor() {
                    this.host = 'http://dev.auth.wanbiwang.com';
                }

                /**
                * 权限验证，获得MC地址
                */
                auth() {
                    this.auth_server = require('socket.io-client')(this.host);
                    this.auth_server.on('connect', () => {
                        jwt.sign(user, 'lingxi', { expiresIn: '7d' }, (err, token) => {
                            debugger
                            this.auth_server.emit('auth', { path: '/user/login', body: { jwt: token } }, (msg) => {
                                console.log(msg,2);
                                this.login(msg.body);
                            });
                        });
                    });

                }

                /**
                 * 登陆至MC服务器
                 * @param {any} msg     权限服务器返回的消息队列
                 * @returns 
                 */
                login(msg) {
                    if (_.get(msg, 'error') || !_.get(msg, 'mc')) {
                        return console.error(msg.error);
                    }
                    this.mc = msg.mc;
                    this.jwt = msg.jwt;
                    this.client = require('socket.io-client')(this.mc);
                    this.client.on('connect', () => {
                        this.client.emit('user', { path: '/user/login', body: { jwt: this.jwt } }, (msg) => console.log(msg,1));
                        this.auth_server.close();
                        this.task();
                    });
                }

                async task(i) {
                    const user_test = {
                        path: '/user/test',
                        body: {
                            email: 'bbbbbb@12.com',
                            password: '123456',
                            name: 'boyce'
                        }
                    }

                    const captcha_get = {
                        path: '/captcha/get',
                        body: {}
                    }
                    const captcha_test = {
                        path: '/captcha/test',
                        body: { accountId: '123' }
                    }
                    this.client.emit('msg', captcha_test, (msg) => {
                    });
                }
            }

            const client = new Client();
            client.auth();
            (async () => {
                await sleep(5000);
                console.time('client');
                for (var i = 0; i < 3; ++i) {
                    await sleep(Math.ceil(Math.random() * 2));
                    client.task(i);
                }
                console.timeEnd('client');
            })();

        },
        methods: {}
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
    .login-wrap{
        min-height:100%;
        .login-info{
            width: 590px;
            .title{
                padding-top: 110px;
                padding-left: 230px;
                font-size: 24px;
                color: #999;
                line-height: 30px;
                padding-bottom: 70px;
                text-align: left;
            }
            .forget-box{
                height: 20px;
                padding-right: 140px;
                .forget{
                    font-size: 12px;
                    cursor: pointer;
                    color: #3e868f;
                }
            }
            .el-button--primary{
                width: 250px;
                margin-right: -60px;
            }
            .btm-p{
                font-size: 12px;
                text-align: right;
                height: 20px;
                padding-right: 140px;

            }
        }
        .other-login{
            width: 408px;
            .otherInfo{
                margin-top: 120px;
                padding-top: 85px;
                border-left: 1px solid #ebebeb;
                height: 270px;
                .title{
                    font-size: 24px;
                    color: #999;
                    line-height: 30px;
                    text-align: left;
                    padding-left: 128px;
                }
                ul{
                    margin-left: 90px;
                    margin-top: 40px;
                    li{
                        width: 36px;
                        height: 36px;
                        float: left;
                        margin-right: 20px;
                        cursor: pointer;
                        background: url(../../assets/img/icon3.png) no-repeat;
                        &.li1{
                            background-position-x: -58px;
                        }
                        &.li2{
                            background-position-x: -116px;
                        }
                        &.li3{
                            background-position-x: -174px;
                        }
                    }
                }
            }
        }
    }
    
</style>

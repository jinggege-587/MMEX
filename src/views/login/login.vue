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
        created(){
            // this.$store.dispatch("loginFailure")
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

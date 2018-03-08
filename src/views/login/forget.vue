<template>
    <div class="forget-wrap flex-column">
        <Header/>
        <div class="forget w1000">
            <div class="box-con">
                <div class="forget-info">
                    <div class="title">
                        找回登录密码
                    </div>
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="通过注册邮箱找回" width="150" name="first">
                            <el-form :label-position="labelPosition" label-width="120px" :model="formForget" :rules="rulesForget" ref="formForget">
                                <el-form-item label="电子邮箱：">
                                    <el-input v-model="formForget.email"></el-input>
                                </el-form-item>
                                <el-form-item label="验证码：">
                                    <el-input v-model="formForget.value" style="width:180px;"></el-input>
                                    <img v-bind:src="imgCode" alt="" class="imgCode" @click="imgCodeClick()">
                                </el-form-item>
                                <el-form-item class="pt5">
                                    <el-button class="submitBtn" type="primary" @click="submitFormEmail('ruleForm')">找回密码</el-button>
                                </el-form-item>
                                <div class="btm-p clearfix">
                                    <div class="fl">已有账号<a href="#/Login">登录</a></div>
                                    <div class="fr">没有MMBX帐号？<a href="#/register">注册一个</a></div>
                                </div>
                            </el-form>
                        </el-tab-pane>
                        <el-tab-pane label="通过绑定手机找回" name="second">
                            <el-form :label-position="labelPosition" label-width="120px" :model="ForgetPhone" :rules="rulesForgetPhone" ref="ForgetPhone">
                                <el-form-item label="国家：" prop="country">
                                    <inputCountry :width='200' v-on:listenToChildEvent="inputCountry"/>
                                </el-form-item>
                                <el-form-item label="手机号：">
                                    <el-input v-model="ForgetPhone.phone"></el-input>
                                </el-form-item>
                                <el-form-item label="短信验证码：">
                                    <el-input v-model="ForgetPhone.msgCode" style="width:170px;"></el-input>
                                    <a href="javascript:;" class="code" @click="phoneCodeClick()">{{phoneCode}}</a>
                                </el-form-item>
                                <el-form-item label="设置新登录密码：">
                                    <el-input type="password" v-model="ForgetPhone.psw"></el-input>
                                </el-form-item>
                                <el-form-item label="确认新登录密码：">
                                    <el-input type="password" v-model="ForgetPhone.checkPsw"></el-input>
                                </el-form-item>
                                <el-form-item class="pt5">
                                    <el-button class="submitBtn" type="primary" @click="submitFormPhone('ruleForm')">找回密码</el-button>
                                </el-form-item>
                                <div class="btm-p clearfix">
                                    <div class="fl">已有账号<a href="#/Login">登录</a></div>
                                    <div class="fr">没有MMBX帐号？<a href="#/register">注册一个</a></div>
                                </div>
                            </el-form>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import Footer from '@/components/Footer'
    import inputCountry from '@/components/inputCountry'
    export default {
        name: 'forget',
        components: {Header,Footer,inputCountry},
        data() {
            var checkImgCode = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入图片验证码'));
                } else {
                    if (!/^[0-9]{4}$/.test(value)) {
                        callback(new Error('请输入正确的图片验证码'));
                    }else{
                        this.$ajax({
                            url:'/code/validate',
                            data:{
                                randoms:this.random,
                                value:this.ruleRegister.randoms,
                            },
                            async:false,
                            success:() => {
                                callback()
                            },
                            error:() => {
                                callback(new Error('请输入正确的图片验证码'))
                            }
                        })
                    }
                }
            };
            var phone = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入手机号'));
                } else {
                    if (!/^[1][3,4,5,8,7,9][0-9]{9}$/.test(value)) {
                        callback(new Error('请输入正确的手机号'));
                    }
                    callback();
                }
            };
            var checkSmsCode = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入短信验证码'));
                } else {
                    if (!/^[0-9]{6}$/.test(value)) {
                        callback(new Error('请输入正确的短信验证码'));
                    }else{
                        if(!this.checkSmsCode){
                            this.$ajax({
                                url:'/code/validateSmsCode',
                                data:{
                                    telephone:this.ruleRegister.telephone,
                                    code:this.ruleRegister.smsCode
                                },
                                async:false,
                                success:() => {
                                    this.checkSmsCode = true
                                    callback()
                                },
                                error:() => {
                                    callback(new Error('请输入正确的短信验证码'))
                                }
                            })
                        }else {
                            callback()
                        }
                    }
                }
            };

            var validatePass1 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm2.checkPass !== '') {
                        this.$refs.ruleForm2.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm2.passJy) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                imgCode: '',
                labelPosition: 'right',
                activeName: 'first',
                phoneCode:'获取短信验证码',
                formForget: {
                    email: '',
                    value:'',
                    captchaL:''
                },
                rulesForget:{
                    email: [
                        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
                    ],
                    imgCode: [
                        { validator: checkImgCode, trigger: 'blur' }
                    ],
                },
                ForgetPhone:{
                    country:'',
                    phone:'',
                    msgCode:'',
                    psw:'',
                    checkPsw:''
                },
                rulesForgetPhone:{
                    phone: [
                        { validator: phone, trigger: 'blur' }
                    ],
                    msgCode: [
                        { validator: checkSmsCode, trigger: 'blur' }
                    ],
                    psw: [
                        { validator: validatePass1, trigger: 'blur' },
                        { min: 6, max: 20, message: '密码长度6-20位', trigger: 'blur' }
                    ],
                    checkPsw: [
                        { validator: validatePass2, trigger: 'blur' }
                    ]
                }
            }
            
        },
        created(){
            this.__captcha__get();
        },
        methods: {
            inputCountry:function(data){
                this.ForgetPhone.country = data;
            },
            imgCodeClick() {
                this.__captcha__get();
            },

            //获取图片验证码
            __captcha__get:function(){
                let _this = this;
                this.$api.__captcha__get({},
                    (msg) => {
                        console.log('获取图片验证码',msg);
                        _this.imgCode = msg.url;
                        _this.formForget.captcha = msg.captcha;
                    },
                    err => {
                        this.$message.error({
                            message: err.error
                        });
                    }
                );
            },
            phoneCodeClick(){
                let time = 60;
                let _this = this;
                if(!this.$filter.phone(this.ForgetPhone.phone)) {
                    this.$message.error({
                        message: '请输入正确手机号'
                    });
                    return false;
                }
                var param = {phone:this.ForgetPhone.phone}
                this.$api.__sms__get(param,
                    (msg) => {
                        console.log(msg);
                        let time = 60;
                        _this.phoneCode = time;
                        let timeOut = setInterval(function(){
                            if(time > 0){
                                _this.phoneCode = time--
                            }else{
                                _this.phoneCode = '获取验证码';
                                clearInterval(timeOut);
                            }
                        },1000);
                    },
                    err => {
                        this.$message.error({
                            message: err.errorMessage
                        });
                    }
                );
            },
            submitFormEmail(){
                let _this = this;
                this.$api.__email__password__change(this.formForget,
                    (msg) => {
                        console.log('邮箱找回成功',msg);
                        if(msg.error){
                            this.$message.error({
                                message: msg.error
                            });
                        }else{
                            console.log('邮箱找回成功',msg);
                            this.$message.success({
                                message: '邮箱找回成功!快去邮箱里面充值密码吧！'
                            });
                        }
                    },
                    err => {
                        this.$message.error({
                            message: err.error
                        });
                    }
                );
            },
            submitFormPhone(){
                let _this = this;
                let param = {
                    phone : this.ForgetPhone.phone,
                    code : this.ForgetPhone.msgCode,
                    password:this.ForgetPhone.psw,
                };
                this.$api.__user__password__update__phone(param,
                    (msg) => {
                        console.log('密码找回成功',msg);
                        this.$message.success({
                            message: '密码找回成功!'
                        });
                    },
                    err => {
                        this.$message.error({
                            message: err.error
                        });
                    }
                );
            },
            handleClick(tab, event) {
                var _this = this;
                if(tab.label==='通过注册邮箱找回'){
                    this.imgCodeClick();
                    document.onkeyup = function(event){
                        if(event.keyCode==13) {
                            _this.submitFormEmail('formForget');
                        };
                    };

                }else{
                    document.onkeyup = function(event){
                        if(event.keyCode==13) {
                            _this.submitFormPhone('ForgetPhone');
                        };
                    };
                }
            }
        }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
    .forget-wrap{
        min-height:100%;
        .forget-info{
            width: 420px;
            margin-left: 240px;
            margin-top: 90px;
            .title{
                font-size: 24px;
                color: #999;
                padding-bottom: 45px;
            }
            .btm-p{
                font-size: 14px;
                text-align: right;
                height: 20px;
                padding-left: 120px;
            }
            .code{
                width: 120px;
                background: #3e868f;
                height: 38px;
                line-height: 38px;
                color: #fff;
                display: inline-block;
                float: left;
                margin-left: 10px;
                font-size: 12px;
                // margin-top: 5px;
            }
        }
    }
    
</style>

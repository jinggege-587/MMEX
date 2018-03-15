<template>
    <div class="updatePsw-wrap flex-column">
        <Head :userName="userName"/>
        <div class="updatePsw w1000">
            <div class="main_box clearfix">
                <Menu :num='8'></Menu>
                <div class="main_info fr">
                    <h2 class="ybc_section_h2">重置交易密码</h2>
                    <div class="listBox">
                        <div class="updateBox">
                            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="235px" class="register-ruleForm register register-ruleForm-setTrPsw" :class="{hide:!register}">
                                <el-form-item label="登录密码：" prop="loginPassword">
                                    <el-input type="password" v-model="ruleForm.loginPassword"></el-input>
                                </el-form-item>
                                <el-form-item label="图像验证码：">
                                    <el-input v-model="ruleForm.value" style="width:170px;"></el-input>
                                    <img v-bind:src="imgCode" alt="" class="imgCode" @click="imgCodeClick()">
                                </el-form-item>
                                <el-form-item label="手机验证码: " prop="code">
                                    <el-input v-model="ruleForm.code" style="width: 170px;"></el-input>
                                    <a href="javascript:;" class="code" @click="phoneCodeClick()">{{phoneCode}}</a>
                                </el-form-item>
                                <el-form-item label="新交易密码：" prop="tradePassword">
                                    <el-input type="password" v-model="ruleForm.tradePassword"></el-input>
                                    <span class="explain">密码长度在6-20个字符之间</span>
                                </el-form-item>
                                <el-form-item label="重复交易密码：" prop="checkPass">
                                    <el-input type="password" v-model="ruleForm.checkPass"></el-input>
                                </el-form-item>
                                <el-form-item label="证件号码：" prop="checkPass">
                                    <el-input v-model="ruleForm.id"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button class="fl" style="width:200px;" type="primary" @click="nextOne('ruleForm')">提交</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>
                    
                    <br><br><br><br><br>
                </div>
            </div>
        </div>
        <Foot/>
    </div>
</template>
<script>
    import Head from '@/components/Head'
    import Foot from '@/components/Foot'
    import Menu from '@/components/Menu'
    export default {
        name: 'updatePsw',
        components: {Head,Foot,Menu},
        data() {
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass1 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.tradePassword) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
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
                        callback()
                    }
                }
            };
            var checkImgCode = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入图片验证码'));
                } else {
                    if (!/^[0-9]{4}$/.test(value)) {
                        callback(new Error('请输入正确的图片验证码'));
                    }else{
                        callback();
                    }
                }
            };
            var card = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入证件号码'));
                } else {
                    if (!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)) {
                        callback(new Error('请输入正确的证件号码'));
                    }
                    callback();
                }
            };
            return {
                msg: '',
                phoneCode: '获取短信验证码',
                register:true,
                checkSmsCode:false,
                checkSmsCode2:false,
                imgCode:'',
                auth_server:'',
                ruleForm: {
                    value:'',
                    loginPassword:'123456',
                    tradePassword:'123456',
                    checkPass: '123456',
                    code:'563147',
                    id:'411325199009115018',
                    captcha:''
                },
                rules: {
                    loginPassword:[{ required: true, message: '请输入登录密码', trigger: 'blur' }],
                    tradePassword: [
                        { validator: validatePass2, trigger: 'blur' },
                        { min: 6, max: 20, message: '密码长度6-20位', trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass1, trigger: 'blur' }
                    ],
                    code: [
                        { validator: checkSmsCode, trigger: 'blur' }
                    ],
                    value: [
                        { validator: checkImgCode, trigger: 'blur' }
                    ],
                    id: [
                        { validator: card, trigger: 'blur' }
                    ]
                },
                userName:''
            }
            
        },
        created(){
            let _this = this;
            this.$filter.auth(function (msg) {
                _this.userName = msg.name;
                _this.__captcha__get();
            });
        },
        methods: {
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
                        _this.ruleForm.captcha = msg.captcha;
                    },
                    err => {
                        this.$message.error({
                            message: err.error
                        });
                    }
                );
            },
            nextOne:function(formName){

                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let {id,code,captcha,value,loginPassword,tradePassword} = this.ruleForm;
                        window.auth_server.emit('msg', { path: '/user/tradePassword/reset', body: {id,code,captcha,value,loginPassword,tradePassword} }, (msg) => {
                            console.log('重置交易密码成功',JSON.stringify(msg));
                            if(msg.error){
                                this.$message.error({
                                    message: msg.error
                                });
                            }else{
                                this.$message.success({
                                    message: '重置交易密码成功'
                                });
                            }
                        });
                    }else{
                        console.log('error submit!!');
                        return false;
                    }
                })
            },
            phoneCodeClick(){
                let time = 60;
                let _this = this;
                window.auth_server.emit('msg', { path: '/sms/get', body: {} }, (msg) => {
                    console.log('无号码获取验证码',JSON.stringify(msg));
                    if(msg.error){
                        this.$message.error({
                            message: msg.error
                        });
                    }else{
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
                    }
                });
            }
        }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
    .main_box{
        padding: 30px 0;
        .main_info{
            width: 810px;
            text-align: left;

        }
    }
    .updatePsw{
        .ybc_section_h2{
            font-size: 17px;
            color: #666;
            line-height: 40px;
        }
         .listBox{
            border: 1px solid #e6e6e6;
            min-height: 500px;
            .tab-box{
                border-bottom: 1px solid #e6e6e6;
                div{
                    float: left;
                    width:403px;
                    height: 54px;
                    line-height: 54px;
                    text-align: center;
                    font-size: 14px;
                    cursor: pointer;
                    color: #999;
                    background: #fafafa;
                    &.on{
                        color: #3e868f;
                        background: #fff;
                    }
                }
            }
            .updateBox{
                padding-top: 55px;
                .register-ruleForm .el-input{
                    width: 300px;
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
                    text-align: center;
                    font-size: 12px;
                    // margin-top: 5px;
                }
                .imgCode{
                    width: 120px;
                    height: 38px;
                    line-height: 38px;
                    float: left;
                    margin-left: 10px;
                }
            }
        }
    }
</style>

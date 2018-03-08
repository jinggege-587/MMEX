<template>
    <div class="updatePsw-wrap flex-column">
        <Head/>
        <div class="updatePsw w1000">
            <div class="main_box clearfix">
                <Menu :num='8'></Menu>
                <div class="main_info fr">
                    <h2 class="ybc_section_h2">修改密码</h2>
                    <div class="listBox">
                        <div class="tab-box clearfix">
                            <div @click="tab(true)" :class="{on:register}" style="border-right:1px solid #e6e6e6;">修改密码</div>
                            <div @click="tab(false)" :class="{on:!register}">修改交易密码</div>
                        </div>
                        <div class="updateBox">
                            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="235px" class="register-ruleForm register register-ruleForm-setTrPsw" :class="{hide:!register}">
                                <el-form-item label="登录密码：" prop="loginPsw">
                                    <el-input type="password" v-model="ruleForm.loginPsw"></el-input>
                                </el-form-item>
                                <el-form-item label="新密码：" prop="newPsw">
                                    <el-input type="password" v-model="ruleForm.newPsw"></el-input>
                                    <span class="explain">密码长度在6-20个字符之间</span>
                                </el-form-item>
                                <el-form-item label="重复密码：" prop="checkPass">
                                    <el-input type="password" v-model="ruleForm.checkPass"></el-input>
                                </el-form-item>
                                <el-form-item label="验证码: " prop="msgCode">
                                    <el-input v-model="ruleForm.msgCode" style="width: 170px;"></el-input>
                                    <a href="javascript:;" class="code" @click="phoneCodeClick()">{{phoneCode}}</a>
                                </el-form-item>
                                <el-form-item>
                                    <el-button class="fl" style="width:200px;" type="primary" @click="nextOne('ruleForm')">提交</el-button>
                                </el-form-item>
                            </el-form>
                            <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="235px" class="register-ruleForm register register-ruleForm-setTrPsw" :class="{hide:register}">
                                <el-form-item label="登录密码：" prop="loginPsw">
                                    <el-input type="password" v-model="ruleForm2.loginPsw"></el-input>
                                </el-form-item>
                                <el-form-item label="交易密码：" prop="loginPsw">
                                    <el-input type="password" v-model="ruleForm2.loginPsw"></el-input>
                                    <span class="explain"><a href=""> 忘记密码 </a></span>
                                </el-form-item>
                                <el-form-item label="新交易密码：" prop="newPsw">
                                    <el-input type="password" v-model="ruleForm2.newPsw"></el-input>
                                    <span class="explain">密码长度在6-20个字符之间</span>
                                </el-form-item>
                                <el-form-item label="重复交易密码：" prop="checkPass">
                                    <el-input type="password" v-model="ruleForm2.checkPass"></el-input>
                                </el-form-item>
                                <el-form-item label="短信验证码: " prop="msgCode">
                                    <el-input v-model="ruleForm2.msgCode" style="width: 170px;"></el-input>
                                    <a href="javascript:;" class="code" @click="phoneCodeClick()">{{phoneCode}}</a>
                                </el-form-item>
                                <el-form-item>
                                    <el-button class="fl" style="width:200px;" type="primary" @click="nextTwo('ruleForm')">提交</el-button>
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
                } else if (value !== this.ruleForm.newPsw) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            var validatePass4 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm2.checkPass !== '') {
                        this.$refs.ruleForm2.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass3 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm2.newPsw) {
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
            var checkSmsCode2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入短信验证码'));
                } else {
                    if (!/^[0-9]{6}$/.test(value)) {
                        callback(new Error('请输入正确的短信验证码'));
                    }else{
                        if(!this.checkSmsCode2){
                            this.$ajax({
                                url:'/code/validateSmsCode',
                                data:{
                                    telephone:this.ruleRegister.telephone,
                                    code:this.ruleRegister.smsCode
                                },
                                async:false,
                                success:() => {
                                    this.checkSmsCode2 = true
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
            return {
                msg: '',
                phoneCode: '获取短信验证码',
                register:true,
                checkSmsCode:false,
                checkSmsCode2:false,
                ruleForm: {
                    loginPsw:'',
                    newPsw:'',
                    checkPass: '',
                    msgCode:''
                },
                rules: {
                    loginPsw:[{ required: true, message: '请输入登录密码', trigger: 'blur' }],
                    newPsw: [
                        { validator: validatePass2, trigger: 'blur' },
                        { min: 6, max: 20, message: '密码长度6-20位', trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass1, trigger: 'blur' }
                    ],
                    msgCode: [
                        { validator: checkSmsCode, trigger: 'blur' }
                    ]
                },
                ruleForm2: {
                    loginPsw:'',
                    dealPsw:'',
                    newPsw:'',
                    checkPass: '',
                    msgCode:''
                },
                rules2: {
                    loginPsw:[{ required: true, message: '请输入登录密码', trigger: 'blur' }],
                    dealPsw:[{ required: true, message: '请输入交易密码', trigger: 'blur' }],
                    newPsw: [
                        { validator: validatePass4, trigger: 'blur' },
                        { min: 6, max: 20, message: '密码长度6-20位', trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass3, trigger: 'blur' }
                    ],
                    msgCode: [
                        { validator: checkSmsCode2, trigger: 'blur' }
                    ]
                },
            }
            
        },
        created(){
            let _this = this;
            this.$filter.auth();
        },
        methods: {
            nextOne:function(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.guideList = 2;
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            tab:function(valid){
                if(valid){
                    this.register=true;
                }else{
                    this.register=false;
                }
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
            }
        }
    }
</style>

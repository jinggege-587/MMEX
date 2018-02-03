<template>
    <div class="register-wrap flex-column">
        <Header/>
        <div class="register w1000">
            <div class="register-con">
                <ul class="guide">
                    <li class="active">
                        <span class="num">1</span>
                        <span class="text">邮箱注册</span>
                    </li>
                    <li class="">
                        <span class="num">2</span>
                        <span class="text">设置交易密码</span>
                    </li>
                    <li class="">
                        <span class="num">3</span>
                        <span class="text">实名认证</span>
                    </li>
                    <li class="">
                        <span class="num">4</span>
                        <span class="text">注册成功</span>
                    </li>
                </ul>
                <div class="componentForm">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="390px" class="register-ruleForm">
                        <el-form-item label="国家：" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                         <el-form-item label="电子邮箱：" prop="email">
                            <el-input style="width:200px;float:left;" v-model="ruleForm.email"></el-input>
                            <span class="explain">请输入您的电子邮箱，用于登录和找回密码</span>
                        </el-form-item>
                         <el-form-item label="登陆密码：" prop="pass">
                            <el-input type="password" v-model="ruleForm.pass"></el-input>
                            <span class="explain">密码长度6-20位</span>
                        </el-form-item>
                         <el-form-item label="重复密码：" prop="checkPass">
                            <el-input type="password" v-model="ruleForm.checkPass"></el-input>
                            <span class="explain">重复输入密码，两次需一致</span>
                        </el-form-item>
                         <el-form-item label="邀请码：" prop="codeInvite">
                            <el-input v-model="ruleForm.codeInvite"></el-input>
                            <span class="explainChange">选填项</span>
                        </el-form-item>
                        <el-form-item>
                            <el-checkbox v-model="checked">我已仔细阅读并同意<a href="javascript:;">MMEX服务条款</a>，同意自担风险，自担损失的情况下参与交易</el-checkbox>
                        </el-form-item>
                        <el-form-item>
                            <el-button class="fl" style="width:200px;" type="primary" @click="submitForm('ruleForm')">下一步</el-button>
                        </el-form-item>
                    </el-form>
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
        name: 'register',
        components: {Header,Footer},
        data() {
            var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
                } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                callback(new Error('两次输入密码不一致!'));
                } else {
                callback();
                }
            };
            return {
                msg: '',
                checked: true,
                ruleForm: {
                    country: '',
                    email: '',
                    pass: '',
                    checkPass: '',
                    codeInvite: ''
                },
                rules: {
                    country: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    email: [
                        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
                    ],
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                    desc: [
                        { required: true, message: '请填写活动形式', trigger: 'blur' }
                    ]
                }
            }
        },
        created(){

        },
        methods: {}
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
    @color: #3e868f;
    .register-con{
        border: 1px solid #ebebeb;
        min-height: 500px;
        margin-top: 20px;
        padding-bottom: 100px;
    }
    .guide{
        height: 77px;
        line-height: 77px;
        li{
            width: 25%;
            float: left;
            font-size: 20px;
            border-bottom: 2px solid #ccc;
            .num{
                height: 28px;
                width: 28px;
                line-height: 28px;
                display: inline-block;
                border-radius: 15px;
                background: #cccccc;
                color: #fefefe;
            }
            .text{
                color: #ccc;
            }
            &.active{
                border-bottom: 2px solid @color;
                .num{
                    background: @color;
                }
                .text{
                    color: @color;
                }
            }
        }
    }
    .componentForm{
        padding-top: 80px;
    }
</style>

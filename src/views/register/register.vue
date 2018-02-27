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
                    <li v-bind:class="{active:isActive2}">
                        <span class="num">2</span>
                        <span class="text">设置交易密码</span>
                    </li>
                    <li v-bind:class="{active:isActive3}">
                        <span class="num">3</span>
                        <span class="text">实名认证</span>
                    </li>
                    <li v-bind:class="{active:isActive4}">
                        <span class="num">4</span>
                        <span class="text">注册成功</span>
                    </li>
                </ul>
                <div class="componentForm">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="390px" class="register-ruleForm register-ruleForm-email" v-bind:class="{hide:register1}">
                        <el-form-item label="国家：" prop="name">
                            <!-- <el-input v-model="ruleForm.name"></el-input> -->
                            <div class="intl-tel-input el-input inside" style="width: 200px; float: left;">
                                <input class="el-input__inner" style="padding-left:44px;" v-model="ruleForm.country" type="text" readonly="">
                                <div class="flag-dropdown" @click="countryList()">
                                    <div class="selected-flag" title="China (中国): +86">
                                        <div class="flag " :class="sn">
                                            <div class="arrow" :class="{up:isUp}"></div>
                                        </div>
                                    </div>
                                    <ul class="country-list" :class="{hide:isCountryList}">
                                        <li data-dial-name="China (中国)" @click="countryClick('China (中国)','cn')" class="country preferred active" data-dial-code="86" data-country-code="cn">
                                            <div class="flag cn"></div><span class="country-name">China (中国)</span><span class="dial-code">+86</span></li>
                                        <li data-dial-name="United Kingdom" @click="countryClick('United Kingdom','gb')" class="country preferred" data-dial-code="44" data-country-code="gb">
                                            <div class="flag gb"></div><span class="country-name">United Kingdom</span><span class="dial-code">+44</span></li>
                                    </ul>
                                </div>
                            </div>
                        </el-form-item>
                         <el-form-item label="电子邮箱：" prop="email">
                            <el-input style="width:200px;float:left;" v-model="ruleForm.email"></el-input>
                            <span class="explain">请输入您的电子邮箱，用于登录和找回密码</span>
                        </el-form-item>
                         <el-form-item label="登陆密码：" prop="loginPassword">
                            <el-input type="password" v-model="ruleForm.loginPassword"></el-input>
                            <span class="explain">密码长度6-20位</span>
                        </el-form-item>
                         <el-form-item label="重复密码：" prop="checkPass">
                            <el-input type="password" v-model="ruleForm.checkPass"></el-input>
                            <span class="explain">重复输入密码，两次需一致</span>
                        </el-form-item>
                         <el-form-item label="邀请码：" prop="inviteCode">
                            <el-input v-model="ruleForm.inviteCode"></el-input>
                            <span class="explainChange">选填项</span>
                        </el-form-item>
                        <el-form-item>
                            <txtCheckbox v-on:listen-to-child-event="txtCheckbox" />
                        </el-form-item>
                        <el-form-item>
                            <el-button class="fl" style="width:200px;" type="primary" @click="nextOne('ruleForm')">下一步</el-button>
                        </el-form-item>
                    </el-form>
                    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="390px" class="register-ruleForm register2 register-ruleForm-setTrPsw" v-bind:class="{hide:register2}">
                        <p class="title"><img src="@/assets/img/icon2.png" alt="">为保障您的资金安全，请设置交易密码。<br>
                            对账户资产进行投资、交易、转出时，需用到交易密码，请务必牢记。</p>
                         <el-form-item label="交易密码：" prop="passJy">
                            <el-input type="password" v-model="ruleForm2.passJy"></el-input>
                            <span class="explain">密码长度6-20位</span>
                        </el-form-item>
                         <el-form-item label="重复交易密码：" prop="checkPass">
                            <el-input type="password" v-model="ruleForm2.checkPass"></el-input>
                            <span class="explain">重复输入密码，两次需一致</span>
                        </el-form-item>
                        <el-form-item>
                            <el-button class="fl" style="width:200px;" type="primary" @click="nextTwo('ruleForm2')">下一步</el-button>
                        </el-form-item>
                    </el-form>
                    <el-form :model="ruleForm3" :rules="rules3" ref="ruleForm3" label-width="390px" class="register-ruleForm register3" v-bind:class="{hide:register3}">
                        <p class="title"><img src="@/assets/img/icon2.png" alt="">为了确保您的资金安全，请实名认证</p>
                        <p class="p1">1.真实姓名经实名认证后将不能更改，请如实填写。<br>
                            2.MMEX有合理的理由怀疑用户提供虚假身份信息时，有权拒绝注册或者冻结、注销已经注册的账户及资产。</p>
                         <el-form-item label="真实姓名: " prop="name">
                            <el-input v-model="ruleForm3.name"></el-input>
                            <span class="explain">真实姓名设置后不能修改，并且与提现账户名相同</span>
                        </el-form-item>
                         <el-form-item label="证件类型:" prop="checkPass">
                            <el-select class="fl" v-model="ruleForm3.idName" placeholder="身份证">
                                <el-option
                                v-for="item in idNameList"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                         <el-form-item label="证件号码: " prop="card">
                            <el-input v-model="ruleForm3.card"></el-input>
                            <span class="explain">证件号码注册后不能修改</span>
                        </el-form-item>
                         <el-form-item label="手机号: " prop="phone">
                            <el-input v-model="ruleForm3.phone"></el-input>
                            <span class="explain">请输入您的手机号码</span>
                        </el-form-item>
                         <el-form-item label="图形验证码: " prop="imgCode">
                            <el-input v-model="ruleForm3.imgCode" style="width: 100px;"></el-input>
                            <img v-bind:src="imgUrl" alt="" class="imgCode" @click="__captcha__get()">
                        </el-form-item>
                         <el-form-item label="验证码: " prop="msgCode">
                            <el-input v-model="ruleForm3.msgCode" style="width: 100px;"></el-input>
                            <a href="javascript:;" class="code" @click="phoneCodeClick()">{{phoneCode}}</a>
                        </el-form-item>
                        <el-form-item>
                            <el-button class="fl" style="width:200px;" type="primary" @click="nextThree('ruleForm3')">下一步</el-button>
                        </el-form-item>
                    </el-form>
                    <p :class="{hide:register4}">恭喜您，注册完成！</p>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import Footer from '@/components/Footer'
    import txtCheckbox from '@/components/txtCheckbox'
    export default {
        name: 'register',
        components: {Header,Footer,txtCheckbox},
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
                } else if (value !== this.ruleForm.loginPassword) {
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
                } else if (value !== this.ruleForm2.passJy) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
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
            var checkImgCode = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入图片验证码'));
                } else {
                    if (value.length!==6) {
                        callback(new Error('请输入正确的图片验证码'));
                    }else{
                        callback()
                    }
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
            return {
                isUp:false,
                isCountryList:true,
                phoneCode: '获取短信验证码',
                checked: true,
                isActive2: false,
                isActive3: false,
                isActive4: false,
                register1:false,
                register2:true,
                register3:true,
                register4:true,
                guideList: 0,
                imgCode:'',
                ruleForm: {
                    country: 'China (中国)',
                    email: '1111232@qq.com',
                    loginPassword: '111111',
                    checkPass: '111111',
                    inviteCode: ''
                },
                rules: {
                    email: [
                        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
                    ],
                    loginPassword: [
                        { validator: validatePass, trigger: 'blur' },
                        { min: 6, max: 20, message: '密码长度6-20位', trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ]
                },
                ruleForm2: {
                    checkPass: '1111112',
                    passJy:'1111112'
                },
                rules2: {
                    passJy: [
                        { validator: validatePass4, trigger: 'blur' },
                        { min: 6, max: 20, message: '密码长度6-20位', trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass3, trigger: 'blur' }
                    ]
                },
                idNameList: [
                    {
                        value: '身份证',
                        label: '身份证'
                    },
                    {
                        value: '护照',
                        label: '护照'
                    }
                ],
                ruleForm3: {
                    name: '123',
                    idName: '身份证',
                    card:'123456789012345678',
                    phone:'13083989685',
                    imgCode:'123qwe',
                    captcha:'',
                    msgCode:'123123'
                },
                imgUrl:'',
                sn:'cn',
                rules3: {
                    name: [
                        { required: true, message: '请输入真实姓名', trigger: 'blur' },
                        { min: 2, max: 20, message: '真实姓名长度2-20位', trigger: 'blur' }
                    ],
                    card: [
                        { validator: card, trigger: 'blur' }
                    ],
                    phone: [
                        { validator: phone, trigger: 'blur' }
                    ],
                    imgCode: [
                        { validator: checkImgCode, trigger: 'blur' }
                    ],
                    msgCode: [
                        { validator: checkSmsCode, trigger: 'blur' }
                    ]
                },
                auth_server:''
            }
        },
        sockets: {
            connect() {
                console.log('socket connected');
            },
            customEmit: function(val){
                console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
            }
        },
        created(){
            // this.guideList = 2;
            // this.__captcha__get();
            console.log(this.idNameList);
        },
        watch: {
            guideList: function (val, oldVal) {
                if(val==0){
                    this.isActive2=false;
                    this.isActive3=false;
                    this.isActive4=false;

                    this.register1=false;
                    this.register2=true;
                    this.register3=true;
                    this.register4=true;
                }
                if(val==1){
                    this.register1=true;
                    this.register2=false;
                    this.register3=true;
                    this.register4=true;
                }
                if(val==2){
                    this.register1=true;
                    this.register2=true;
                    this.register3=false;
                    this.register4=true;
                }
                if(val==3){
                    this.register1=true;
                    this.register2=true;
                    this.register3=true;
                    this.register4=false;
                }
                if(val>=1){
                    this.isActive2=true;
                    this.isActive3=false;
                    this.isActive4=false;
                }
                if(val>=2){
                    this.isActive3=true;
                    this.isActive4=false;
                }
                if(val>=3){
                    this.isActive4=true;
                }
            }
        },
        methods: {
            countryList:function(){
                this.isUp = !this.isUp;
                this.isCountryList = !this.isCountryList;
            },
            countryClick:function(data,sn){
                this.ruleForm.country = data;
                this.sn = sn;
            },
            txtCheckbox:function(data){
                this.checked = data;
            },
            login:function(msg){
                var _this = this;
                localStorage.host = msg.mc;
                this.auth_server = require('socket.io-client')(msg.mc);
                this.auth_server.emit('user', { path: '/user/login', body: {jwt:msg.jwt} }, (msg) => {
                    console.log('登录成功！',msg);
                    if(msg.error){
                        this.$message.error({
                            message: msg.error
                        });
                    }else{
                        _this.guideList = 1;
                    }
                });
            },
            nextOne:function(formName){
                var _this = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$socket.emit('auth', { path: '/user/info/register', body: this.ruleForm }, (msg) => {
                            console.log(msg);
                            if(msg.error){
                                this.$message.error({
                                    message: msg.error
                                });
                            }else{
                                let body = msg.body;
                                console.log('注册成功！+ - > body:',body);
                                _this.login(body);
                            }
                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
                
            },
            nextTwo:function(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.auth_server.emit('msg', { path: '/user/password/register', body: {tradePassword:this.ruleForm2.passJy} }, (msg) => {
                            console.log(msg);
                            if(msg.error){
                                this.$message.error({
                                    message: msg.error
                                });
                                this.guideList = 2;
                            }else{
                                let body = msg.body;
                                console.log(body,'交易成功！')
                                this.guideList = 2;
                                this.__captcha__get();
                            }
                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            //获取图片验证码
            __captcha__get:function(){
                let _this = this;
                this.$api.__captcha__get({},
                    (msg) => {
                        console.log('获取图片验证码',msg);
                        _this.imgUrl = msg.url;
                        _this.ruleForm3.captcha = msg.captcha;
                    },
                    err => {
                        this.$message.error({
                            message: err.error
                        });
                    }
                );
            },
            nextThree:function(formName){
                let {name,idName,card,phone,msgCode,imgCode,captcha} = this.ruleForm3;
                let param = {
                    name:name,            // 真实姓名
                    type:idName,            // 证件类型
                    id:card,              // 证件号码
                    phone:phone,           // 手机号码
                    code:msgCode,            // 短信验证码
                    captcha:captcha,         // 获取图形验证码时候的captcha字段
                    value:imgCode               // 用户输入的图形验证码
                }
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.auth_server.emit('msg', { path: '/user/certification/identify', body: param }, (msg) => {
                            console.log(msg);
                            if(msg.error){
                                this.$message.error({
                                    message: msg.error
                                });
                            }else{
                                let body = msg.body;
                                console.log(body,'注册全部完成')
                                this.guideList = 3;
                            }
                        });
                        // this.guideList = 3;
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            __sms__get:function(phone){
                let _this = this;
                this.$api.__sms__get({phone:phone},
                    (msg) => {
                        console.log('获取短信验证码',msg);
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
                if(!this.$filter.phone(this.ruleForm3.phone)) {
                    this.$message.error({
                        message: '请输入正确手机号'
                    });
                    return false;
                }
                var param = {phone:this.ruleForm3.phone}
                this.$api.__sms__get(param,
                    () => {
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
                            message: err.error
                        });
                    }
                );
            },
        }
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
        .register-ruleForm{
            .title{
                padding-bottom: 55px;
                color: #d60e2f;
                font-size: 16px;
                line-height: 28px;
                img{
                    margin-right: 10px;
                    vertical-align: middle;
                }
            }
            .p1{
                color: #666666;
                font-size: 13px;
                line-height: 46px;
                margin-top: -54px;
                margin-bottom: 25px;
                text-align: left;
                padding-left: 220px;
            }
        }
        .code{
            width: 90px;
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
        .imgCode{
            height: 38px;
            width:90px;
            float:left;
            margin-left:10px;
            // margin-top: 5px;
        }
    }
    .intl-tel-input {
        position: relative;
        display: inline-block;
        .flag-dropdown {
            position: absolute;
            top: 0;
            bottom: 0;
            cursor: pointer;
            &:hover{
                .selected-flag {
                    background-color: rgba(0,0,0,0.05)
                }
            }
        }
        .flag {
            margin-top: -5px;
            width: 16px;
            height: 11px;
            display: inline-block;
            background: url("../../assets/img/flags.png");
            &.cn {
                background-position: -128px -177px;
            }
            &.gb {
                background-position: -176px -22px;
            }
        }
        .selected-flag {
            z-index: 1;
            position: relative;
            width: 38px;
            height: 100%;
            padding: 0 8px 0 0;
            .arrow {
                position: relative;
                top: 50%;
                margin-top: -2px;
                left: 20px;
                width: 0;
                height: 0;
                border-left: 3px solid transparent;
                border-right: 3px solid transparent;
                border-top: 4px solid #555;
                &.up {
                    border-top: none;
                    border-bottom: 4px solid #555
                }
            }
        }
        .country-list {
            text-align: left;
            list-style: none;
            position: absolute;
            z-index: 2;
            padding: 0;
            margin: 0 0 0 -1px;
            box-shadow: 1px 1px 4px rgba(0,0,0,0.2);
            background-color: white;
            border: 1px solid #ccc;
            width: 430px;
            max-height: 200px;
            overflow-y: scroll;
            .divider {
                padding-bottom: 5px;
                margin-bottom: 5px;
                border-bottom: 1px solid #ccc
            }
            .flag{
                margin-right: 6px;
                &.gb {
                    background-position: -176px -22px;
                }
            }
            .country {
                line-height: 11px;
                padding: 7px 10px;
                .dial-code {
                    color: #999
                }
                &:hover{
                    background-color: rgba(0,0,0,0.05)
                }
            }
            .country-name {
                margin-right: 6px;
            }
        }
    }
</style>

<template>
    <div class="login-wrap flex-column">
        <el-header class="header header-logo flex-center" height="64px">
            <img src="http://staticnew.superboss.cc/common/img/logo@2x.png" alt="">
        </el-header>
        <div class="login-bg">
            <div class="login-con">
                <login/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        // components: {header},
        data() {
            return {
                msg: ''
            }
        },
        created(){
            this.$store.dispatch("loginFailure")
        },
        methods: {}
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
    .login-wrap{
        min-height:100%;
    }
    .header-logo{
        img{
            width: 120px;
            height: 30px
        }
    }
    .header-info{
        color:#fff;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        letter-spacing: 0;
    }
    .header{
        background:#3089dc;
        border-bottom:10px solid #f2f2f2;
    }
    .login-bg{
        background-color: #f2f2f2;
        flex-grow:1;
        .login-con{
            margin: 0 auto;
            padding-top: 160px;
            width: 340px;
        }
    }
    @media (max-height: 800px) {
        .login-bg{
            .login-con{
                padding-top: 100px;
            }
        }
    }
    @media (max-height: 750px) {
        .login-bg{
            .login-con{
                padding-top: 40px;
            }
        }
    }
</style>

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
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    export default {
        name: 'register',
        components: {Header},
        data() {
            return {
                msg: ''
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
</style>

<template>
    <div class="securitys-wrap flex-column">
        <Head/>
        <div class="securitys w1000">
            <div class="main_box clearfix">
                <Menu :num='6'></Menu>
                <div class="main_info fr">
                    <h2 class="ybc_section_h2">安全中心</h2>
                    <div class="ybc_sections">
                        <p class="ybc_sec_title"><strong>安全验证 </strong>为保障您的账户资金安全，请务必开启必要的通知</p>
                    </div>
                    <div class="ybc_hezi" style="height:260px">
                        <p>
                            <el-checkbox label="异地登录" name="type"></el-checkbox>
                        </p>
                        <p style="margin-left: 47px; margin-top: 15px;font-size:12px;">在登录时，若系统检测您的IP地址发生变化时会进行短信验证</p>

                        <div id="emailShow" style="margin-top:60px;">
                        <p style="margin-left: 30px; margin-top: 20px; font-size: 14px;color: #4A5F78;">
                            <el-checkbox label="异地登录邮件提醒" name="type"></el-checkbox>
                        </p>
                        <p style="margin-left: 47px; margin-top: 15px;font-size:12px;color:red">在开启异地登录之后，若系统检测到您的IP地址发生变化会给您绑定的邮箱发送IP变化邮件</p>
                        </div>
                    </div>
                    <div class="ybc_text"><input id="ybc_click" type="button" value="保存" class="ybc_next"></div>
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
        name: 'securitys',
        components: {Head,Foot,Menu},
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
    .main_box{
        padding: 30px 0;
        .main_info{
            width: 810px;
            text-align: left;

        }
    }
    .securitys{
        h2{
            font-size: 16px;
            line-height: 40px;
            color: #666;
        }
        .ybc_section_h2{
            height: 42px;
            border-bottom: 1px solid #ddd;
            margin-bottom: 36px;
        }
        .ybc_sections {
            width: 778px;
            margin-left: 30px;
            .ybc_sec_title {
                height: 65px;
                line-height: 65px;
                color: #7F8996;
                font-size: 14px;
                strong {
                    font-size: 16px;
                    display: inline-block;
                    margin-right: 20px;
                    font-weight: normal;
                }
            }
        }
        .ybc_hezi {
            border: 1px solid #ddd;
            height: 100px;
            color: #7F8996;
        }
        .ybc_hezi p:first-child {
            margin-left: 30px;
            margin-top: 47px;
            font-size: 14px;
            color: #4A5F78;
        }
        .ybc_text {
            margin-top: 28px;
            .ybc_next {
                width: 204px;
                text-align: center;
                height: 40px;
                line-height: 40px;
                background: #00A1C6;
                color: #fff;
                font-size: 16px;
                font-family: 'Microsoft Yahei';
                border: 0;
                padding: 0;
                cursor: pointer;
            }
        }
    }
</style>

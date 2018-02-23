<template>
    <div class="affirm-wrap flex-column">
        <Head/>
        <div class="affirm w1000">
            <div class="main_box clearfix">
                <Menu :num='11'></Menu>
                <div class="main_info fr">
                    <h2 class="ybc_section_h2">设置双重认证</h2>
                    <div class="affirm_p">
                        <p class="p1 mb_10" style="color:#ff0000;">您的账户还未开启双重认证</p>
                        <p class="p2">谷歌双重认证能够保证用户资金安全，不开启不会影响正常的交易。<br>
开启双重验证功能后，系统都会提示您输入手机应用程序上显示的一次性密码，来确保您的资金安全。<br>
您可以依照下面的步骤来设置并启用这一功能。</p>
                        <p class="p1 mt_15">1.安装双重验证程序：Google Authenticator</p>
                        <p class="p2 clearfix">
                            <a href="" class="download fr">点击下载</a> Iphone手机：在您的手机上安装双重验证程序：Google Authenticator 
                        </p>
                        <p class="p2 clearfix mt_5">
                            <a href="" class="download fr">点击下载</a> Android手机：在应用市场中搜索“谷歌身份验证器”，或搜索Google Authenticator
                        </p>
                        <p class="p1 mt_15">2.安装完成后，需要对该应用程序进行如下配置</p>
                        <p class="p2">
                            在“Google Authenticator（身份验证器）”应用程序中，点击“添加新账户（iOS下是+号）”，然后选择“扫描条形码 ”。将手机上的相机镜头对准下图扫描 <br>
该条形码。 
                        </p>
                        <img src="@/assets/img/qrimages.png" width="100" alt="">
                        <p class="p2">如果您无法扫描成功上图的条形码，您还可以手动添加账户，并输入如下密钥:<span style="color:#ff0000;">NJD5HGOS01DLKJ9G54DG</span></p>
                        <p class="p1 mt_15">3.配置完成</p>
                        <p class="p2">配置完成后，手机上会显示一个6位数字，每隔30秒变化一次。这个数字即为您的双重验证密码。<br>
                            请勿删除此双重验证密码账户，否则会导致您无法进行账户操作。<br>
                            您可以将密钥记录下来：<span style="color:#ff0000;">NJD5HGOS01DLKJ9G54DG</span> 如果误删，可以通过手动输入密钥来恢复。<br>
                            输入双重验证密码，以开启或关闭双重验证功能。
                        </p>
                        <el-input style="width:245px;margin:5px 0;" v-model="input" placeholder="输入手机应用程序的双重验证码"></el-input>
                        <p class="p2">配置验证的模块<el-checkbox label="登录" name="type"></el-checkbox><el-checkbox label="资金转出" name="type"></el-checkbox></p>
                    </div>
                    
                    <div class="ybc_text"><input id="ybc_click" type="button" value="验证并启用" class="ybc_next"></div>
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
        name: 'affirm',
        components: {Head,Foot,Menu},
        data() {
            return {
                msg: '',
                input:''
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
    .el-checkbox{
        margin-left: 15px;
    }
    .affirm{
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
        .affirm_p{
            .p1{font-size: 14px;color: #666;line-height: 22px;}
            .p2{
                font-size: 12px;color: #999;line-height: 22px;
                .download{
                    width: 70px;
                    height: 24px;
                    border: 1px solid #3e868f;
                    line-height: 24px;
                    text-align: center;
                    border-radius: 5px;
                    display: inline-block;
                    color: #3e868f;
                }
            }
        }
        .ybc_text {
            margin-top: 28px;
            .ybc_next {
                width: 204px;
                text-align: center;
                height: 40px;
                line-height: 40px;
                background: #3e868f;
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

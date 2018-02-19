<template>
<div>
    <el-checkbox v-model="checked">我已仔细阅读并同意<a href="javascript:;" @click="dialog = true">MMEX服务条款</a>，同意自担风险，自担损失的情况下参与交易</el-checkbox>
    <el-dialog title="" :visible.sync="dialog" width='952px'>
    <pre>
                                        服务平台服务协议

                                                    版本生效日期：2018年1月12号

    ·提示条款

    欢迎您与超级店长服务平台经营者（详见定义条款）共同签署本《超级店长服务平台服务协议》（下称“本协议”）并使用超级店长服务！
    自本协议发布之日起，超级店长服务平台各处所称“服务协议”均指本协议。
    各服务条款前所列索引关键词仅为帮助您理解该条款表达的主旨之用，不影响或限制本协议条款的含义或解释。为维护您自身权益，建议
    您仔细阅读各条款具体表述。
    【审慎阅读】您在申请注册流程中点击同意本协议之前，应当认真阅读本协议。请您务必审慎阅读、充分理解各条款内容，特别是免除或
    者限制责任的条款、法律适用和争议解决条款。免除或者限制责任的条款将以粗体下划线标识，您应重点阅读。如您对协议有任何疑问，
    可向超级店长服务平台客服咨询。
    【签约动作】当您按照注册页面提示填写信息、阅读并同意本协议且完成全部注册程序后，即表示您已充分阅读、理解并接受本协议的全
    部内容，并与光云科技达成一致，成为超级店长服务平台“用户”。阅读本协议的过程中，如果您不同意本协议或其中任何条款约定，您应
    立即停止注册程序。

</pre>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialog = false">确 定</el-button>
        </span>
    </el-dialog>
</div>
</template>
<script>
    export default {
        data() {
            return {
                checked: true,
                dialog:false
            }
        },
        watch: {
            checked: function (val) {
                this.$emit("listen-to-child-event",val.toString());
            }
        }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
    .registerTxt{
        cursor: pointer;
        line-height: 20px;
        font-size: 12px;
        white-space: nowrap;
    }
    .registerTxt span{
        color: #409eff;
    }
</style>

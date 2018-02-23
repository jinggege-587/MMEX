<template>
    <div class="coinname-wrap flex-column">
        <Head/>
        <div class="coinname w1000">
            <div class="main_box clearfix">
                <Menu :num='122'></Menu>
                <div class="main_info fr">
                    <div class="ybcoin">
                        <h2 >转入 比特币</h2>
                    </div>
                    <div class="clearfix" style="border:1px solid #e6e6e6; margin:10px 0 10px 0; padding:10px 10px 10px 0;">
                        <div class="userinbtc fl" style="margin-top:30px;">
                            <p class="inBTtext">这是您的比特币钱包地址，请将您的比特币转入此地址：</p>
                            <div class="outwallet">1BHJFGnXqjKMLMKNi9cLNJzAFPC4z5HxyP</div>
                        </div>
                        <div class="fr">
                            <p style="text-indent:0; margin-bottom:0;">
                                <img src="../../assets/img/qrimages.png" style="width:129px; cursor:pointer;" onclick="coinIn.larger('#erwei')">
                            </p>
                            <p style="text-align:center; text-indent:0; margin-bottom:0;">点击二维码放大</p>
                        </div>
                    </div>
                    <div class="ybc_list">
                        <div class="ybcoin">
                            <h2 class="left">转入说明</h2>
                            <div class="clear"></div>
                        </div>
                        <p>1. 转入是自动的，比特币转账需要整个网络进行确认，达到<b>2个确认</b>后您的比特币会自动充值到您的账户中</p>
                        <p>2. 此地址是您的唯一且独自使用的转入地址，您可以同时进行多次充值</p>
                            <p>3. 根据国家反洗钱政策及保障客户资产安全，会对系统检测出的异常账户进行安全认证。</p>
                    </div>
                    <div class="ybc_list">
                        <div class="ybcoin">
                            <h2 class="left">转入记录</h2>
                        </div>
                        <div class="blackTable user_index">
                            <el-table
                            :data="tableData"
                            style="width: 100%">
                                <el-table-column
                                    prop="date"
                                    label="记录ID"
                                    width="210">
                                </el-table-column>
                                <el-table-column
                                    prop="name"
                                    label="转入钱包地址"
                                    width="170">
                                </el-table-column>
                                <el-table-column
                                    prop="name"
                                    label="数量"
                                    width="80">
                                </el-table-column>
                                <el-table-column
                                    prop="name"
                                    label="确认数"
                                    width="110">
                                </el-table-column>
                                <el-table-column
                                    prop="name"
                                    label="发送时间"
                                    width="110">
                                </el-table-column>
                                <el-table-column
                                    prop="name"
                                    label="状态"
                                    width="70">
                                </el-table-column>
                                <el-table-column
                                    prop="address"
                                    label="备注">
                                </el-table-column>
                            </el-table>
                        </div>
                    </div>
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
        name: 'coinname',
        components: {Head,Foot,Menu},
        data() {
            return {
                msg: '',
                tableData:[]
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
    .coinname{
        .ybcoin{
            line-height: 40px;
            h2{
                font-size: 17px;
                line-height: 40px;
                color: #666;
            }
        }
        .userinbtc p {
            text-indent: 2em;
            line-height: 22px;
            font-size: 12px;
            margin-bottom: 10px;
            color: #7f8996;
        }
        .userinbtc .outwallet {
            color: #00A1C6;
            font-size: 18px;
            margin-bottom: 10px;
            margin-left: 24px;
            padding: 10px;
            background-color: #e5f5f9;
            min-width: 480px;
            text-align: center;
        }
        .ybc_list{
            margin-bottom: 20px;
            p {
                text-indent: 2em;
                line-height: 22px;
                margin-bottom: 10px;
                font-size: 12px;
                color: #666;
            }
        }
    }
</style>

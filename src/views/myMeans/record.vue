<template>
    <div class="record-wrap flex-column">
        <Head :userName="userName"/>
        <div class="record w1000">
            <div class="main_box clearfix">
                <Menu :num='1'></Menu>
                <div class="main_info fr">
                    <div class="ybcoin">
                        <h2 class="fl">最近记录</h2>
                        <div class="ybcoin clearfix">
                            <div class="record_h2 fl active" style=" margin-left: 30px;text-align:center">充币</div>
                            <div class="record_h2 fl" style="text-align:center">提币</div>
                            <span style="float:right;color:#4a5f78;font-size:12px;">默认显示最近5条记录</span>
                        </div>
                    </div>
                    <div class="blackTable user_index">
                        <el-table
                        :data="tableData"
                        style="width: 100%">
                            <el-table-column
                                prop="id"
                                label="记录ID"
                                width="85">
                            </el-table-column>
                            <el-table-column
                                prop="name"
                                label="币名"
                                width="70">
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="转入钱包地址"
                                width="230">
                            </el-table-column>
                            <el-table-column
                                prop="num"
                                label="数量"
                                width="70">
                            </el-table-column>
                            <el-table-column
                                prop="yesNum"
                                label="确认数"
                                width="70">
                            </el-table-column>
                            <el-table-column
                                prop="date"
                                label="操作时间"
                                width="150">
                            </el-table-column>
                            <el-table-column
                                prop="status"
                                label="状态"
                                width="50">
                            </el-table-column>
                            <el-table-column
                                prop="other"
                                label="">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="ybc_list">
                        <div class="ybcoin">
                            <h2 class="fl">转入记录</h2>
                            <div class="ybcoin clearfix">
                                <div class="record_h2 fl active" style=" margin-left: 30px;text-align:center">充币</div>
                                <div class="record_h2 fl" style="text-align:center">提币</div>
                                <span style="float:right;color:#4a5f78;font-size:12px;">默认显示最近5条记录</span>
                            </div>
                        </div>
                        <div class="blackTable user_index">
                            <el-table
                            :data="tableData2"
                            style="width: 100%">
                                <el-table-column
                                    prop="id"
                                    label="记录ID"
                                    width="210">
                                </el-table-column>
                                <el-table-column
                                    prop="address"
                                    label="转入钱包地址"
                                    width="170">
                                </el-table-column>
                                <el-table-column
                                    prop="num"
                                    label="数量"
                                    width="80">
                                </el-table-column>
                                <el-table-column
                                    prop="numYes"
                                    label="确认数"
                                    width="110">
                                </el-table-column>
                                <el-table-column
                                    prop="date"
                                    label="操作时间"
                                    width="110">
                                </el-table-column>
                                <el-table-column
                                    prop="status"
                                    label="状态"
                                    width="70">
                                </el-table-column>
                                <el-table-column
                                    prop="other"
                                    label="">
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
                userName: '',
                tableData:[
                    {id:12312,name:'eld',address:'链克兑换成玩币',num:'4900',yesNum:'12',date:'2018-02-19 14:33:42',status:'成功',other:'查看txid'},
                    {id:12312,name:'eld',address:'链克兑换成玩币',num:'4900',yesNum:'12',date:'2018-02-19 14:33:42',status:'成功',other:'查看txid'},
                    {id:12312,name:'eld',address:'链克兑换成玩币',num:'4900',yesNum:'12',date:'2018-02-19 14:33:42',status:'成功',other:'查看txid'}
                ],
                tableData2:[],
            }
            
        },
        created(){
            let _this = this;
            this.$filter.auth(function (msg) {
                _this.userName = msg.name;
            });
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
    .record{
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
        .record_h2 {
            cursor: pointer;
            border-radius: 3px;
            border: 1px solid #dddddd;
            height: 19px;
            line-height: 19px;
            margin-top: 9px;
            margin-right: 10px;
            padding: 0 10px;
            font-size: 12px;
        }
        .active {
            background: #00a1c6;
            color: #ffffff;
            cursor: pointer;
            border-color: #00a1c6 !important;
        }
    }
</style>

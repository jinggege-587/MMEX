<template>
    <div class="delegation-wrap flex-column">
        <Head :userName="userName"/>
        <div class="delegation w1000">
            <div class="main_box clearfix">
                <Menu :num='4'></Menu>
                <div class="main_info fr">
                    <div class="ybc_list">
                        <div class="ybcoin">
                            <h2 class="fl">我的成交</h2>
                            <div class="ybcoin clearfix">
                                <div class="fr">
                                    <template>
                                        <el-select v-model="value1" placeholder="请选择">
                                            <el-option
                                            v-for="item in options1"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                            </el-option>
                                        </el-select>
                                        <el-select v-model="value2" placeholder="请选择">
                                            <el-option
                                            v-for="item in options2"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                            </el-option>
                                        </el-select>
                                        <span class="sublits">提交</span>
                                    </template>
                                </div>
                            </div>
                        </div>
                        <div class="blackTable user_index">
                            <el-table
                            :data="tableData"
                            style="width: 100%">
                                <el-table-column
                                    prop="order"
                                    label="订单号"
                                    width="80">
                                </el-table-column>
                                <el-table-column
                                    prop="name"
                                    label="币种"
                                    width="140">
                                </el-table-column>
                                <el-table-column
                                    prop="date"
                                    label="成交时间"
                                    width="160">
                                </el-table-column>
                                <el-table-column
                                    prop="style"
                                    label="类型"
                                    width="100">
                                    <template slot-scope="scope">
                                        <div v-if="scope.row.style=='买入'"><span class="yesColor">{{scope.row.style}}</span></div>
                                        <div v-else><span class="noColor">{{scope.row.style}}</span></div>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="price"
                                    label="成交价格"
                                    width="80">
                                </el-table-column>
                                <el-table-column
                                    prop="allCj"
                                    label="成交数量"
                                    width="80">
                                </el-table-column>
                                <el-table-column
                                    prop="name"
                                    label="成交额">
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
        name: 'my_order',
        components: {Head,Foot,Menu},
        data() {
            return {
                msg: '',
                value1:'CK.USD',
                tableData:[],
                userName:'',
                value2:'未成交',
                options1:[{value: '比特币',label: '比特币'},{value: '以太坊',label: '以太坊'},{value: '链克',label: '链克'}],
                options2:[{value: 'CK.USD',label: 'CK.USD'},{value: 'BTC',label: 'BTC'},{value: 'ETH',label: 'ETH'}]
            }
        },
        created(){
            let _this = this;
            this.$filter.auth(function(msg){
                _this.userName = msg.name;
                _this.submits();
            });
        },
        methods: {
            submits(){
                /* 
                    // 币种
                    g: 'BTC',
                    // 市场
                    m: 'CK.USD'
                */
                let param = {
                    g:this.value1,
                    m:this.value2
                }
                let status = { 0: '全部', 1:'未全部成交',2:'已全部成交'};
                status = status[param.s];
                this.auth_server = window.auth_server;
                this.auth_server.emit('msg', { path: '/account/trades', body: param }, (msg) => {
                    console.log('查询本人所有的成交记录',JSON.stringify(msg));
                    if(msg.error){
                        this.$message.error({
                            message: msg.error
                        });
                    }else{
                       let data = msg.body;
                       let tableData = [];
                       data.forEach(element => {
                           ['订单编号','委托时间', '币种/市场', '类型(买入/卖出)', '委托数量', '委托价格', '成交数量', '尚未成交数量']
                           tableData.push({order:element[0],date:element[2],name:element[1],style:element[3],price:element[4],cjNum:element[5],allCj:element[6]});
                       });
                       this.tableData = tableData;
                    }
                });
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
    .delegation{
        .ybcoin{
            line-height: 40px;
            h2{
                font-size: 17px;
                line-height: 40px;
                color: #666;
            }
            .sublits{
                width: 50px;
                height: 20px;
                line-height: 20px;
                text-align: center;
                border-radius: 5px;
                color: #fff;
                background: #3e868f;
                display: inline-block;
                font-size: 12px;
                cursor: pointer;
            }
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

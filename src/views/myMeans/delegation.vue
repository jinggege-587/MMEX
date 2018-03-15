<template>
    <div class="delegation-wrap flex-column">
        <Head :userName="userName" />
        <div class="delegation w1000">
            <div class="main_box clearfix">
                <Menu :num='3'></Menu>
                <div class="main_info fr">
                    <div class="ybc_list">
                        <div class="ybcoin">
                            <h2 class="fl">委托管理</h2>
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
                                        <span class="sublits" @click="submits()">提交</span>
                                    </template>
                                </div>
                            </div>
                        </div>
                        <div class="blackTable user_index">
                            <el-table
                            :data="tableData"
                            style="width: 100%">
                                <el-table-column
                                    prop="date"
                                    label="委托时间"
                                    width="145">
                                </el-table-column>
                                <el-table-column
                                    prop="name"
                                    label="币种"
                                    width="95">
                                </el-table-column>
                                <el-table-column
                                    prop="style"
                                    label="类型"
                                    width="70">
                                    <template slot-scope="scope">
                                        <div v-if="scope.row.style=='买入'"><span class="yesColor">{{scope.row.style}}</span></div>
                                        <div v-else><span class="noColor">{{scope.row.style}}</span></div>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="deleNum"
                                    label="委托数量"
                                    width="100">
                                </el-table-column>
                                <el-table-column
                                    prop="price"
                                    label="委托价格"
                                    width="90">
                                </el-table-column>
                                <el-table-column
                                    prop="cjNum"
                                    label="成交数量"
                                    width="90">
                                </el-table-column>
                                <el-table-column
                                    prop="noCj"
                                    label="尚未成交"
                                    width="90">
                                </el-table-column>
                                <el-table-column
                                    prop="status"
                                    label="状态">
                                </el-table-column>
                                <el-table-column
                                    prop="oper"
                                    label="操作">
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
        name: 'delegation',
        components: {Head,Foot,Menu},
        data() {
            return {
                msg: '',
                tableData:[],
                value1:'BTC',
                value2:'1',
                userName:'',
                options1:[{value: 'BTC',label: '比特币'},{value: 'CNET',label: 'CNET'},{value: 'CKUSD',label: 'CK.USD'},{value: 'ETH',label: 'ETH'}],
                options2:[{value: '0',label: '全部'},{value: '1',label: '未全部成交'},{value: '2',label: '已全部成交'}]
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
                    // 币种，不传为所有币种
                    g: 'BTC',
                    // 状态{ 0: 全部, 1:未全部成交， 2:已全部成交}
                    s: 1
                */
                let param = {
                    g:this.value1,
                    s:this.value2
                }
                let status = { 0: '全部', 1:'未全部成交',2:'已全部成交'};
                status = status[param.s];
                this.auth_server = window.auth_server;
                this.auth_server.emit('msg', { path: '/account/orders', body: param }, (msg) => {
                    console.log('查询委托记录',JSON.stringify(msg));
                    if(msg.error){
                        this.$message.error({
                            message: msg.error
                        });
                    }else{
                       let data = msg.body;
                       let tableData = [];
                       data.forEach(element => {
                           ['订单编号','委托时间', '币种/市场', '类型(买入/卖出)', '委托数量', '委托价格', '成交数量', '尚未成交数量']
                           tableData.push({orderNum:element[0],date:element[1],name:element[2],style:element[3],deleNum:element[4],price:element[5],cjNum:element[6],NoCj:element[7],status:status});
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

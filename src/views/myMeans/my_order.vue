<template>
    <div class="delegation-wrap flex-column">
        <Head/>
        <div class="delegation w1000">
            <div class="main_box clearfix">
                <Menu :num='3'></Menu>
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
                                    prop="date"
                                    label="订单号"
                                    width="150">
                                </el-table-column>
                                <el-table-column
                                    prop="name"
                                    label="币种"
                                    width="140">
                                </el-table-column>
                                <el-table-column
                                    prop="name"
                                    label="成交时间"
                                    width="160">
                                </el-table-column>
                                <el-table-column
                                    prop="name"
                                    label="类型"
                                    width="100">
                                </el-table-column>
                                <el-table-column
                                    prop="name"
                                    label="成交价格"
                                    width="80">
                                </el-table-column>
                                <el-table-column
                                    prop="name"
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
        name: 'delegation',
        components: {Head,Foot,Menu},
        data() {
            return {
                msg: '',
                value1:'比特币',
                value2:'未成交',
                options1:[{value: '比特币',label: '比特币'},{value: 'CNET',label: 'CNET'},{value: 'CK.USD',label: 'CK.USD'},{value: 'ETH',label: 'ETH'}],
                options2:[{value: '未成交',label: '未成交'},{value: '部分成交',label: '部分成交'},{value: '已成交',label: '已成交'},{value: '已撤销',label: '已撤销'},]
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

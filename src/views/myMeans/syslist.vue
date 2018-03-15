<template>
    <div class="syslist-wrap flex-column">
        <Head :userName="userName"/>
        <div class="syslist w1000">
            <div class="main_box clearfix">
                <Menu :num='9'></Menu>
                <div class="main_info fr">
                    <h2 class="ybc_section_h2">系统消息</h2>
                    <div class="listBox">
                        <template>
                            <el-table
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column
                                prop="address"
                                label="">
                            </el-table-column>
                            </el-table>
                            <el-pagination
                                layout="prev, pager, next"
                                :total="50">
                            </el-pagination>
                        </template>
                    </div>
                    
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
        name: 'syslist',
        components: {Head,Foot,Menu},
        data() {
            return {
                msg: '',
                userName:'',
                tableData:[]
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
    .syslist{
        .ybc_section_h2{
            font-size: 17px;
            color: #666;
            line-height: 40px;
        }
        .listBox{
            border: 1px solid #e6e6e6;
            padding: 15px;
            .el-pagination{
                text-align: center;
                margin-top: 20px;
            }
        }
    }
</style>

<template>
    <div class="user_index-wrap flex-column">
        <Head/>
        <div class="user_index w1000">
            <div class="main_box clearfix">
                <Menu :num="0"></Menu>
                <div class="main_info fr">
                    <div class="ybcoin clearfix">
                        <div class="fl">账户总资产估算: 
                            <span style="color:#00A1C6;">0.9001</span>
                            BTC/
                            <span style="font-size:12px;">￥61622.69</span>
                        </div>
                        <div class="fr">
                            <input type="text" style="margin-right:20px;" class="smallInput " name="likesearch" placeholder="例如：比特币 或 BTC">
                            <el-checkbox label="隐藏0余额资产" name="type"></el-checkbox>
                        </div>
                    </div>
                    <div class="blackTable user_index">
                        <el-table
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column
                                prop="name"
                                label="名称"
                                width="200">
                            </el-table-column>
                            <el-table-column
                                prop="allNum"
                                label="总量"
                                width="125">
                            </el-table-column>
                            <el-table-column
                                prop="use"
                                label="可用"
                                width="120">
                            </el-table-column>
                            <el-table-column
                                prop="frost"
                                label='冻结'
                                width="90">
                            </el-table-column>
                            <el-table-column
                                prop="handle"
                                label="操作">
                                <template slot-scope="scope">
                                    <a href="" v-for="item in scope.row.handle" style="margin-right:50px;">{{item}}</a>
                                    <!-- <a href="#/index" style="border:#00A1C6 1px solid ; width: 45px; height: 19px;font-size:11px;text-decoration:none;border-radius:2px;line-height:19px;text-align:center;display:inline-block;padding-top:1px" class="gosale">去交易</a> -->
                                </template>
                            </el-table-column>
                        </el-table>
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
    import { mapState,mapActions } from 'vuex'
    export default {
        name: 'user_index',
        components: {Head,Foot,Menu},
        data() {
            return {
                msg: '',
                tableData:[],
            }
        },
        computed:{
            ...mapState({
                authStatus(state){
                    return state.auth
                }
            })
        },
        created(){
            let _this = this;
            this.$filter.auth(
                function(){
                    _this.balance();
                }
            );
            // 
        },
        methods: {
            ...mapActions([
                'auth'
            ]),
            balance(){
                this.auth_server = window.auth_server;
                this.auth_server.emit('msg', { path: '/account/balance', body: {} }, (msg) => {
                    console.log('查询当前资产状态',JSON.stringify(msg));
                    if(msg.error){
                        this.$message.error({
                            message: msg.error
                        });
                    }else{
                       let data = msg.body;
                       let tableData = [];
                       data.forEach(element => {
                        //    let a = element[4],b=[];
                        //    b.push(a)
                           tableData.push({name:element[0],allNum:element[1],use:element[2],frost:element[3],handle:element[4]});
                       });
                       this.tableData = tableData;
                    }
                });
            }
        }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
    .user_index{
        padding: 30px 0;
        .main_info{
            width: 810px;
            text-align: left;
            input.smallInput{
                max-width: 100%;
                -webkit-box-flex: 1;
                -webkit-flex: 1 0 auto;
                -ms-flex: 1 0 auto;
                flex: 1 0 auto;
                outline: 0;
                -webkit-tap-highlight-color: rgba(255,255,255,0);
                text-align: left;
                line-height: 1.2142em;
                font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
                padding: .67861429em 1em;
                background: #fff;
                border: 1px solid rgba(34,36,38,.15);
                color: rgba(0,0,0,.87);
                border-radius: .28571429rem;
                -webkit-transition: box-shadow .1s ease,border-color .1s ease;
                transition: box-shadow .1s ease,border-color .1s ease;
                box-shadow: none;
            }
        }
    }
</style>

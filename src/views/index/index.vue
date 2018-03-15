<template>
    <div class="index-wrap flex-column">
        <Head :userName="userName"/>
        <div class="index-top">
            <div class="w1000 pt_20 clearfix">
                <div class="fl w25 w367 clearfix">
                    <img class="fl mr_10" src="@/assets/img/icon9.png" alt="">
                    <div class="fl">
                        <p>比特币 对 CK.USD</p>
                        <p>BTC/ CK.USD</p>
                    </div>
                </div>
                <div class="fl w25 w280">
                    <p class="p1">最新价</p>
                    <p class="p2">{{data1}}<span>/￥{{data2}}</span></p>
                </div>
                <div class="fl w25 w260">
                    <p class="p1">最高价/最低价</p>
                    <p class="p3">{{data3}}/{{data4}}</p>
                </div>
                <div class="fl w25 ">
                    <p class="p1">24H成交量</p>
                    <p class="p3">{{data5}}</p>
                </div>
            </div>
        </div>
        <div class="index w1000">
            <div class="indexInfo clearfix">
                <div class="indexLeft fl">
                    <div class="zxt">
                        <!-- <v-html-panel :url.asyc="kLine"></v-html-panel> -->
                        <!-- <iframe class="chart_kline" style="border:1px solid #ddd;width: 660px; height: 410px;" :src="kLine"></iframe> -->
                        <!-- <img src="@/assets/img/img9.jpg" alt=""> -->
                        <div id="main" style="width: 660px;height:410px;"></div>
                    </div>
                    <div class="my_coin">
                        <p>我的资产：<a href="/user/login">登录</a> | <a href="/user/reg">注册</a></p>
                    </div>
                    <div class="my_coin">
                        <ul>
                            <li style="width:130px;">我的BIFI资产：</li>
                            <li>可用：<span class="sell" id="from_over">0</span></li>
                            <li>冻结：<span class="buy" id="from_lock">0</span></li>
                            <li>总量：<span style="color:#333;" id="from_total">0</span></li>
                            <div class="clear"></div>
                        </ul>
                        <ul>
                            <li style="width:130px;">我的CK.USD资产：</li>
                            <li>可用：<span class="sell" id="to_over">7706.8098</span></li>
                            <li>冻结：<span class="buy" id="to_lock">0</span></li>
                            <li>总量：<span style="color:#333;" id="to_total">7706.80989</span></li>
                            <div class="clear"></div>
                        </ul>
                    </div>
                    <div class="curve pay">
                        <div class="buysell sellform clearfix">
                            <div class="buyformarea left fl">
                                <h2 class="buy">买入QTUM</h2>
                                <ul class="buyform">
                                    <li>
                                        <label>最佳买价：</label>
                                        <h3 id="coinbuy_nice" class="buy left">32.00</h3>
                                        <p class="left" style="color:#666; font-size:14px; margin-left:5px;"><span style="padding-left:0px;">CK.USD</span> ≈￥</p>

                                        <p id="rmbbuy_nice" class="left" style="color:#666; font-size:14px;">203.008</p>
                                    </li>
                                    <li style="position:relative"><label for="price" class="buys">买入价格：</label>
                                        <input type="text" name="price" id="coinpricein" oninput="sumpricecny();" onkeyup="vNum(this,2);sumbuy(0.00000,2);coinbuy_max(this.value,'qtum','ckusd');" style="color:#333">
                                        <span style="position:absolute;right:40px;top:2px"><i style="font-style:normal" id="rmbbuy_nice1"></i></span>
                                    </li>
                                    <li><label for="num" class="buys">最大可买：</label>
                                        <b id="coinbuy_max" onclick="$('#numberin').val(this.innerHTML,'ckusd')" title="点击将数值写入数量输入框">0</b><span></span>
                                    </li>
                                    <li><label for="num" class="buys">买入比例：</label>
                                        <div class="block el-slider-block" style="width:160px;">
                                            <el-slider v-model="value1"></el-slider>
                                        </div>
                                        <div class="ratio">{{value1}}%</div>
                                    </li>
                                    <li><label for="buynum" class="buys">买入数量：</label>
                                        <input style="display:none;"><!-- for disable autocomplete on chrome -->
                                        <input type="text" class="coinbuy-number" name="buynum" id="numberin" onkeyup="vNum(this,2);sumbuy(0.00000,2);" autocomplete="off">
                                    </li>
                                    <li>
                                        <label for="buyword" class="buys password_trade">交易密码：</label>
                                        <input style="display:none;"><!-- for disable autocomplete on chrome -->
                                        <input type="password" class="buyinput input_trade" id="pwdtradein" autocomplete="off">
                                    </li>
                                    <li style="margin-bottom:0;"><label for="num" class="buys">手续费：</label><b id="feebuy">0.00</b><span>（0% QTUM）</span></li>
                                    <li><label for="num" class="buys">交易额：</label><b id="coinin_sumprice">0.00</b> CK.USD</li>
                                </ul>
                                <p class="sellform">
                                    <input type="button" id="trustbtnin" onclick="tcoinSubmit('qtum2ckusd', 'in');mycointrust();" class="submit" value="买入">
                                </p>
                                <p class="sellform" style="margin:15px 0;height:40px;">
                                    <span id="trustmsgin" class="tishi" style="display: table-cell;">数字货币交易具有极高的风险,投资需谨慎!</span>
                                </p>
                            </div>
                            <div class="buyformarea right fr">
                                <h2 class="sell">卖出QTUM</h2>
                                <ul class="buyform sellform">
                                    <li>
                                        <label>最佳卖价：</label>
                                        <h3 id="coinsale_nice" class="sell left">28.26</h3>
                                        <p class="left" style="color:#666; font-size:14px; margin-left:5px;"><span style="padding-left:0px;">CK.USD</span> ≈￥</p>
                                        <p id="rmbsale_nice" class="buy left" style="color:#666; font-size:14px;">179.451</p>
                                        <!--								<span style="padding-left:5px;"> CNY</span>-->
                                    </li>
                                    <li style="position:relative">
                                        <label for="price" class="buys">卖出价格：</label>
                                        <input type="text" class="buyinput" id="coinpriceout" oninput="sellumpricecny();" onkeyup="vNum(this,2);sumsale(0.00000,2);" style="color:#333">
                                        <span style="position:absolute;right:40px;top:2px"><i style="font-style:normal" id="rmbsale_nice1"></i></span>
                                    </li>
                                    <li>
                                        <label for="num" class="buys">最大可卖：</label>
                                        <b id="coinsale_max" onclick="$('#numberout').val(this.innerHTML)" title="点击将数值写入数量输入框">0</b><span></span>
                                    </li>
                                    <li>
                                        <label for="num" class="buys">卖出比例：</label>
                                        <div class="block el-slider-block" style="width:160px;">
                                            <el-slider v-model="value2"></el-slider>
                                        </div>
                                        <div class="ratio">{{value2}}%</div>
                                    </li>
                                    <li>
                                        <label for="buynum" class="buys">卖出数量：</label>
                                        <input style="display:none;">
                                        <!-- for disable autocomplete on chrome -->
                                        <input type="text" class="buyinput coinsale-number" id="numberout" onkeyup="vNum(this,2);sumsale(0.00000,2);" autocomplete="off">
                                    </li>
                                    <li>
                                        <label for="buyword" class="buys password_trade">交易密码：</label>
                                        <input style="display:none;">
                                        <!-- for disable autocomplete on chrome -->
                                        <input type="password" class="buyinput input_trade" id="pwdtradeout" autocomplete="off">
                                    </li>
                                    <li style="margin-bottom:0;">
                                        <label for="num" class="buys">手续费：</label><b id="fee">0.00</b><span>（0% CK.USD）</span></li>
                                    <li>
                                        <label for="num" class="buys">交易额：</label>
                                        <b id="coinout_sumprice">0.00</b> CK.USD</li>
                                </ul>
                                <p class="sellform sellform2">
                                    <input type="button" class="submit" id="trustbtnout" value="卖出" onclick="tcoinSubmit('qtum2ckusd', 'out');mycointrust();">
                                </p>
                                <p class="sellform" style="margin:15px 0;height:40px;"><span id="trustmsgout" class="tishi" style="display: table-cell;">数字货币交易具有极高的风险,投资需谨慎!</span></p>
                            </div>
                        </div>
                    </div>
                    <h2>
                        最新成交
                        <a target="_black" href="" class="fr my_coin_trade">我的成交</a>
                    </h2>
                    <div class="blackTable">
                        <el-table
                        :data="tableData"
                        stripe
                        style="width: 100%">
                            <el-table-column
                                prop="date"
                                label="成交时间"
                                width="150">
                            </el-table-column>
                            <el-table-column
                                prop="style"
                                label="类型"
                                width="80">
                                <template slot-scope="scope">
                                    <span v-if="scope.row.style==1" style="color:#d60e2f;">买入</span>
                                    <span v-else style="color:#509314;">卖出</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="price"
                                width="160"
                                label="成交价格(CK.USD)">
                                <template slot-scope="scope">
                                    <span v-if="scope.row.style==1" style="color:#d60e2f;">{{scope.row.price}}</span>
                                    <span v-else style="color:#509314;">{{scope.row.price}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="turnover"
                                width="100"
                                label="成交量">
                            </el-table-column>
                            <el-table-column
                                prop="All"
                                label="总计">
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
                <div class="indexRight fr">
                    <div class="tabBox">
                        <div class="tab-top clearfix">
                            <div class="on">CK.USD</div>
                            <div>TBC</div>
                            <div>ETH</div>
                        </div>
                        <div class="blackTable auto">
                            <el-table
                                :data="tableData3"
                                height="375"
                            style="width: 100%">
                                <el-table-column
                                    prop="name"
                                    label="币种"
                                    sortable
                                width="72">
                                </el-table-column>
                                <el-table-column
                                    prop="newPrice"
                                    label="最新价"
                                    sortable
                                width="86">
                                </el-table-column>
                                <el-table-column
                                    prop="upAndDown"
                                    sortable
                                    label="涨跌"
                                width="72">
                                </el-table-column>
                                <el-table-column
                                    prop="all"
                                    sortable
                                label="成交量">
                                </el-table-column>
                            </el-table>
                        </div>
                    </div>
                    <h2>委托信息</h2>
                    <div class="blackTable">
                        <el-table
                            :data="tableData4"
                            stripe
                            style="width: 100%">
                            <el-table-column
                                prop="style"
                                label="类型"
                                width="70">
                                <template slot-scope="scope">
                                    <div style="color:#509314;">{{scope.row.style}}</div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="price"
                                label="价格"
                                width="85">
                            </el-table-column>
                            <el-table-column
                                prop="num"
                                label="委托数量"
                                width="70">
                            </el-table-column>
                            <el-table-column
                                prop="other"
                                label="">
                                <template slot-scope="scope">
                                    <div style="width:75px;">
                                        <div style="height:14px;background:#509314;" v-bind:style="{width:scope.row.other+'%'}"></div>
                                    </div>
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-table
                            :data="tableData5"
                            stripe
                            style="width: 100%">
                            <el-table-column
                                prop="style"
                                label="卖/买"
                                width="55">
                                <template slot-scope="scope">
                                    <div style="color:#d60e2f;">{{scope.row.style}}</div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="price"
                                label="价格(CK.USD)"
                                width="100">
                            </el-table-column>
                            <el-table-column
                                prop="num"
                                label="委托量"
                                width="70">
                            </el-table-column>
                            <el-table-column
                                prop="other"
                                label="">
                                <template slot-scope="scope">
                                    <div style="width:75px;">
                                        <div style="height:14px;background:#d60e2f;" v-bind:style="{width:scope.row.other+'%'}"></div>
                                    </div>
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
    
    export default {
        name: 'index',
        components: {Head,Foot},
        data() {
            return {
                userName:'',
                kLine: '',
                data1:'16411.00',
                data2:'105665.0545',
                data3:'17997.00',
                data4:'15878.00',
                data5:'153.1142',
                value1:0,
                value2:50,
                tableData: [
                    {date:'12-28 10:35:20',style:'1', price:'16411.10',turnover:'0.048',All:'2336.40000000'},
                    {date:'12-28 10:35:20',style:'0', price:'16411.10',turnover:'0.048',All:'2336.40000000'},
                    {date:'12-28 10:35:20',style:'1', price:'16411.10',turnover:'0.048',All:'2336.40000000'},
                    {date:'12-28 10:35:20',style:'0', price:'16411.10',turnover:'0.048',All:'2336.40000000'},
                ],
                tableData3: [
                    {name:'DCT',newPrice:'2.4',upAndDown:'+90.48%',all:'32832.12'},
                    {name:'DCT',newPrice:'2.4',upAndDown:'+90.48%',all:'32832.12'},
                    {name:'DCT',newPrice:'2.4',upAndDown:'+90.48%',all:'32832.12'},
                    {name:'DCT',newPrice:'2.4',upAndDown:'+90.48%',all:'32832.12'},
                    {name:'DCT',newPrice:'2.4',upAndDown:'+90.48%',all:'32832.12'},
                    {name:'DCT',newPrice:'2.4',upAndDown:'+90.48%',all:'32832.12'},
                    {name:'DCT',newPrice:'2.4',upAndDown:'+90.48%',all:'32832.12'},
                    {name:'DCT',newPrice:'2.4',upAndDown:'+90.48%',all:'32832.12'},
                    {name:'DCT',newPrice:'2.4',upAndDown:'+90.48%',all:'32832.12'},
                    {name:'DCT',newPrice:'2.4',upAndDown:'+90.48%',all:'32832.12'},
                    {name:'DCT',newPrice:'2.4',upAndDown:'+90.48%',all:'32832.12'},
                    {name:'DCT',newPrice:'2.4',upAndDown:'+90.48%',all:'32832.12'},
                    {name:'DCT',newPrice:'2.4',upAndDown:'+90.48%',all:'32832.12'},
                    {name:'DCT',newPrice:'2.4',upAndDown:'+90.48%',all:'32832.12'},
                    {name:'DCT',newPrice:'2.4',upAndDown:'+90.48%',all:'32832.12'},
                    {name:'DCT',newPrice:'2.4',upAndDown:'+90.48%',all:'32832.12'},
                    {name:'DCT',newPrice:'2.4',upAndDown:'+90.48%',all:'32832.12'},
                    {name:'DCT',newPrice:'2.4',upAndDown:'+90.48%',all:'32832.12'},
                ],
                tableData4:[
                    {style:'买(20)',price:17849.99,num:2,other:46},
                    {style:'买(20)',price:17849.99,num:2,other:50},
                    {style:'买(20)',price:17849.99,num:2,other:80},
                    {style:'买(20)',price:17849.99,num:2,other:10},
                ],
                tableData5:[
                    {style:'卖(01)',price:17849.99,num:2,other:70},
                    {style:'卖(02)',price:17849.99,num:2,other:10},
                    {style:'卖(03)',price:17849.99,num:2,other:7},
                    {style:'卖(04)',price:17849.99,num:2,other:17},
                ],
            }
            
        },
        created(){
            let _this = this;
            this.$filter.auth(function (msg) {
                _this.userName = msg.name;
                _this.__trade__chart();
            });
        },
        methods: {
            /* 获取某种币种绘制K线图的数据 */
            __trade__chart(){
                let _this = this;
                this.$api.__trade__chart(this.formForget,
                    (msg) => {
                        console.log('获取K线成功',msg);
                        msg.forEach(element => {
                            element[0] = new Date(element[0]);
                        });
                        _this.echarts(msg);
                    },
                    err => {
                        this.$message.error({
                            message: err.error
                        });
                    }
                );
            },
            echarts(rawData){
                var rawData = [[1508608800,16591.5651,3.05,6,3.05,5.24],[1508695200,11428.4,4.99,4.99,3.55,3.85],[1508781600,33006.142,3.85,4.94,3.105,3.15],[1508868000,23541.734354,3.3,3.48,2.2,2.9],[1508954400,42593.609677,2.89,3.55,2.75,3.46],[1509040800,39049.283962,3.31,3.45,2.8,3.1],[1509127200,50810.053893,3.13,3.25,2.86,3],[1509213600,43529.726823,2.86,3.19,2.86,3.19],[1509300000,153309.230881,3,3.27,2.67,3.17],[1509386400,57768.661191,3.16,3.49,2.9,2.95],[1509472800,59637.748827,2.95,3,2.61,2.88],[1509559200,47119.285999,2.75,2.88,2.69,2.75],[1509645600,79394.69287,2.76,2.83,2.63,2.74],[1509732000,151450.855968,2.74,3.8,2.69,3.1],[1509818400,120817.245578,3.1,3.58,3.02,3.3]].reverse();
                // 基于准备好的dom，初始化echarts实例
                var myChart = this.$echarts.init(document.getElementById('main'));
                function calculateMA(dayCount, data) {
                    var result = [];
                    for (var i = 0, len = data.length; i < len; i++) {
                        if (i < dayCount) {
                            result.push('-');
                            continue;
                        }
                        var sum = 0;
                        for (var j = 0; j < dayCount; j++) {
                            sum += data[i - j][1];
                        }
                        result.push(sum / dayCount);
                    }
                    return result;
                }


                var dates = rawData.map(function (item) {
                    return item[0];
                });

                var data = rawData.map(function (item) {
                    return [+item[1], +item[2], +item[5], +item[6]];
                });
                var option = {
                    backgroundColor: '#21202D',
                    legend: {
                        data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30'],
                        inactiveColor: '#777',
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            animation: false,
                            type: 'cross',
                            lineStyle: {
                                color: '#376df4',
                                width: 2,
                                opacity: 1
                            }
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: dates,
                        axisLine: { lineStyle: { color: '#8392A5' } }
                    },
                    yAxis: {
                        scale: true,
                        axisLine: { lineStyle: { color: '#8392A5' } },
                        splitLine: { show: false }
                    },
                    grid: {
                        bottom: 80
                    },
                    dataZoom: [{
                        textStyle: {
                            color: '#8392A5'
                        },
                        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                        handleSize: '80%',
                        dataBackground: {
                            areaStyle: {
                                color: '#8392A5'
                            },
                            lineStyle: {
                                opacity: 0.8,
                                color: '#8392A5'
                            }
                        },
                        handleStyle: {
                            color: '#fff',
                            shadowBlur: 3,
                            shadowColor: 'rgba(0, 0, 0, 0.6)',
                            shadowOffsetX: 2,
                            shadowOffsetY: 2
                        }
                    }, {
                        type: 'inside'
                    }],
                    animation: false,
                    series: [
                        {
                            type: 'candlestick',
                            name: '日K',
                            data: data,
                            itemStyle: {
                                normal: {
                                    color: '#FD1050',
                                    color0: '#0CF49B',
                                    borderColor: '#FD1050',
                                    borderColor0: '#0CF49B'
                                }
                            }
                        },
                        {
                            name: 'MA5',
                            type: 'line',
                            data: calculateMA(5, data),
                            smooth: true,
                            showSymbol: false,
                            lineStyle: {
                                normal: {
                                    width: 1
                                }
                            }
                        },
                        {
                            name: 'MA10',
                            type: 'line',
                            data: calculateMA(10, data),
                            smooth: true,
                            showSymbol: false,
                            lineStyle: {
                                normal: {
                                    width: 1
                                }
                            }
                        },
                        {
                            name: 'MA20',
                            type: 'line',
                            data: calculateMA(20, data),
                            smooth: true,
                            showSymbol: false,
                            lineStyle: {
                                normal: {
                                    width: 1
                                }
                            }
                        },
                        {
                            name: 'MA30',
                            type: 'line',
                            data: calculateMA(30, data),
                            smooth: true,
                            showSymbol: false,
                            lineStyle: {
                                normal: {
                                    width: 1
                                }
                            }
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }
        }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
    .index-top{
        height: 90px;
        background: #fbfafa;
        margin-top: 2px;
        margin-bottom: 25px;
        .w25{
            width: 85px;
            p{
                font-size: 16px;
                line-height: 25px;
                color: #333333;
                text-align: left;
            }
            .p1{color: #999;}
            .p2{
                font-size: 22px;
                color: #3e868f;
                span{
                    font-size: 14px;
                    color: #999;
                }
            }
            .p3{
                font-size: 22px;
                color: #666;
            }
        }
        .w367{
            width: 367px;
        }
        .w280{
            width: 280px;
        }
        .w260{
            width: 260px;
        }
    }
    .indexInfo{
        .indexLeft{
            text-align: left;
            width: 660px;
            .zxt{
                width: 658px;
                height: 410px;
                margin-bottom: 45px;
            }
            .my_coin {
                border: 1px solid #e2e2e2;
                padding: 15px 0 15px 15px;
                margin: 30px 0;
                font-size: 14px;
                color: #7F8996;
                background: #fff;
                ul {
                    height: 24px;
                    li {
                        float: left;
                        width: 170px;
                        line-height: 24px;
                        color: #7F8996;
                        .sell {
                            color: #11BE84;
                        }
                    }
                }
            }
            .pay {
                .buysell {
                    .buyformarea {
                        width: 312px;
                        border: 1px solid #e2e2e2;
                        background: #fff;
                        font-size: 12px;
                        .buy {
                            color: #fd3737;
                            padding: 20px 20px 20px 20px;
                            font-size: 20px;
                        }
                        .sell{
                            color: #11BE84;
                            padding: 20px 20px 20px 20px;
                            font-size: 20px;
                        }
                        .left {
                            float: left;
                        }
                        .buyform {
                            li {
                                height: 30px;
                                line-height: 30px;
                                margin-bottom: 10px;
                                label {
                                    width: 80px;
                                    float: left;
                                    text-align: right;
                                }
                                .buy{
                                    color: #fd3737;
                                    font-size: 16px;
                                    padding: 0;
                                    font-weight: normal;
                                }
                                input {
                                    height: 24px;
                                    line-height: 24px;
                                    width: 190px;
                                    vertical-align: middle;
                                    border: 1px solid #dddcda;
                                    padding-left: 2px;
                                }
                                span {
                                    font-size: 12px;
                                    color: #999;
                                    padding-left: 10px;
                                }
                                .el-slider-block{
                                    display: inline-block;
                                    padding-left: 15px;
                                    margin-top: -4px;
                                }
                                .ratio{
                                    float: right;
                                    text-align: center;
                                    margin-right: 25px;
                                    color: #868896;
                                }
                            }
                        }
                        .sellform {
                            .submit {
                                width: 260px;
                                margin-left: 25px;
                                height: 40px;
                                font-size: 18px;
                                color: rgb(255, 255, 255);
                                cursor: pointer;
                                font-family: 微软雅黑;
                                background: #d60e2f;
                                border-width: initial;
                                border-style: none;
                                border-color: initial;
                                border-image: initial;
                                border-radius: 5px;
                            }
                            .tishi {
                                color: #d60e2f;
                                line-height: 24px;
                                padding-left: 15px;
                            }
                            li {
                                .sell{
                                    color: #11BE84;
                                    font-size: 16px;
                                    padding: 0;
                                    font-weight: normal;
                                }
                            }
                        }
                        .sellform2 .submit{
                            background: #509314;
                        }
                    }
                }
            }
            h2{
                font-size: 16px;
                line-height: 40px;
                color: #666666;
                .my_coin_trade {
                    text-decoration: underline;
                    font-size: 12px;
                }
            }
            .blackTable{
                margin-bottom: 85px;
            }
        }
        .indexRight{
            width: 320px;
            text-align: left;
            .tabBox{
                border: 1px solid #efefef;
                .tab-top{
                    height: 28px;
                    margin-bottom: 5px;
                    div{
                        line-height: 24px;
                        float: left;
                        margin-top: 5px;
                        cursor: pointer;
                        margin-right: 40px;
                        padding-left: 10px;
                        &.on{
                            color: #3e868f;
                            border-bottom: 2px solid #3e868f;
                        }
                    }
                }
            }
            .el-table{
                font-size: 12px;
            }
            h2{
                font-size: 16px;
                line-height: 40px;
                color: #666;
            }
        }
    } 
</style>

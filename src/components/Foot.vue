<template>
    <div class="template ">
		<div class="footer ">
            <div class="w1000 clearfix">
                <div class="footCon">
                    <div class="footLeft fl">
                        <p class="p1">友情链接</p>
                        <p class="p2"><img src="@/assets/img/img1.png" alt=""></p>
                    </div>
                    <div class="footRight fr">
                        <p class="p1"><a href="">申请API</a> <a href="">服务协议</a></p>
                        <p class="p2">客服邮箱：support@mmex.ca</p>
                        <p class="p3">商务邮箱：business@mmex.ca</p>
                        <ul>
                            <li><a href="javascript:;"></a></li>
                            <li class="li1"><a href="javascript:;"></a></li>
                            <li class="li2"><a href="javascript:;"></a></li>
                            <li class="li3"><a href="javascript:;"></a></li>
                        </ul>
                    </div>
                </div>
                <div class="footBtm">
                    Copyright 2017 MMEX.CA All Rights Reserved.
                </div>
            </div>
			
		</div>
    </div>
</template>

<script>
export default {
  name: 'Foot',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
	.footer{
		height: 210px;
        background: #272727;
        .footCon{
            height: 150px;
            .footLeft{
                width: 45%;
                .p1{
                    color: #e7e7e7;
                    font-size: 14px;
                    text-align: left;
                    padding-top: 25px;
                }
                .p2{
                    padding-top: 50px;
                }
            }
            .footRight{
                width: 45%;
                font-size: 14px;
                text-align: right;
                color: #e7e7e7;
                .p1{
                    padding-top: 40px;
                    margin-right: 20px;
                    a{
                        color: #e7e7e7;
                        margin-left: 20px;
                    }
                }
                .p2,.p3{
                    line-height: 25px;
                    margin-right: 20px;
                }
                ul{
                    float: right;
                    li{
                        width: 36px;
                        height: 36px;
                        float: left;
                        margin-left: 20px;
                        cursor: pointer;
                        background: url(../assets/img/icon3.png) no-repeat;
                        &.li1{
                            background-position-x: -58px;
                        }
                        &.li2{
                            background-position-x: -116px;
                        }
                        &.li3{
                            background-position-x: -174px;
                        }
                    }
                }
            }
        }
        .footBtm{
            height: 60px;
            line-height: 60px;
            color: #e7e7e7;
            font-size: 12px;
            border-top: 1px solid #5d5d5d;
        }
	}
</style>

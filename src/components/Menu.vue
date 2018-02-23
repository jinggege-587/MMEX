<template>
    <div class="menu">
        <div id="my_menu" class="sdmenu fl">
			<div>
				<p>我的资产</p>
				<a href="#/user_index/" :class="[num==0 ? 'uc-current':'']"><b class="ic-uc"></b>账户资产</a>
				<a href="#/record" :class="[num==1 ? 'uc-current':'']"><b class="ic-uc"></b>充提记录</a>
				<!-- <a href="/user_tytransaction/proxy" :class="[num==2 ? 'uc-current':'']"><b class="ic-uc"></b>代理充值</a> -->
			</div>
			<div style="position:relative;">
				<p>我的交易</p>
				<a href="#/delegation" :class="[num==3 ? 'uc-current':'']"><b class="ic-uc"></b>委托管理</a>
				<a href="#/my_order" :class="[num==4 ? 'uc-current':'']"><b class="ic-uc"></b>我的成交</a>
				<!-- <a href="/user_exchange/applyapi" :class="[num==5 ? 'uc-current':'']"><b class="ic-uc"></b>API申请</a> -->
			</div>
			<div>
				<p>账户中心</p>
				<a href="#/securitys" :class="[num==6 ? 'uc-current':'']"><b class="ic-uc"></b>安全中心</a>
				<a href="#/realName" :class="[num==7 ? 'uc-current':'']"><b class="ic-uc"></b>实名认证</a>
				<a href="#/affirm" :class="[num==11 ? 'uc-current':'']"><b class="ic-uc"></b>双重认证</a>
				<a href="#/updatePsw" :class="[num==8 ? 'uc-current':'']"><b class="ic-uc"></b>修改密码</a>
				<a href="#/syslist" :class="[num==9 ? 'uc-current':'']"><b class="ic-uc"></b>系统消息</a>
			</div>
			<!-- <div>
				<p>我的认购</p>
				<a href="/user_index/launchlist/" :class="[num==10 ? 'uc-current':'']"><b class="ic-uc"></b>认购记录</a>
			</div> -->
		</div>
    </div>
</template>

<script>
export default {
	name: 'Menu',
	data () {
		return {
		msg: 'Welcome to Your Vue.js App'
		}
	},
	props:{
		num:{
			type:Number,
			default:"num"
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" rel="stylesheet/less">
	.menu{
		background: #fafafa;
		width: 170px;
	}
	
		.sdmenu{ width:170px; font-size: 12px; background-color:#fafafa; padding-bottom:10px;}
		.sdmenu div{ overflow: hidden;}
		.sdmenu div.collapsed{ height:36px; }
		.sdmenu div p{ display: block; height:40px; line-height:40px; font-size:18px; color:#4A5F78;  cursor:default; border-bottom: 1px solid #dfdfdf; margin:10px 20px 5px 20px;}
		.sdmenu div a{ height:30px; padding-left:20px; line-height:30px; color:#7F8996; display:block; text-decoration:none;}
		.sdmenu div a:hover{ color:#00A1C6; text-decoration:none;}
		.sdmenu div .uc-current{ color:#00A1C6; text-decoration:none; border-left:3px solid #00A1C6; padding-left:17px;}
</style>

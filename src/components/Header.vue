<template>
    <div class="template ">
		<div class="header w1000 clearfix">
			<div class="logo fl">
				<img src="@/assets/img/logo.png" alt="">
			</div>
			<div class="">

			</div>
		</div>
		<div class="hbb"></div>
    </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
	.hbb{
		height: 0px;
		border-bottom: 1px solid #ebebeb;
	}
	.header{
		height: 58px;
		line-height: 58px;
		.logo{
			height: 58px;
			img{
				padding: 10px 0;
			}
		}
	}
</style>

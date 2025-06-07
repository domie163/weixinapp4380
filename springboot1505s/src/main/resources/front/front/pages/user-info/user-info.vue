<template>
<view class="content">
	<view class="box" :style='{"minHeight":"100vh","width":"100%","padding":"0","position":"relative","background":"url(http://codegen.caihongy.cn/20221021/ae428fdc305b447f9c5f678cb644ddf9.jpg) no-repeat center top / 100% 100%,#3e4cc6","height":"100%"}'>
		<view :style='{"width":"100%","padding":"24rpx","background":"none","display":"block","height":"auto"}'>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#846cc1","alignItems":"center","color":"#dfddef","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='xuesheng'" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#dfddef","textAlign":"right"}'>学号</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#dfddef","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' disabled="true"  v-model="ruleForm.xuehao" placeholder="学号"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#846cc1","alignItems":"center","color":"#dfddef","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='xuesheng'" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#dfddef","textAlign":"right"}'>姓名</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#dfddef","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.xingming" placeholder="姓名"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#846cc1","alignItems":"center","color":"#dfddef","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='xuesheng'" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#dfddef","textAlign":"right"}'>密码</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#dfddef","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'  type="password" v-model="ruleForm.mima" placeholder="密码"></input>
			</view>
			<view v-if="tableName=='xuesheng'" :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#846cc1","alignItems":"center","color":"#dfddef","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#dfddef","textAlign":"right"}' class="title">性别</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}'  @change="xueshengxingbieChange" :value="xueshengxingbieIndex" :range="xueshengxingbieOptions">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#b4aafe"}' class="uni-input picker-select-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#846cc1","alignItems":"center","color":"#dfddef","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='xuesheng'" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#dfddef","textAlign":"right"}'>手机</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#dfddef","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.shouji" placeholder="手机"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#846cc1","alignItems":"center","color":"#dfddef","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='xuesheng'" @tap="xueshengtouxiangTap" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#dfddef","textAlign":"right"}'>头像</view>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-if="ruleForm.touxiang" style="margin: 0;" class="avator" :src="baseUrl+ruleForm.touxiang" mode=""></image>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-else class="avator" style="margin: 0;" src="../../static/gen/upload.png" mode=""></image>
			</view>
			<view :style='{"width":"100%","margin":"48rpx 0 0 0","justifyContent":"center","display":"flex","height":"auto"}' class="btn">
				<button @tap="update()" class="cu-btn lg" :style='{"border":"2rpx solid #f99203","padding":"0px","boxShadow":"4rpx 4rpx 8rpx #624b69","margin":"0px 20rpx 0","color":"#fefefe","borderRadius":"16rpx","background":"-webkit-linear-gradient(top,#ebb270,#f99203)","width":"176rpx","lineHeight":"80rpx","fontSize":"28rpx","height":"80rpx"}'>保存</button>
				<button @tap="logout()" class="cu-btn lg" :style='{"border":"2rpx solid #555","padding":"0px","boxShadow":"2rpx 2rpx 4rpx #624b69,inset 0px 0px 32rpx 0px #aaa","margin":"0 20rpx","color":"#555","borderRadius":"16rpx","background":"rgb(255, 255, 255)","width":"176rpx","lineHeight":"80rpx","fontSize":"28rpx","height":"80rpx"}'>退出登录</button>
			</view>
		</view>
	</view>
</view>
</template>

<script>
	export default {
		data() {
			return {
				ruleForm: {
				},
				tableName:"",
				xueshengxingbieOptions: [],
				xueshengxingbieIndex: 0,
			}
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
		async onLoad() {
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.ruleForm = res.data;
			this.tableName = table;
			// 自定义下拉框值
			if(this.tableName=='xuesheng'){
				this.xueshengxingbieOptions = "男,女".split(',');
				this.xueshengxingbieOptions.forEach((item, index) => {
					if(item==this.ruleForm.xingbie) {
						this.xueshengxingbieIndex = index;
					}
				});
			}
			this.styleChange()
		},
		methods: {
            // 下拉变化
            xueshengxingbieChange(e) {
                    this.xueshengxingbieIndex = e.target.value
                    this.ruleForm.xingbie = this.xueshengxingbieOptions[this.xueshengxingbieIndex]
            },
			xueshengtouxiangTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.touxiang = 'upload/' + res.file;
					_this.$forceUpdate();
				});
			},

            toggleTab(str) {
                this.$refs[str].show();
            },

			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('. .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.userInfoForm.list.input.backgroundColor
					// })
				})
			},
			// 获取uuid
			getUUID () {
				return new Date().getTime();
			},
			logout() {
				uni.setStorageSync('token', '');
				this.$utils.jump('../login/login');
			},
			// 注册
			async update() {
				if((!this.ruleForm.xuehao) && `xuesheng` == this.tableName){
					this.$utils.msg(`学号不能为空`);
					return
				}
				if((!this.ruleForm.xingming) && `xuesheng` == this.tableName){
					this.$utils.msg(`姓名不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `xuesheng` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
				if(`xuesheng` == this.tableName && this.ruleForm.shouji&&(!this.$validate.isMobile(this.ruleForm.shouji))){
					this.$utils.msg(`手机应输入手机格式`);
					return
				}
				if(`xuesheng` == this.tableName && this.ruleForm.money&&(!this.$validate.isNumber(this.ruleForm.money))){
					this.$utils.msg(`余额应输入数字`);
					return
				}
				let table = uni.getStorageSync("nowTable");
				await this.$api.update(table, this.ruleForm);
				this.$utils.msgBack('修改成功');;
			},

		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>

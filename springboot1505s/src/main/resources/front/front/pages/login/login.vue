<template>
	<view class="content">
		<view class="box" :style='{"minHeight":"100vh","width":"100%","padding":"0px 0px 144rpx 0px","backgroundSize":"100% auto","background":"url(http://codegen.caihongy.cn/20221020/26acea76d8de4e2a98db762b8307b82f.jpg) #b589f3 no-repeat center bottom","height":"100%"}'>
			<view :style='{"width":"100%","padding":"0px","display":"block","height":"auto"}'>
				<image :style='{"width":"100%","margin":"0 0 48rpx 0","borderRadius":"0","display":"block","height":"auto"}' src="http://codegen.caihongy.cn/20221021/233cbd7d2a25483abe506e64ffe44aaf.jpg" mode="aspectFill"></image>
				<view v-if="loginType==1" :style='{"width":"calc(100% - 96rpx)","margin":"24rpx 48rpx","height":"auto"}' class="uni-form-item uni-column">
					<input v-model="username" :style='{"border":"2rpx solid #ffaa33","padding":"0px 24rpx","boxShadow":"inset 0px 0px 80rpx 0px #f9bc67","margin":"0px","color":"#9513bb","borderRadius":"8rpx","background":"rgb(255, 255, 255)","width":"100%","fontSize":"28rpx","height":"88rpx"}' type="text" class="uni-input" name="" placeholder="请输入账号" />
				</view>
				<view v-if="loginType==1" :style='{"width":"calc(100% - 96rpx)","margin":"24rpx 48rpx","height":"auto"}' class="uni-form-item uni-column">
					<input v-model="password" :style='{"border":"2rpx solid #ffaa33","padding":"0px 24rpx","boxShadow":"inset 0px 0px 80rpx 0px #f9bc67","margin":"0px","color":"#9513bb","borderRadius":"8rpx","background":"rgb(255, 255, 255)","width":"100%","fontSize":"28rpx","height":"88rpx"}' type="password" class="uni-input" name="" placeholder="请输入密码" />
				</view>
				<picker v-if="roleNum>1" :style='{"border":"2rpx solid #ffaa33","padding":"0px 24rpx","boxShadow":"inset 0px 0px 80rpx 0px #f9bc67","margin":"24rpx 48rpx","borderRadius":"8rpx","background":"#fff","width":"calc(100% - 96rpx)","height":"auto"}' @change="optionsChange" :value="index" :range="options">
					<view class="uni-picker-type" :style='{"width":"100%","lineHeight":"88rpx","fontSize":"28rpx","color":"#9f65b0"}'>{{options[index]}}</view>
				</picker>
				<button v-if="loginType==1" class="btn-submit" @tap="onLoginTap" type="primary" :style='{"border":"0","padding":"0","margin":"24rpx 48rpx 24rpx 48rpx","color":"#a848c4","borderRadius":"8rpx","background":"url(http://codegen.caihongy.cn/20221021/f443eadb2bf44cc186b596bf089b941f.png) no-repeat center","width":"calc(100% - 96rpx)","letterSpacing":"8rpx","lineHeight":"88rpx","fontSize":"32rpx","height":"88rpx"}'>登录</button>
				<button v-if="loginType==2" class="btn-submit" @tap="onFaceLoginTap" type="primary" :style='{"border":"0","padding":"0","margin":"24rpx 48rpx 24rpx 48rpx","color":"#a848c4","borderRadius":"8rpx","background":"url(http://codegen.caihongy.cn/20221021/f443eadb2bf44cc186b596bf089b941f.png) no-repeat center","width":"calc(100% - 96rpx)","letterSpacing":"8rpx","lineHeight":"88rpx","fontSize":"32rpx","height":"88rpx"}'>人脸识别登录</button>
				<view class="links" :style='{"width":"calc(100% - 96rpx)","margin":"0 48rpx 24rpx 48rpx","flexWrap":"wrap","display":"flex","height":"auto"}'>
					<view class="link-highlight" @tap="onRegisterTap('xuesheng')" :style='{"color":"#eee","padding":"0 8rpx","fontSize":"28rpx"}'>注册学生</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import menu from '@/utils/menu'
	export default {
		data() {
			return {
				username: '',
				password: '',
                loginType:1,
				codes: [{
				  num: 1,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}, {
				  num: 2,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}, {
				  num: 3,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}, {
				  num: 4,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}],
				options: [
					'请选择登录用户类型'
				],
                optionsValues: [
					'',
                    'xuesheng',
				],
				index: 0,
				roleNum:0
			}
		},
		onLoad() {
			let options = ['请选择登录用户类型'];
			let menus = menu.list();
			this.menuList = menus;
			for(let i=0;i<this.menuList.length;i++){
				if(this.menuList[i].hasFrontLogin=='是'){
					options.push(this.menuList[i].roleName);
					this.roleNum++;
				}
			}
			if(this.roleNum==1) {
				this.index = 1;
			}	
			this.options = options;
			this.styleChange()
		},
		methods: {
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.uni-input .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.loginFrom.content.input.backgroundColor
					// })
				})
			},
			onRegisterTap(tableName) {
                uni.setStorageSync("loginTable", tableName);
				this.$utils.jump('../register/register')
			},
			async onLoginTap() {
                if (!this.username) {
					this.$utils.msg('请输入用户名')
					return
				}
                if (!this.password) {
					this.$utils.msg('请输入用户密码')
					return
				}
                if (!this.optionsValues[this.index]) {
					this.$utils.msg('请选择登陆用户类型')
					return
				}
				let res = await this.$api.login(`${this.optionsValues[this.index]}`, {
					username: this.username,
					password: this.password
				});
                uni.removeStorageSync("useridTag");
				uni.setStorageSync("token", res.token);
				uni.setStorageSync("nickname",this.username);
				uni.setStorageSync("nowTable", `${this.optionsValues[this.index]}`);
				res = await this.$api.session(`${this.optionsValues[this.index]}`);
                if(res.data.touxiang) {
                    uni.setStorageSync('headportrait', res.data.touxiang);
                } else if(res.data.headportrait) {
                    uni.setStorageSync('headportrait', res.data.headportrait);
                }
				// 保存用户id
				uni.setStorageSync("userid", res.data.id);
				if(res.data.vip) {
					uni.setStorageSync("vip", res.data.vip);
				}
				uni.setStorageSync("role", `${this.options[this.index]}`);
				this.$utils.tab('../index/index');
			},
			optionsChange(e) {
				this.index = e.target.value
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>

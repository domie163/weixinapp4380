<template>
<view class="content">
	<view class="box" :style='{"minHeight":"100vh","width":"100%","padding":"0px 0px 144rpx 0px","backgroundSize":"100% auto","background":"url(http://codegen.caihongy.cn/20221020/26acea76d8de4e2a98db762b8307b82f.jpg) #b589f3 no-repeat center bottom","height":"100%"}'>
		<view :style='{"width":"100%","padding":"0","display":"block","height":"auto"}'>
			<image :style='{"width":"100%","margin":"0 0 48rpx 0","borderRadius":"0","display":"block","height":"auto"}' src="http://codegen.caihongy.cn/20221021/e229e80f4ed04f5fb9933f2f2b7a090d.jpg" mode="aspectFill"></image>
			<view :style='{"width":"calc(100% - 96rpx)","margin":"24rpx 48rpx","height":"auto"}' v-if="tableName=='xuesheng'" class="uni-form-item uni-column">
				<input :style='{"border":"2rpx solid #ffaa33","padding":"0px 24rpx","boxShadow":"inset 0px 0px 80rpx 0px #f9bc67","margin":"0px","color":"#9513bb","borderRadius":"8rpx","background":"rgb(255, 255, 255)","width":"100%","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.xuehao"  type="text"  class="uni-input" name="" placeholder="学号" />
			</view>
			<view :style='{"width":"calc(100% - 96rpx)","margin":"24rpx 48rpx","height":"auto"}' v-if="tableName=='xuesheng'" class="uni-form-item uni-column">
				<input :style='{"border":"2rpx solid #ffaa33","padding":"0px 24rpx","boxShadow":"inset 0px 0px 80rpx 0px #f9bc67","margin":"0px","color":"#9513bb","borderRadius":"8rpx","background":"rgb(255, 255, 255)","width":"100%","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.xingming"  type="text"  class="uni-input" name="" placeholder="姓名" />
			</view>
			<view :style='{"width":"calc(100% - 96rpx)","margin":"24rpx 48rpx","height":"auto"}' v-if="tableName=='xuesheng'" class="uni-form-item uni-column">
				<input :style='{"border":"2rpx solid #ffaa33","padding":"0px 24rpx","boxShadow":"inset 0px 0px 80rpx 0px #f9bc67","margin":"0px","color":"#9513bb","borderRadius":"8rpx","background":"rgb(255, 255, 255)","width":"100%","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.mima" type="password"  class="uni-input" name="" placeholder="密码" />
			</view>
			<view :style='{"width":"calc(100% - 96rpx)","margin":"24rpx 48rpx","height":"auto"}' v-if="tableName=='xuesheng'" class="uni-form-item uni-column">
				<input :style='{"border":"2rpx solid #ffaa33","padding":"0px 24rpx","boxShadow":"inset 0px 0px 80rpx 0px #f9bc67","margin":"0px","color":"#9513bb","borderRadius":"8rpx","background":"rgb(255, 255, 255)","width":"100%","fontSize":"28rpx","height":"88rpx"}' v-model="ruleForm.mima2" type="password" class="uni-input" name="" placeholder="确认密码" />
			</view>
			<picker :style='{"border":"2rpx solid #ffaa33","padding":"0px 24rpx","boxShadow":"inset 0px 0px 80rpx 0px #f9bc67","margin":"24rpx 48rpx","borderRadius":"8rpx","background":"#fff","width":"calc(100% - 96rpx)","height":"auto"}' v-if="tableName=='xuesheng'"  @change="xueshengxingbieChange" :value="xueshengxingbieIndex" :range="xueshengxingbieOptions">
				<view :style='{"width":"100%","lineHeight":"88rpx","fontSize":"28rpx","color":"#9f65b0"}' class="uni-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
			</picker>
			<view :style='{"width":"calc(100% - 96rpx)","margin":"24rpx 48rpx","height":"auto"}' v-if="tableName=='xuesheng'" class="uni-form-item uni-column">
				<input :style='{"border":"2rpx solid #ffaa33","padding":"0px 24rpx","boxShadow":"inset 0px 0px 80rpx 0px #f9bc67","margin":"0px","color":"#9513bb","borderRadius":"8rpx","background":"rgb(255, 255, 255)","width":"100%","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.shouji"  type="text"  class="uni-input" name="" placeholder="手机" />
			</view>
            <view :style='{"width":"calc(100% - 96rpx)","margin":"24rpx 48rpx","height":"auto"}' v-if="tableName=='xuesheng'" @tap="xueshengtouxiangTap" class="">
                <view>请上传头像</view>
                <image :style='{"width":"160rpx","borderRadius":"16rpx","display":"block","height":"160rpx"}' v-if="ruleForm.touxiang" class="avator" :src="baseUrl+ruleForm.touxiang" mode=""></image>
                <image :style='{"width":"160rpx","borderRadius":"16rpx","display":"block","height":"160rpx"}' v-else class="avator" src="../../static/gen/upload.png" mode=""></image>
            </view>
			<button :style='{"border":"0","padding":"0","boxShadow":"0 0 0px #ccc","margin":"24rpx 48rpx 24rpx 48rpx","color":"#a848c4","borderRadius":"8rpx","background":"url(http://codegen.caihongy.cn/20221021/f443eadb2bf44cc186b596bf089b941f.png) no-repeat center","width":"calc(100% - 96rpx)","letterSpacing":"8rpx","lineHeight":"88rpx","fontSize":"32rpx","height":"88rpx"}' class="btn-submit" @tap="register" type="primary">注册</button>
		</view>
	</view>
</view>
</template>

<script>
	export default {
		data() {
			return {
                xueshengxingbieOptions: [],
                xueshengxingbieIndex: 0,
				ruleForm: {
                xuehao: '',
                xingming: '',
                mima: '',
                xingbie: '',
                shouji: '',
                touxiang: '',
                money: '',
				},
				tableName:""
			}
		},
        computed: {
            baseUrl() {
                return this.$base.url;
            }
        },
		async onLoad() {
			let res = [];
			let table = uni.getStorageSync("loginTable");
            this.tableName = table;

                        // 自定义下拉框值
			if(this.tableName=='xuesheng'){
                this.xueshengxingbieOptions = "男,女".split(',');
				this.ruleForm.xingbie=this.xueshengxingbieOptions[0]
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
					// document.querySelectorAll('.uni-input .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.registerFrom.content.input.backgroundColor
					// })
				})
			},
			// 获取uuid
			getUUID () {
				return new Date().getTime();
			},
			// 注册
			async register() {
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
                if(`xuesheng` == this.tableName && (this.ruleForm.mima!=this.ruleForm.mima2)){
                    this.$utils.msg(`两次密码输入不一致`);
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
				await this.$api.register(`${this.tableName}`, this.ruleForm);
				this.$utils.msgBack('注册成功');;
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

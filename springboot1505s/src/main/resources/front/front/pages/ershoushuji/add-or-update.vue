<template>
<view class="content">
	<view :style='{"minHeight":"100vh","width":"100%","padding":"0","position":"relative","background":"url(http://codegen.caihongy.cn/20221021/ae428fdc305b447f9c5f678cb644ddf9.jpg) no-repeat center top / 100% 100%,#3e4cc6","height":"100%"}'>
		<form :style='{"width":"100%","padding":"24rpx","background":"none","display":"block","height":"auto"}' class="app-update-pv">
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#846cc1","alignItems":"flex-start","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#dfddef","textAlign":"right"}' class="title">图书编号</view>
				<view :style='{"padding":"0px 24rpx","margin":"0px","lineHeight":"80rpx","fontSize":"28rpx","color":"#dfddef","flex":"1"}' class="right-input">
					{{ruleForm.tushubianhao}}
				</view>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#846cc1","alignItems":"flex-start","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#dfddef","textAlign":"right"}' class="title">图书名称</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#dfddef","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.tushumingcheng" v-model="ruleForm.tushumingcheng" placeholder="图书名称"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#846cc1","alignItems":"flex-start","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#dfddef","textAlign":"right"}' class="title">图书类型</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' @change="tushuleixingChange" :value="tushuleixingIndex"  :range="tushuleixingOptions">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#b4aafe"}' class="uni-input">{{ruleForm.tushuleixing?ruleForm.tushuleixing:"请选择图书类型"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#846cc1","alignItems":"flex-start","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="" @tap="tupianTap">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#dfddef","textAlign":"right"}' class="title">图片</view>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' class="avator" v-if="ruleForm.tupian" :src="baseUrl+ruleForm.tupian.split(',')[0]" mode="aspectFill"></image>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#846cc1","alignItems":"flex-start","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#dfddef","textAlign":"right"}' class="title">作者</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#dfddef","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.zuozhe" v-model="ruleForm.zuozhe" placeholder="作者"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#846cc1","alignItems":"flex-start","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#dfddef","textAlign":"right"}' class="title">出版社</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#dfddef","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.chubanshe" v-model="ruleForm.chubanshe" placeholder="出版社"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#846cc1","alignItems":"flex-start","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#dfddef","textAlign":"right"}' class="title">出版时间</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' mode="date" :value="ruleForm.chubanshijian" @change="chubanshijianChange">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#b4aafe"}' class="uni-input">{{ruleForm.chubanshijian?ruleForm.chubanshijian:"请选择出版时间"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#846cc1","alignItems":"flex-start","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#dfddef","textAlign":"right"}' class="title">倒计结束时间</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#dfddef","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' v-model="ruleForm.reversetime" placeholder="倒计结束时间" @tap="toggleTab('reversetime')"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#846cc1","alignItems":"flex-start","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#dfddef","textAlign":"right"}' class="title">价格</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#dfddef","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.price" v-model="ruleForm.price" placeholder="价格"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#846cc1","alignItems":"flex-start","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#dfddef","textAlign":"right"}' class="title">起拍价</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#dfddef","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.startprice" v-model="ruleForm.startprice" placeholder="起拍价"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#846cc1","alignItems":"flex-start","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#dfddef","textAlign":"right"}' class="title">加价幅度</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#dfddef","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.stepprice" v-model="ruleForm.stepprice" placeholder="加价幅度"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#846cc1","alignItems":"flex-start","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#dfddef","textAlign":"right"}' class="title">一口价</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#dfddef","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.endprice" v-model="ruleForm.endprice" placeholder="一口价"></input>
			</view>
			
			<!-- 否 -->
 

			
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","borderWidth":"0 0 0px 0","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"100%","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#dfddef","fontWeight":"500"}' class="title">图书简介</view>
                <xia-editor ref="editor" :style='{"minHeight":"300rpx","border":"2rpx solid #846cc1","padding":"20rpx","color":"#333","background":"#fff","width":"100%","height":"auto"}' v-model="ruleForm.tushujianjie" placeholder="图书简介" @editorChange="tushujianjieChange"></xia-editor>
			</view>
			
			<view :style='{"width":"100%","justifyContent":"center","display":"flex","height":"auto"}' class="btn" >
				<button :style='{"border":"2rpx solid #f99203","padding":"0px","boxShadow":"2rpx 4rpx 8rpx #624b69","margin":"0 4% 0 0","color":"rgb(255, 255, 255)","borderRadius":"16rpx","background":"-webkit-linear-gradient(top,#ebb270,#f99203)","width":"28%","lineHeight":"80rpx","fontSize":"28rpx","height":"80rpx"}' @tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

		<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="clicktimeConfirm" ref="clicktime" themeColor="#333333"></w-picker>
		<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="reversetimeConfirm" ref="reversetime" themeColor="#333333"></w-picker>
	</view>
</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
    import xiaEditor from '@/components/xia-editor/xia-editor';
	export default {
		data() {
			return {
				cross:'',
				ruleForm: {
				tushubianhao: this.getUUID(),
				tushumingcheng: '',
				tushuleixing: '',
				tupian: '',
				zuozhe: '',
				chubanshe: '',
				chubanshijian: '',
				tushujianjie: '',
				reversetime: '',
				price: '',
				startprice: '',
				stepprice: '',
				endprice: '',
				},
				tushuleixingOptions: [],
				tushuleixingIndex: 0,
				// 登陆用户信息
				user: {},
                ro:{
                   tushubianhao : false,
                   tushumingcheng : false,
                   tushuleixing : false,
                   tupian : false,
                   zuozhe : false,
                   chubanshe : false,
                   chubanshijian : false,
                   tushujianjie : false,
                   thumbsupnum : false,
                   crazilynum : false,
                   clicktime : false,
                   reversetime : false,
                   clicknum : false,
                   price : false,
                   startprice : false,
                   stepprice : false,
                   endprice : false,
                },
			}
		},
		components: {
			wPicker,
            xiaEditor
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},



		},
		async onLoad(options) {
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
			// ss读取


			// 下拉框
			res = await this.$api.option(`tushuleixing`,`tushuleixing`,{});
			this.tushuleixingOptions = res.data;
            this.tushuleixingOptions.unshift("请选择图书类型");

			// 如果有登陆，获取登陆后保存的userid
			this.ruleForm.userid = uni.getStorageSync("userid")
			if (options.refid) {
				// 如果上一级页面传递了refid，获取改refid数据信息
				this.ruleForm.refid = options.refid;
				this.ruleForm.nickname = uni.getStorageSync("nickname");
			}
			// 如果是更新操作
			if (options.id) {
				this.ruleForm.id = options.id;
				// 获取信息
				res = await this.$api.info(`ershoushuji`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='tushubianhao'){
					this.ruleForm.tushubianhao = obj[o];
					this.ro.tushubianhao = true;
					continue;
					}
					if(o=='tushumingcheng'){
					this.ruleForm.tushumingcheng = obj[o];
					this.ro.tushumingcheng = true;
					continue;
					}
					if(o=='tushuleixing'){
					this.ruleForm.tushuleixing = obj[o];
					this.ro.tushuleixing = true;
					continue;
					}
					if(o=='tupian'){
					this.ruleForm.tupian = obj[o].split(",")[0];
					this.ro.tupian = true;
					continue;
					}
					if(o=='zuozhe'){
					this.ruleForm.zuozhe = obj[o];
					this.ro.zuozhe = true;
					continue;
					}
					if(o=='chubanshe'){
					this.ruleForm.chubanshe = obj[o];
					this.ro.chubanshe = true;
					continue;
					}
					if(o=='chubanshijian'){
					this.ruleForm.chubanshijian = obj[o];
					this.ro.chubanshijian = true;
					continue;
					}
					if(o=='tushujianjie'){
					this.ruleForm.tushujianjie = obj[o];
					this.ro.tushujianjie = true;
					continue;
					}
					if(o=='thumbsupnum'){
					this.ruleForm.thumbsupnum = obj[o];
					this.ro.thumbsupnum = true;
					continue;
					}
					if(o=='crazilynum'){
					this.ruleForm.crazilynum = obj[o];
					this.ro.crazilynum = true;
					continue;
					}
					if(o=='clicktime'){
					this.ruleForm.clicktime = obj[o];
					this.ro.clicktime = true;
					continue;
					}
					if(o=='reversetime'){
					this.ruleForm.reversetime = obj[o];
					this.ro.reversetime = true;
					continue;
					}
					if(o=='clicknum'){
					this.ruleForm.clicknum = obj[o];
					this.ro.clicknum = true;
					continue;
					}
					if(o=='price'){
					this.ruleForm.price = obj[o];
					this.ro.price = true;
					continue;
					}
					if(o=='startprice'){
					this.ruleForm.startprice = obj[o];
					this.ro.startprice = true;
					continue;
					}
					if(o=='stepprice'){
					this.ruleForm.stepprice = obj[o];
					this.ro.stepprice = true;
					continue;
					}
					if(o=='endprice'){
					this.ruleForm.endprice = obj[o];
					this.ro.endprice = true;
					continue;
					}
				}
			}
			this.styleChange()
		},
		methods: {
            tushujianjieChange(e) {
                this.ruleForm.tushujianjie = e
            },
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.app-update-pv . .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},

			// 多级联动参数

			chubanshijianChange(e) {
				this.ruleForm.chubanshijian = e.target.value;
				this.$forceUpdate();
			},

			// 日长控件选择日期时间
			clicktimeConfirm(val) {
				console.log(val)
				this.ruleForm.clicktime = val.result;
				this.$forceUpdate();
			},
			// 日长控件选择日期时间
			reversetimeConfirm(val) {
				console.log(val)
				this.ruleForm.reversetime = val.result;
				this.$forceUpdate();
			},

			// 下拉变化
			tushuleixingChange(e) {
				this.tushuleixingIndex = e.target.value
				this.ruleForm.tushuleixing = this.tushuleixingOptions[this.tushuleixingIndex]
			},

			tupianTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.tupian = 'upload/' + res.file;
					_this.$forceUpdate();
					_this.$nextTick(()=>{
						_this.styleChange()
					})
				});
			},

			getUUID () {
				return new Date().getTime();
			},
			async onSubmitTap() {



































//跨表计算判断
				var obj;
				if((!this.ruleForm.tushumingcheng)){
					this.$utils.msg(`图书名称不能为空`);
					return
				}
				if(this.ruleForm.thumbsupnum&&(!this.$validate.isIntNumer(this.ruleForm.thumbsupnum))){
					this.$utils.msg(`赞应输入整数`);
					return
				}
				if(this.ruleForm.crazilynum&&(!this.$validate.isIntNumer(this.ruleForm.crazilynum))){
					this.$utils.msg(`踩应输入整数`);
					return
				}
				if(this.ruleForm.clicknum&&(!this.$validate.isIntNumer(this.ruleForm.clicknum))){
					this.$utils.msg(`点击次数应输入整数`);
					return
				}
				if((!this.ruleForm.price)){
					this.$utils.msg(`价格不能为空`);
					return
				}
				if(this.ruleForm.price&&(!this.$validate.isNumber(this.ruleForm.price))){
					this.$utils.msg(`价格应输入数字`);
					return
				}
				if((!this.ruleForm.startprice)){
					this.$utils.msg(`起拍价不能为空`);
					return
				}
				if(this.ruleForm.startprice&&(!this.$validate.isNumber(this.ruleForm.startprice))){
					this.$utils.msg(`起拍价应输入数字`);
					return
				}
				if(this.ruleForm.stepprice&&(!this.$validate.isNumber(this.ruleForm.stepprice))){
					this.$utils.msg(`加价幅度应输入数字`);
					return
				}
				if(this.ruleForm.endprice&&(!this.$validate.isNumber(this.ruleForm.endprice))){
					this.$utils.msg(`一口价应输入数字`);
					return
				}
				//更新跨表属性
			       var crossuserid;
			       var crossrefid;
			       var crossoptnum;
				if(this.cross){
					var statusColumnName = uni.getStorageSync('statusColumnName');
					var statusColumnValue = uni.getStorageSync('statusColumnValue');
					if(statusColumnName!='') {
                        if(!obj) {
						    obj = uni.getStorageSync('crossObj');
                        }
						if(!statusColumnName.startsWith("[")) {
							for (var o in obj){
								if(o==statusColumnName){
									obj[o] = statusColumnValue;
								}

							}
							var table = uni.getStorageSync('crossTable');
							await this.$api.update(`${table}`, obj);
						} else {
						       crossuserid=Number(uni.getStorageSync('userid'));
						       crossrefid=obj['id'];
						       crossoptnum=uni.getStorageSync('statusColumnName');
						       crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
						}
					}
				}
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid=crossuserid;
					this.ruleForm.crossrefid=crossrefid;
					let params = {
						page: 1,
						limit:10,
						crossuserid:crossuserid,
						crossrefid:crossrefid,
					}
					let res = await this.$api.list(`ershoushuji`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
						return false;
					} else {
                //跨表计算
						if(this.ruleForm.id){
							await this.$api.update(`ershoushuji`, this.ruleForm);
						}else{
							await this.$api.add(`ershoushuji`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
					if(this.ruleForm.id){
						await this.$api.update(`ershoushuji`, this.ruleForm);
					}else{
						await this.$api.add(`ershoushuji`, this.ruleForm);
					}
					this.$utils.msgBack('提交成功');
				}
			},
			optionsChange(e) {
				this.index = e.target.value
			},
			bindDateChange(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			toggleTab(str) {
				this.$refs[str].show();
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

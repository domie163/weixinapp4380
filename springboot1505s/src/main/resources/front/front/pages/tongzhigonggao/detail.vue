
<template>
<view>
<mescroll-uni @init="mescrollInit" :up="upOption" :down="downOption" @down="downCallback" @up="upCallback">
	<view class="content">
		<view class="container" :style='{"minHeight":"100vh","width":"100%","padding":"0","position":"relative","background":"url(http://codegen.caihongy.cn/20221021/ae428fdc305b447f9c5f678cb644ddf9.jpg) no-repeat center top / 100% 100%,#3e4cc6","height":"auto"}'>
						<swiper :style='{"width":"100%","background":"#fff","height":"360rpx"}' class="swiper" :indicator-dots='false' :autoplay='false' :circular='false' indicator-active-color='#000000' indicator-color='rgba(0, 0, 0, .3)' :duration='500' :interval='5000' :vertical='false'>
				<swiper-item :style='{"width":"100%","background":"#fff","height":"360rpx"}' v-for="(swiper,index) in swiperList" :key="index">
					<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"360rpx"}' mode="aspectFill" v-if="swiper.substring(0,4)=='http'" :src="swiper"></image>
					<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"360rpx"}' mode="aspectFill" v-else :src="baseUrl+swiper"></image>
				</swiper-item>
			</swiper>
									            <view :style='{"width":"100%","padding":"24rpx","flexWrap":"wrap","background":"none","display":"flex","height":"auto"}' class="detail-content">
				<view :style='{"margin":"0 0 24rpx 0","borderColor":"#846cc1","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","justifyContent":"space-between","height":"auto"}' class="detail-list-item price priceFavor">
					<view :style='{"cursor":"pointer","boxShadow":"2rpx 2rpx 4rpx #333","color":"#fff","borderRadius":"50%","textAlign":"center","background":"linear-gradient(120deg, #ffaa33 0%, #feedd5 6%, #f60 100%)","display":"block","width":"56rpx","lineHeight":"56rpx","fontSize":"40rpx","height":"56rpx"}' v-if="storeupFlag==1" class="cuIcon-favorfill" @click="shoucang"></view>
					<view :style='{"cursor":"pointer","boxShadow":"2rpx 2rpx 4rpx #333","color":"#fff","borderRadius":"50%","textAlign":"center","background":"linear-gradient(120deg, #ffaa33 0%, #feedd5 6%, #f60 100%)","display":"block","width":"56rpx","lineHeight":"56rpx","fontSize":"40rpx","height":"56rpx"}' v-if="storeupFlag==0" class="cuIcon-favor" @click="shoucang"></view>
				</view>

				<view :style='{"margin":"0 0 24rpx 0","borderColor":"#846cc1","flexWrap":"wrap","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="detail-list-item title">
					<view :style='{"padding":"0 16rpx 0 0","color":"#fff","textAlign":"left","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"600"}' class="lable">标题：</view>
					<view :style='{"width":"100%","padding":"0 0 20rpx","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"#dfddef"}' class="text">{{detail.biaoti}}</view>
				</view>

				<view class="detail-list-item" :style='{"margin":"0 0 24rpx 0","borderColor":"#846cc1","flexWrap":"wrap","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 16rpx 0 0","color":"#fff","textAlign":"left","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"600"}'>发布人：</view>
					<view  class="text" :style='{"width":"100%","padding":"0 0 20rpx","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"#dfddef"}'>{{detail.faburen}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 24rpx 0","borderColor":"#846cc1","flexWrap":"wrap","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 16rpx 0 0","color":"#fff","textAlign":"left","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"600"}'>发布日期：</view>
					<view  class="text" :style='{"width":"100%","padding":"0 0 20rpx","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"#dfddef"}'>{{detail.faburiqi}}</view>
				</view>





				<view class="detail-list-item rich" :style='{"padding":"0 0 20rpx","margin":"0 0 24rpx 0","borderColor":"#846cc1","flexWrap":"wrap","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx 0 0","color":"#fff","textAlign":"left","width":"100%","lineHeight":"80rpx","fontSize":"28rpx","fontWeight":"600"}'>内容</view>
					<view class="rich-text" :style='{"minHeight":"240rpx","width":"100%","padding":"16rpx 24rpx 24rpx 16rpx","margin":"0","color":"#333","background":"#fff"}'>
						<rich-text :nodes="detail.neirong"></rich-text>
					</view>
				</view>



				<view class="bottom-content bg-white tabbar border shop" :style='{"width":"100%","padding":"10rpx 24rpx","flexWrap":"wrap","background":"none","display":"flex","height":"auto"}'>

				</view>
			</view>

		</view>
	</view>
</mescroll-uni>
</view>
</template>

<script>
	export default {
		data() {
			return {
				btnColor: ['#409eff','#67c23a','#909399','#e6a23c','#f56c6c','#356c6c','#351c6c','#f093a9','#a7c23a','#104eff','#10441f','#a21233','#503319'],
				id: '',
                userid: '',
				detail: {},
				swiperList: [],
				commentList: [],
				mescroll: null, //mescroll实例对象
				downOption: {
					auto: false //是否在初始化后,自动执行下拉回调callback; 默认true
				},
				upOption: {
					noMoreSize: 3, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
					textNoMore: '~ 没有更多了 ~',
				},
				hasNext: true,
				user: {},
				storeupFlag: 0,
				count: 0,
				timer: null
			}
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
		},
		async onLoad(options) {
			this.id = options.id;
            if(options.userid) {
                this.userid = options.userid;
            }
		},
		async onShow(options) {
			// 渲染数据
			this.init();
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			this.btnColor = this.btnColor.sort(()=> {
				return (0.5-Math.random());
			});
			this.getStoreup();
		},
		destroyed: function() {
			//window.clearInterval(this.inter);
		},
		methods: {
			// 支付
			onPayTap(){
				uni.setStorageSync('paytable','tongzhigonggao');
				uni.setStorageSync('payObject',this.detail);
				this.$utils.jump('../pay-confirm/pay-confirm?type=1')
			},
            onDetailTap(item) {
                uni.setStorageSync("useridTag",this.userid);
                this.$utils.jump(`./detail?id=${item.id}&userid=`+this.userid)
            },
			// 收藏
			async getStoreup() {
				let params = {
					page: 1,
					limit: 1,
					refid : this.id,
					tablename : 'tongzhigonggao',
					userid: this.user.id,
					type: 1,
				}
				let res = await this.$api.list(`storeup`, params);
				this.storeupFlag = res.data.list.length;
			},
			async shoucang(){
				let _this = this;
				let params = {
					page: 1,
					limit: 1,
					refid : _this.detail.id,
					tablename : 'tongzhigonggao',
					userid: _this.user.id,
					type: 1,
				}
				let res = await _this.$api.list(`storeup`, params);
				if (res.data.list.length == 1) {
					let storeupId = res.data.list[0].id;
					uni.showModal({
						title: '提示',
						content: '是否取消',
						success: async function(res) {
							if (res.confirm) {
								await _this.$api.del('storeup', JSON.stringify([storeupId]));
								_this.$utils.msg('取消成功');
								_this.getStoreup();
							}
						}
					});
					return;
				}
				uni.showModal({
					title: '提示',
					content: '是否收藏',
					success: async function(res) {
						if (res.confirm) {
							await _this.$api.add('storeup', {
								userid: _this.user.id,
								name: _this.detail.biaoti,
								picture: _this.swiperList[0],
								refid: _this.detail.id,
								tablename: 'tongzhigonggao',
                                type: 1
							});
							_this.$utils.msg('收藏成功');
							_this.getStoreup();
						}
					}
				});
			},
			// 跨表
			onAcrossTap(tableName,crossOptAudit,statusColumnName,tips,statusColumnValue){
				uni.setStorageSync('crossTable','tongzhigonggao');
				uni.setStorageSync(`crossObj`, this.detail);
				uni.setStorageSync(`statusColumnName`, statusColumnName);
				uni.setStorageSync(`statusColumnValue`, statusColumnValue);
				uni.setStorageSync(`tips`, tips);
				if(statusColumnName!=''&&!statusColumnName.startsWith("[")) {
					var obj = uni.getStorageSync('crossObj');
					for (var o in obj){
						if(o==statusColumnName && obj[o]==statusColumnValue){
							this.$utils.msg(tips);
							return
						}
					}
				}
				this.$utils.jump(`../${tableName}/add-or-update?cross=true`);
			},
			// 获取详情
			async init(){
				let res = await this.$api.info('tongzhigonggao', this.id);
				this.detail = res.data;
				//修改富文本的图片样式
				this.detail.neirong = this.detail.neirong.replace(/img src/gi,"img style=\"width:100%;\" src");
				// 轮播图片
				this.swiperList = this.detail.tupian ? this.detail.tupian.split(",") : [];
			},

			// mescroll组件初始化的回调,可获取到mescroll对象
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},

			/*下拉刷新的回调 */
			downCallback(mescroll) {
				this.hasNext = true
				mescroll.resetUpScroll()
			},

			/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
			async upCallback(mescroll) {
				mescroll.endSuccess(mescroll.size, this.hasNext);

            },



			onChatTap() {
				this.$utils.jump('../chat/chat')
			},
			// 下载
			download(url){
				let _this = this;
				url=_this.$base.url +  url;
				uni.downloadFile({
					url: url,
					success: (res) => {
						if (res.statusCode === 200) {
							_this.$utils.msg('下载成功');
							 window.open(url);
						}
					}
				});
			},
			//
			onCartTabTap() {
				this.$utils.tab('../shop-cart/shop-cart')
			},
			// 添加评论
			async onCommentTap() {
				this.$utils.jump(`../discusstongzhigonggao/add-or-update?refid=${this.id}`)
			},
			onSHTap() {
				this.$refs.popup.open()
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
	
	.seat-list {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		background: #FFFFFF;
		margin: 20upx;
		border-radius: 20upx;
		padding: 20upx;
		font-size: 30upx;
		.seat-item {
			width: 33.33%;
			display: flex;
			align-items: center;
			flex-direction: column;
			margin-bottom: 20upx;
	
			.seat-icon {
				width: 50upx;
				height: 50upx;
				margin-bottom: 10upx;
			}
		}
	}
	
	audio {
		display: flex;
		flex-direction: column;
	}
	
	.audio /deep/ .uni-audio-default {
		width: inherit;
	}
</style>

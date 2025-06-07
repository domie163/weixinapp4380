
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
					<view :style='{"display":"flex"}' class="text">
						<view :style='{"lineHeight":"80rpx","fontSize":"48rpx","color":"red","textShadow":"2rpx 4rpx 4rpx #333"}'>￥</view>
						<view :style='{"lineHeight":"80rpx","fontSize":"32rpx","color":"red","textShadow":"2rpx 4rpx 4rpx #333"}'>{{detail.price}}</view>
					</view>
					<view :style='{"cursor":"pointer","boxShadow":"2rpx 2rpx 4rpx #333","color":"#fff","borderRadius":"50%","textAlign":"center","background":"linear-gradient(120deg, #ffaa33 0%, #feedd5 6%, #f60 100%)","display":"block","width":"56rpx","lineHeight":"56rpx","fontSize":"40rpx","height":"56rpx"}' v-if="storeupFlag==1" class="cuIcon-favorfill" @click="shoucang"></view>
					<view :style='{"cursor":"pointer","boxShadow":"2rpx 2rpx 4rpx #333","color":"#fff","borderRadius":"50%","textAlign":"center","background":"linear-gradient(120deg, #ffaa33 0%, #feedd5 6%, #f60 100%)","display":"block","width":"56rpx","lineHeight":"56rpx","fontSize":"40rpx","height":"56rpx"}' v-if="storeupFlag==0" class="cuIcon-favor" @click="shoucang"></view>
				</view>

				<view :style='{"margin":"0 0 24rpx 0","borderColor":"#846cc1","flexWrap":"wrap","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="detail-list-item title">
					<view :style='{"padding":"0 16rpx 0 0","color":"#fff","textAlign":"left","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"600"}' class="lable">图书名称：</view>
					<view :style='{"width":"100%","padding":"0 0 20rpx","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"#dfddef"}' class="text">{{detail.tushumingcheng}}</view>
				</view>
                <view :style='{"margin":"0 0 24rpx 0","borderColor":"#846cc1","flexWrap":"wrap","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="detail-list-item" v-if="count<=0">
                	<view :style='{"padding":"0 16rpx 0 0","color":"#fff","textAlign":"left","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"600"}' class="lable">倒计时：</view>
                	<view :style='{"width":"100%","padding":"0 0 20rpx","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"#dfddef"}' class="text">该活动已结束</view>
                </view>
                <view :style='{"margin":"0 0 24rpx 0","borderColor":"#846cc1","flexWrap":"wrap","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="detail-list-item" v-if="count>0">
                	<view :style='{"padding":"0 16rpx 0 0","color":"#fff","textAlign":"left","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"600"}' class="lable">倒计时：</view>
                	<view :style='{"width":"100%","padding":"0 0 20rpx","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"#dfddef"}' class="text">{{SecondToDate}}</view>
                </view>

				<view class="detail-list-item" :style='{"margin":"0 0 24rpx 0","borderColor":"#846cc1","flexWrap":"wrap","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 16rpx 0 0","color":"#fff","textAlign":"left","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"600"}'>图书编号：</view>
					<view  class="text" :style='{"width":"100%","padding":"0 0 20rpx","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"#dfddef"}'>{{detail.tushubianhao}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 24rpx 0","borderColor":"#846cc1","flexWrap":"wrap","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 16rpx 0 0","color":"#fff","textAlign":"left","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"600"}'>图书类型：</view>
					<view  class="text" :style='{"width":"100%","padding":"0 0 20rpx","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"#dfddef"}'>{{detail.tushuleixing}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 24rpx 0","borderColor":"#846cc1","flexWrap":"wrap","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 16rpx 0 0","color":"#fff","textAlign":"left","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"600"}'>作者：</view>
					<view  class="text" :style='{"width":"100%","padding":"0 0 20rpx","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"#dfddef"}'>{{detail.zuozhe}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 24rpx 0","borderColor":"#846cc1","flexWrap":"wrap","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 16rpx 0 0","color":"#fff","textAlign":"left","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"600"}'>出版社：</view>
					<view  class="text" :style='{"width":"100%","padding":"0 0 20rpx","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"#dfddef"}'>{{detail.chubanshe}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 24rpx 0","borderColor":"#846cc1","flexWrap":"wrap","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 16rpx 0 0","color":"#fff","textAlign":"left","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"600"}'>出版时间：</view>
					<view  class="text" :style='{"width":"100%","padding":"0 0 20rpx","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"#dfddef"}'>{{detail.chubanshijian}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 24rpx 0","borderColor":"#846cc1","flexWrap":"wrap","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 16rpx 0 0","color":"#fff","textAlign":"left","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"600"}'>点击次数：</view>
					<view  class="text" :style='{"width":"100%","padding":"0 0 20rpx","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"#dfddef"}'>{{detail.clicknum}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 24rpx 0","borderColor":"#846cc1","flexWrap":"wrap","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 16rpx 0 0","color":"#fff","textAlign":"left","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"600"}'>起拍价：</view>
					<view  class="text" :style='{"width":"100%","padding":"0 0 20rpx","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"#dfddef"}'>{{detail.startprice}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 24rpx 0","borderColor":"#846cc1","flexWrap":"wrap","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 16rpx 0 0","color":"#fff","textAlign":"left","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"600"}'>加价幅度：</view>
					<view  class="text" :style='{"width":"100%","padding":"0 0 20rpx","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"#dfddef"}'>{{detail.stepprice}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 24rpx 0","borderColor":"#846cc1","flexWrap":"wrap","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 16rpx 0 0","color":"#fff","textAlign":"left","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","fontWeight":"600"}'>一口价：</view>
					<view  class="text" :style='{"width":"100%","padding":"0 0 20rpx","margin":"0px","lineHeight":"48rpx","fontSize":"28rpx","color":"#dfddef"}'>{{detail.endprice}}</view>
				</view>

				<view :style='{"margin":"0 0 24rpx 0","borderColor":"#846cc1","borderWidth":"0 0 2rpx 0","display":"flex","width":"50%","borderStyle":"solid","height":"auto"}' class="detail-list-item" v-if="!thumbsupFlag&&!crazilyFlag">
					<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#fff","textAlign":"right"}' class="lable">赞：</view>
					<view :style='{"width":"100%","flex":"1","justifyContent":"space-between","display":"flex","height":"auto"}'>
						<view :style='{"color":"#dfddef","lineHeight":"80rpx","fontSize":"28rpx"}'>{{detail.thumbsupnum}}</view>
						<view :style='{"cursor":"pointer","boxShadow":"2rpx 2rpx 4rpx #333","color":"#fff","borderRadius":"50%","textAlign":"center","background":"linear-gradient(120deg, #ffaa33 0%, #feedd5 6%, #f60 100%)","width":"56rpx","lineHeight":"56rpx","fontSize":"28rpx","height":"56rpx"}' class="cuIcon-appreciate" @click="zan"></view>
					</view>
				</view>
				<view :style='{"margin":"0 0 24rpx 0","borderColor":"#846cc1","borderWidth":"0 0 2rpx 0","display":"flex","width":"50%","borderStyle":"solid","height":"auto"}' class="detail-list-item" v-if="thumbsupFlag">
					<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#fff","textAlign":"right"}' class="lable">已赞：</view>
					<view :style='{"width":"100%","flex":"1","justifyContent":"space-between","display":"flex","height":"auto"}'>
						<view :style='{"color":"#dfddef","lineHeight":"80rpx","fontSize":"28rpx"}'>{{detail.thumbsupnum}}</view>
						<view :style='{"cursor":"pointer","boxShadow":"2rpx 2rpx 4rpx #333","color":"#fff","borderRadius":"50%","textAlign":"center","background":"linear-gradient(120deg, #ffaa33 0%, #feedd5 6%, #f60 100%)","width":"56rpx","lineHeight":"56rpx","fontSize":"28rpx","height":"56rpx"}' class="cuIcon-appreciate" @click="zan"></view>
					</view>
				</view>
				<view :style='{"margin":"0 0 24rpx 0","borderColor":"#846cc1","borderWidth":"0 0 2rpx 0","display":"flex","width":"50%","borderStyle":"solid","height":"auto"}' class="detail-list-item" v-if="!thumbsupFlag&&!crazilyFlag">
					<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#fff","textAlign":"right"}' class="lable">踩：</view>
					<view :style='{"width":"100%","flex":"1","justifyContent":"space-between","display":"flex","height":"auto"}'>
						<view :style='{"color":"#dfddef","lineHeight":"80rpx","fontSize":"28rpx"}'>{{detail.crazilynum}}</view>
						<view style="transform: rotate(180deg);" :style='{"cursor":"pointer","boxShadow":"2rpx 2rpx 4rpx #333","color":"#fff","borderRadius":"50%","textAlign":"center","background":"linear-gradient(120deg, #ffaa33 0%, #feedd5 6%, #f60 100%)","width":"56rpx","lineHeight":"56rpx","fontSize":"28rpx","height":"56rpx"}' class="cuIcon-appreciate" @click="cai"></view>
					</view>
				</view>
				<view :style='{"margin":"0 0 24rpx 0","borderColor":"#846cc1","borderWidth":"0 0 2rpx 0","display":"flex","width":"50%","borderStyle":"solid","height":"auto"}' class="detail-list-item" v-if="crazilyFlag">
					<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#fff","textAlign":"right"}' class="lable">踩：</view>
					<view :style='{"width":"100%","flex":"1","justifyContent":"space-between","display":"flex","height":"auto"}'>
						<view :style='{"color":"#dfddef","lineHeight":"80rpx","fontSize":"28rpx"}'>{{detail.crazilynum}}</view>
						<view style="transform: rotate(180deg);" :style='{"cursor":"pointer","boxShadow":"2rpx 2rpx 4rpx #333","color":"#fff","borderRadius":"50%","textAlign":"center","background":"linear-gradient(120deg, #ffaa33 0%, #feedd5 6%, #f60 100%)","width":"56rpx","lineHeight":"56rpx","fontSize":"28rpx","height":"56rpx"}' class="cuIcon-appreciate" @click="cai"></view>
					</view>
				</view>




				<view class="detail-list-item rich" :style='{"padding":"0 0 20rpx","margin":"0 0 24rpx 0","borderColor":"#846cc1","flexWrap":"wrap","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx 0 0","color":"#fff","textAlign":"left","width":"100%","lineHeight":"80rpx","fontSize":"28rpx","fontWeight":"600"}'>图书简介</view>
					<view class="rich-text" :style='{"minHeight":"240rpx","width":"100%","padding":"16rpx 24rpx 24rpx 16rpx","margin":"0","color":"#333","background":"#fff"}'>
						<rich-text :nodes="detail.tushujianjie"></rich-text>
					</view>
				</view>
                <view class="priceList">
                    <view class="priceViews" v-for="(item,index) in priceList" :key="index">
                        <view class="priceLeft">
                            <image :src="baseUrl+item.avatarurl" mode="aspectFill"></image>
                            <view class="prices">
                                <view class="userinfo">{{item.nickname}}</view>
                                <view class="auctionprice">￥{{item.auctionprice}}</view>
                            </view>
                        </view>
                        <view class="priceRight">
                            <view class="status" :class="item.auctionstatus=='领先'?'status1':''">
                                {{item.auctionstatus}}
                            </view>
                            <view class="time">{{item.addtime}}</view>
                        </view>
                    </view>
                </view>


				<view class="time-content" :style='{"width":"100%","margin":"0 0 24rpx 0","height":"auto"}'>
					<view class="comoment-header" :style='{"width":"100%","boxShadow":"rgb(0 0 0 / 30%) 0px 0px 0px","margin":"0 0 48rpx 0","borderRadius":"16rpx","background":"none","height":"auto"}'>
						<view :style='{"minHeight":"144rpx","padding":"0 24rpx","margin":"0 0 16rpx","borderColor":"#ccc","color":"#333","borderRadius":"16rpx","background":"#fff","borderWidth":"0 0 10rpx 0","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}'>评论</view>
						<view :style='{"clear":"both","padding":"0px","margin":"24rpx 0 0 0","background":"none","justifyContent":"flex-end","display":"flex"}' @click="onCommentTap" class="btn-comment-content" style="display: flex;align-items: center;">
							<view :style='{"padding":"0 12rpx","margin":"0","color":"#fff","borderRadius":"16rpx 0 0 16rpx","background":"-webkit-linear-gradient(right,#ffbe93,#f60)","lineHeight":"80rpx","fontSize":"28rpx"}' class="cuIcon-add"></view>
							<view :style='{"padding":"0 16rpx 0 8rpx","boxShadow":"rgb(0 0 0 / 30%) 6rpx 2rpx 6rpx","color":"#fff","borderRadius":"0 16rpx 16rpx 0","background":"-webkit-linear-gradient(left,#ffbe93,#f60)","width":"auto","lineHeight":"80rpx","fontSize":"28rpx"}'>添加评论</view>
						</view>
					</view>
				
					<view :style='{"boxShadow":"0 2rpx 12rpx rgb(0 0 0 / 30%)","padding":"24rpx","margin":"24rpx 0 0 0","borderColor":"#ccc","borderRadius":"16rpx","background":"#fff","borderWidth":"0 0 10rpx 0","width":"100%","borderStyle":"solid","height":"auto"}' v-for="(item,index) in commentList" v-bind:key="index" class="cu-item comment-item">
						<view :style='{"width":"100%","display":"flex","height":"auto"}'>
							<image :style='{"width":"60rpx","margin":"0 8rpx 0 0","borderRadius":"100%","display":"block","height":"60rpx"}' v-if="item.avatarurl" mode="aspectFill" :src="baseUrl+item.avatarurl"></image>
							<view :style='{"lineHeight":"60rpx","fontSize":"28rpx","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","color":"#333"}' class="text-grey">{{item.nickname}}</view>
						</view>
						<view :style='{"margin":"8rpx 0","lineHeight":"1.5","fontSize":"28rpx","color":"#666"}' class="text-gray text-content text-df">
							{{item.content}}
						</view>
						<view :style='{"color":"#999","lineHeight":"24rpx","fontSize":"24rpx"}' class="margin-top-sm text-gray text-df">{{item.addtime}}</view>
						<view v-if="item.reply" :style='{"margin":"8rpx 0","lineHeight":"1.5","fontSize":"28rpx","color":"#666"}' class="text-gray text-content text-df">
							回复:{{item.reply}}
						</view>
					</view>
				</view>

				<view class="bottom-content bg-white tabbar border shop" :style='{"width":"100%","padding":"10rpx 24rpx","flexWrap":"wrap","background":"none","display":"flex","height":"auto"}'>

					<button v-if="auctionBuyFlag && count<=0" :style='{"border":"0","padding":"0 20rpx","margin":"0","color":"rgb(255, 255, 255)","background":"rgb(255, 170, 51)","width":"auto","fontSize":"28rpx","height":"80rpx"}' @tap="onBuyTap">竞拍成功,立即付款</button>
                    <button v-if="count>0" :style='{"border":"0","padding":"0 20rpx","margin":"0","color":"rgb(255, 255, 255)","background":"rgb(255, 170, 51)","width":"auto","fontSize":"28rpx","height":"80rpx"}' @tap="goOffer">出个价</button>
                    <button v-if="!auctionBuyFlag && count<=0" :style='{"border":"0","padding":"0 20rpx","margin":"0","color":"rgb(255, 255, 255)","background":"rgb(255, 170, 51)","width":"auto","fontSize":"28rpx","height":"80rpx"}'>{{detail.reversetime}}竞拍结束</button>
				</view>
			</view>

		</view>
	</view>
</mescroll-uni>
<view class="priceView" v-if="priceVisible">
    <view class="priceBG" @click="priceVisible = false"></view>
    <view class="priceBox">
        <view style="height: 80upx;">
            当前价格：￥{{priceForm.nowPrice}}
        </view>
        <view style="display: flex;align-items: center;">
            <span style="width: 30%;">我的出价：￥</span><input 
                style="width: 70%;height: 80upx;padding: 0 10upx;box-sizing: border-box;font-size: 26upx;"
                placeholder="请出价" type="digit" v-model="priceForm.auctionprice" />
        </view>
        <view class="btn-content">
            <button @tap="priceSave" class="cu-btn bg-red" style="width: 100%;margin-top: 20upx;">确认</button>
        </view>
    </view>
</view>
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
				thumbsupFlag: 0,
				crazilyFlag: 0,
                priceForm: {},
                priceVisible: false,
                priceList: [],
                auctionBuyFlag: false,
				count: 0,
				timer: null
			}
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
			SecondToDate: function() {
				var time = this.count;
				if (null != time && "" != time) {
					if (time > 60 && time < 60 * 60) {
						time =
							parseInt(time / 60.0) +
							"分钟" +
							parseInt((parseFloat(time / 60.0) - parseInt(time / 60.0)) * 60) +
							"秒";
					} else if (time >= 60 * 60 && time < 60 * 60 * 24) {
						time =
							parseInt(time / 3600.0) +
							"小时" +
							parseInt(
								(parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
							) +
							"分钟" +
							parseInt(
								(parseFloat(
										(parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
									) -
									parseInt(
										(parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
									)) *
								60
							) +
							"秒";
					} else if (time >= 60 * 60 * 24) {
						time =
							parseInt(time / 3600.0 / 24) +
							"天" +
							parseInt(
								(parseFloat(time / 3600.0 / 24) - parseInt(time / 3600.0 / 24)) *
								24
							) +
							"小时" +
							parseInt(
								(parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
							) +
							"分钟" +
							parseInt(
								(parseFloat(
										(parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
									) -
									parseInt(
										(parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
									)) *
								60
							) +
							"秒";
					} else {
						time = parseInt(time) + "秒";
					}
				}
				return time;
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
			this.getThumbsup();
			let cleanType = uni.getStorageSync('discussershoushujiCleanType')
			if(cleanType){
				uni.removeStorageSync('discussershoushujiCleanType')
				this.mescroll.num = 1
				this.upCallback(this.mescroll)
			}
		},
		destroyed: function() {
			//window.clearInterval(this.inter);
		},
		methods: {
			// 支付
			onPayTap(){
				uni.setStorageSync('paytable','ershoushuji');
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
					tablename : 'ershoushuji',
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
					tablename : 'ershoushuji',
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
								name: _this.detail.tushumingcheng,
								picture: _this.swiperList[0],
								refid: _this.detail.id,
								tablename: 'ershoushuji',
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
				uni.setStorageSync('crossTable','ershoushuji');
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
				let res = await this.$api.info('ershoushuji', this.id);
				this.detail = res.data;
				// 轮播图片
				this.swiperList = this.detail.tupian ? this.detail.tupian.split(",") : [];
				//修改富文本的图片样式
				this.detail.tushujianjie = this.detail.tushujianjie.replace(/img src/gi,"img style=\"width:100%;\" src");
				let reversetime = new Date(this.detail.reversetime).getTime()
				let now = new Date().getTime();
				console.log(reversetime)
				console.log(now)
				let count = reversetime - now;
				console.log(count)
				if (count > 0) {
					this.count = count / 1000
					var _this = this;
					this.timer = setInterval( () => {
					    _this.count = _this.count - 1;
					    if (_this.count < 0) {
						clearTimeout(this.timer);
						this.timer = null;
					    	uni.showModal({
					    		title: '活动结束',
					    		content: '该活动已结束',
					    		showCancel: false,
					    		success: async function(res) {}
					    	});
					    }
					}, 1000);
				}
				console.log(this.count)
                this.getPriceList()
                if(uni.getStorageSync("userid")) {
                    let params = {
                        page: 1,
                        limit: 1,
                        refid : this.detail.id,
                        userid: uni.getStorageSync("userid"),
                        sort: 'addtime',
                        order: 'desc'
                    }
                    let res = await this.$api.list(`auctionershoushuji`, params);
                    if(res.code == 0 && res.data.list.length == 1 && res.data.list[0].auctionstatus=='领先') {
                        params = {
                            limit : 1,
                            userid: uni.getStorageSync("userid"),
                            goodid: this.detail.id
                        }
                        res = await this.$api.list(`orders`, params);
                        if (res.code == 0 && res.data.list.length == 0) {
                          this.auctionBuyFlag = true;
                        }
                    }
                }
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
                let res = await this.$api.list('discussershoushuji', {
					page: mescroll.num,
					limit: 10,
					refid: this.id
				});
				// 如果是第一页数据置空
				if (mescroll.num == 1) this.commentList = [];
				this.commentList = this.commentList.concat(res.data.list);
				if (res.data.list.length == 0) this.hasNext = false;
				mescroll.endSuccess(mescroll.size, this.hasNext);

            },

            onBuyTap() {
				if(!this.auctionBuyFlag && this.count <= 0) {
					this.$utils.msg('活动已结束')
					return
				}
				uni.setStorageSync('orderGoods', [{
					tablename: 'ershoushuji',
					goodid: this.detail.id,
					goodname: this.detail.tushumingcheng,
					picture: this.swiperList[0],
					buynumber: 1,
					price: this.detail.price,
					discountprice: this.detail.vipprice
				}])
				this.$utils.jump('../shop-order-confirm/shop-order-confirm?type=1');
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
                let params = {
                    page: 1,
                    limit: 1,
					status: '已完成',
					goodid: this.detail.id
                }
                let res = await this.$api.page('orders', params);
                if (res.data.list.length == 0) {
                this.$utils.msg('请完成订单后再评论');
					return;
				}
				this.$utils.jump(`../discussershoushuji/add-or-update?refid=${this.id}`)
			},
			// 获取赞踩
			async getThumbsup() {
				let params = {
					page: 1,
					limit: 1,
					refid: this.id,
					tablename: 'ershoushuji',
					userid: this.user.id,
					type: '%2%',
				}
				let res = await this.$api.list(`storeup`, params);
				if (res.data.list.length > 0) {
					if(res.data.list[0].type=='21') {
						this.thumbsupFlag = 1;
					} else {
						this.crazilyFlag = 1;
					}
				}

			},
			// 点赞
			async zan() {
				let _this = this;
				let params = {
					page: 1,
					limit: 1,
					refid: _this.detail.id,
					tablename : 'ershoushuji',
					userid: _this.user.id,
					type: '%2%',
				}
				let res = await _this.$api.list(`storeup`, params);
				if (res.data.list.length > 0) {
					let storeupId = res.data.list[0].id;
					uni.showModal({
						title: '提示',
						content: '是否取消点赞',
						success: async function(res) {
							if (res.confirm) {
								await _this.$api.del('storeup', JSON.stringify([storeupId]));
								_this.detail.thumbsupnum = parseInt(_this.detail.thumbsupnum) - 1;
								await _this.$api.update('ershoushuji', _this.detail);
								_this.$utils.msg('取消成功');
								_this.thumbsupFlag=0;
							}
						}
					});
					return;
				}
				uni.showModal({
					title: '提示',
					content: '是否点赞',
					success: async function(res) {
						if (res.confirm) {
							await _this.$api.add('storeup', {
								userid: _this.user.id,
                                name: _this.detail.tushumingcheng,
								picture: _this.swiperList[0],
								refid: _this.detail.id,
								tablename: 'ershoushuji',
								type: '21'
							});
							_this.detail.thumbsupnum = parseInt(_this.detail.thumbsupnum) + 1;
							await _this.$api.update('ershoushuji', _this.detail);
							_this.$utils.msg('点赞成功');
							_this.thumbsupFlag=1;
						}
					}
				});
			},
			// 踩
			async cai() {
				let _this = this;
				let params = {
					page: 1,
					limit: 1,
					refid: _this.detail.id,
					tablename: 'ershoushuji',
					userid: _this.user.id,
					type: '%2%',
				}
				let res = await _this.$api.list(`storeup`, params);
				if (res.data.list.length > 0) {
					let storeupId = res.data.list[0].id;
					uni.showModal({
						title: '提示',
						content: '是否取消点踩',
						success: async function(res) {
							if (res.confirm) {
								await _this.$api.del('storeup', JSON.stringify([storeupId]));
								_this.detail.crazilynum = parseInt(_this.detail.crazilynum) - 1;
								await _this.$api.update('ershoushuji', _this.detail);
								_this.$utils.msg('取消成功');
								_this.crazilyFlag=0;
							}
						}
					});
					return;
				}
				uni.showModal({
					title: '提示',
					content: '是否点踩',
					success: async function(res) {
						if (res.confirm) {
							await _this.$api.add('storeup', {
								userid: _this.user.id,
                                name: _this.detail.tushumingcheng,
								picture: _this.swiperList[0],
								refid: _this.detail.id,
								tablename: 'ershoushuji',
								type: '22'
							});
							_this.detail.crazilynum = parseInt(_this.detail.crazilynum) + 1;
							await _this.$api.update('ershoushuji', _this.detail);
							_this.$utils.msg('点踩成功');
							_this.crazilyFlag=1;
						}
					}
				});
			},
			onSHTap() {
				this.$refs.popup.open()
			},
            goOffer() {
                if(this.count <= 0) {
                    this.$utils.msg('竞拍活动已经结束');
                    return;
                }
                //如果当前出价等于一口价，竞拍结束
                if(this.detail.endprice>0 && this.detail.price>=this.detail.endprice) {
                    this.$utils.msg('该商品已被一口价拍下');
                    return;
                }
                this.priceForm = {
                    minPrice: this.detail.price + this.detail.stepprice,
                    auctionprice: this.detail.price + this.detail.stepprice,
                    nowPrice: this.detail.price,
                    maxPrice: this.detail.endprice,
                    refid: this.detail.id,
                    userid: uni.getStorageSync("userid"),
                    auctionstatus: '领先',
                    nickname: uni.getStorageSync("nickname"),
                    avatarurl: uni.getStorageSync('headportrait')?uni.getStorageSync('headportrait'):''
                }
                this.priceVisible = true
            },
            async getPriceList() {
                let res = await this.$api.list('auctionershoushuji', {
                    refid: this.detail.id,
                    order: 'desc',
                    sort: 'addtime'
                })
                this.priceList = res.data.list
            },
            async priceSave() {
                if (Number(this.priceForm.auctionprice) > Number(this.detail.endprice)) {
                    this.$utils.msg('超过一口价');
                    return;
                }
                if (this.priceForm.auctionprice < this.detail.price + this.detail.stepprice) {
                    this.$utils.msg('不能低于当前竞价+加价幅度');
                    return;
                }
                let res = await this.$api.add('auctionershoushuji', this.priceForm);
                if (res.code == 0) {
                    this.$utils.msg('出价成功');
                    this.detail.price = this.priceForm.auctionprice
                    res = await this.$api.update('ershoushuji', this.detail);
                    this.priceVisible = false
                    this.init()
                }
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
    .priceList {
        width: 100%;
        background: #f5f5f5;
    
        .priceViews {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16upx;
            border-bottom: 2upx solid #ddd;
    
            .priceLeft {
                display: flex;
                align-items: center;
    
                image {
                    font-size: 0;
                    width: 100upx;
                    height: 100upx;
                    border-radius: 20upx;
                }
    
                .prices {
                    height: 100upx;
                    padding-left: 10upx;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
    
                    .userinfo {
                        color: rgba(151, 161, 212, 1.0);
                        font-weight: bold;
                        font-size: 32upx;
                    }
    
                    .auctionprice {
                        color: #ff0000;
                        font-size: 28upx;
                        font-weight: bold;
                    }
                }
            }
    
            .priceRight {
                height: 100upx;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                justify-content: space-between;
    
                .status {
                    padding: 4upx 8upx;
                    color: #b7b7b7;
                    border: 4upx solid #b7b7b7;
                    font-size: 32upx;
                    font-weight: bold;
                }
    
                .status1 {
                    color: #e5482b;
                    border: 4upx solid #e5482b;
                }
    
                .time {
                    font-size: 24upx;
                    color: #999;
                }
            }
        }
    
        .priceViews:last-of-type {
            border-bottom: none;
        }
    }
    
    .priceView {
        .priceBG {
            position: fixed;
            width: 100%;
            height: 1500px;
            background: rgba(0, 0, 0, .3);
            left: 0;
            top: 0;
            z-index: 998;
        }
    
        .priceBox {
            position: fixed;
            width: 100%;
            background: #fff;
            padding: 32upx 24upx;
            box-sizing: border-box;
            left: 0;
            bottom: 0;
            z-index: 999;
            border-radius: 20upx 20upx 0 0;
    
            input {
                background: #f5f5f5;
            }
        }
    }
</style>

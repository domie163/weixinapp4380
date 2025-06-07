<template>
<view class="content">
	<view :style='{"minHeight":"100vh","width":"100%","padding":"0px 0px 24rpx 0px","position":"relative","background":"url(http://codegen.caihongy.cn/20221021/ae428fdc305b447f9c5f678cb644ddf9.jpg) no-repeat center top / 100% 100%,#3e4cc6","height":"auto"}'>
		<swiper :style='{"width":"100%","background":"#fff","height":"360rpx"}' class="swiper" :indicator-dots='false' :autoplay='true' :circular='false' indicator-active-color='#000000' indicator-color='rgba(0, 0, 0, .3)' :duration='500' :interval='3000' :vertical='false'>
			<swiper-item :style='{"width":"100%","background":"#fff","height":"360rpx"}' v-for="(swiper,index) in swiperList" :key="index" @tap="onSwiperTap(swiper)">
				<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"360rpx"}' mode="aspectFill" :src="baseUrl+swiper.img"></image>
				<view v-if="false" :style='{"width":"100%","padding":"0 8rpx","lineHeight":"60rpx","fontSize":"28rpx","color":"#333","background":"#fff"}'>{{ swiper.title }}</view>
			</swiper-item>
		</swiper>

		<view class="cu-bar bg-white search" :style="[{top:CustomBar + 'px'}]">
			<picker v-if="queryList.length>1" mode="selector" :range="queryList" range-key="queryName" :value="queryIndex" @change="queryChange" style="padding-left: 20upx;">
				<view><image style="width: 20upx;height: 33upx;" src="../../static/center/to.png"></image></view>
			</picker>
			<view v-if="queryIndex==0" class="search-form round">
				<text class="cuIcon-search"></text>
				<input v-model="searchForm.ershoushujitushumingcheng" type="text" placeholder="图书名称" ></input>
			</view>
			<view v-if="queryIndex==0" class="action">
				<button @tap="onPageTap('ershoushuji')" class="cu-btn shadow-blur round">搜索</button>
			</view>
		</view>

		<!-- menu -->
		<view v-if="true" class="menu" :style='{"padding":"0","boxShadow":"4rpx 6rpx 8rpx #333","margin":"24rpx","borderRadius":"16rpx","flexWrap":"wrap","background":"#f7f7f7","display":"flex","width":"calc(100% - 48rpx)","justifyContent":"space-around","height":"auto"}'>
            <block v-for="item in menuList" v-bind:key="item.roleName">
                <block v-if="role==item.roleName" v-bind:key="index" v-for=" (menu,index) in item.frontMenu">
                    <block v-bind:key="sort" v-for=" (child,sort) in menu.child">
                        <block v-bind:key="sort2" v-for=" (button,sort2) in child.buttons">
                            <view :style='{"width":"23%","padding":"12rpx 0","margin":"10rpx 0","height":"auto"}' class="menu-list" v-if="button=='查看' && child.tableName!='yifahuodingdan' && child.tableName!='yituikuandingdan' &&child.tableName!='yiquxiaodingdan' && child.tableName!='weizhifudingdan' && child.tableName!='yizhifudingdan' && child.tableName!='yiwanchengdingdan' " @tap="onPageTap2('../'+child.tableName+'/list')">
                                <view class="iconarr" :class="child.appFrontIcon" :style='{"padding":"0","margin":"0px auto","color":"#333","borderRadius":"100%","background":"#fff","display":"block","width":"64rpx","lineHeight":"64rpx","fontSize":"64rpx","height":"64rpx"}'></view>
                                <view :style='{"padding":"0","margin":"12rpx auto 0","color":"#333","textAlign":"center","width":"100%","lineHeight":"28rpx","fontSize":"28rpx"}'>{{child.menu.split("列表")[0]}}</view>
                            </view>
                        </block>
                    </block>
                </block>
            </block>
		</view>
		<!-- menu -->
		
		

		<!-- 商品推荐 -->
		<view class="listBox recommend">
			<view v-if="false && 1 == 1" class="idea recommendIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
			<view class="title" :style='{"padding":"0 24rpx","boxShadow":"2rpx 6rpx 8rpx #80581f","margin":"0","borderColor":"#ffaa33","borderRadius":"0","background":"linear-gradient(120deg, #ffaa33 0%, #feedd5 56%, #ffaa33 100%)","borderWidth":"0px 0px 2rpx 0","width":"100%","borderStyle":"solid"}'>
				<view :style='{"padding":"0 16rpx 0 0","fontSize":"32rpx","lineHeight":"88rpx","color":"#fff","textAlign":"left"}'>二手书籍推荐</view>
			</view>
			
			<view v-if="false && 1 == 2" class="idea recommendIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
			
			<!-- 样式2 -->
			<view class="list-box style2" :style='{"padding":"24rpx","margin":"16rpx 0 0 0","flexWrap":"wrap","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
				<view @tap="onDetailTap('ershoushuji',product.id)" v-for="(product,index) in ershoushujilist" :key="index" class="list-item" :style='{"boxShadow":"0 2rpx 12rpx rgba(0,0,0,.3)","margin":"0 0 32rpx","backgroundColor":"#fff","borderColor":"#ccc","borderRadius":"16rpx","borderWidth":"0 0 10rpx 0","width":"31%","borderStyle":"solid","height":"auto"}'>
					<view :style='{"width":"100%","padding":"4rpx 20rpx","lineHeight":"1.4","fontSize":"28rpx","color":"#333"}' class="list-item-title ">{{product.tushumingcheng}}</view>
					<image :style='{"width":"100%","padding":"0","margin":"0","objectFit":"cover","display":"block","height":"300rpx"}' class="list-item-image" mode="aspectFill" v-if="product.tupian.substring(0,4)=='http'" :src="product.tupian"></image>
					<image :style='{"width":"100%","padding":"0","margin":"0","objectFit":"cover","display":"block","height":"300rpx"}' class="list-item-image" mode="aspectFill" v-else :src="product.tupian?baseUrl+product.tupian.split(',')[0]:''"></image>
					<view :style='{"padding":"4rpx 20rpx","color":"red","textAlign":"right","width":"100%","lineHeight":"1.2","fontSize":"28rpx","fontWeight":"700"}' class="list-item-pirce">￥{{product.price}}</view>
				</view>
			</view>
			
			
			  
			
			
			  
			
			  
			<view v-if="false && 1 == 3" class="idea recommendIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		</view>
		<!-- 商品推荐 -->
		
		

		<!-- 商品列表 -->
																		<view class="listBox list">
			<view v-if="false && 1 == 1" class="idea listIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		  
			<view class="title" :style='{"padding":"0 24rpx","boxShadow":"2rpx 6rpx 8rpx #80581f","margin":"0","borderColor":"#ffaa33","background":"linear-gradient(120deg, #ffaa33 0%, #feedd5 56%, #ffaa33 100%)","borderWidth":"0px 0px 2rpx 0px","display":"flex","width":"100%","borderStyle":"solid","justifyContent":"space-between"}'>
				<view :style='{"color":"#fff","fontSize":"32rpx","lineHeight":"88rpx"}'>通知公告</view>
				<text :style='{"color":"#fff","fontSize":"32rpx","lineHeight":"88rpx"}' @tap="onPageTap('tongzhigonggao')">查看更多</text>
			</view>
			
			<view v-if="false && 1 == 2" class="idea listIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
		  		  <!-- 样式1 -->
		  <view class="list-box style1" :style='{"padding":"24rpx","margin":"16rpx 0 0 0","flexWrap":"wrap","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
			<view @tap="onDetailTap('tongzhigonggao',product.id)" v-for="(product,index) in hometongzhigonggaolist" :key="index" class="list-item" :style='{"boxShadow":"2rpx 2rpx 8rpx rgba(188,188,188,.5)","margin":"0 0 32rpx","backgroundColor":"#fff","borderColor":"#ccc","borderRadius":"16rpx","borderWidth":"0 0 10rpx 0","width":"48%","borderStyle":"solid","height":"auto"}'>
			                			  <view :style='{"padding":"4rpx 20rpx","overflow":"hidden","whiteSpace":"nowrap","color":"#333","width":"100%","lineHeight":"1.4","fontSize":"28rpx","textOverflow":"ellipsis"}' class="list-item-title ">{{product.biaoti}}</view>
			  			  			  			                			  			  			                			  			  			                			  			  			                			  			  <image :style='{"width":"100%","padding":"0","margin":"0","objectFit":"cover","display":"block","height":"300rpx"}' class="list-item-image" mode="aspectFill" v-if="product.tupian.substring(0,4)=='http'" :src="product.tupian"></image>
			  <image :style='{"width":"100%","padding":"0","margin":"0","objectFit":"cover","display":"block","height":"300rpx"}' class="list-item-image" mode="aspectFill" v-else :src="product.tupian?baseUrl+product.tupian.split(',')[0]:''"></image>
			  			  			  			</view>
		  </view>
		  		  
		  		  
		  		  
		  		  
		  		  
		  		  
		  		  
		  		  
		  		  
			<view v-if="false && 1 == 3" class="idea listIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		</view>
																																						<!-- 商品列表 -->
		
		
		<!-- 新闻资讯 -->
																																						<view class="listBox news">
			<view v-if="false && 1 == 1" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
			<view class="title" :style='{"padding":"0 24rpx","boxShadow":"2rpx 6rpx 8rpx #80581f","margin":"0 0 16rpx 0","borderColor":"#ffaa33","background":"linear-gradient(120deg, #ffaa33 0%, #feedd5 56%, #ffaa33 100%)","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","justifyContent":"space-between"}'>
				<view :style='{"color":"#fff","fontSize":"32rpx","lineHeight":"88rpx"}'>图书资讯</view>
				<text :style='{"color":"#fff","fontSize":"32rpx","lineHeight":"88rpx"}' @tap="onPageTap('news')">查看更多</text>
			</view>
			
			<view v-if="false && 1 == 2" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
					  
						
						
		  <!-- 样式4 -->
		  		  
		  <!-- 样式5 -->
		  		  <view class="news-box2" :style='{"width":"100%","padding":"24rpx","margin":"0","height":"auto"}'>
			<block v-for="(item,index) in news" :key="index">
			  <view @tap="onNewsDetailTap(item.id)" v-if="index==0" class="list-item" :style='{"width":"100%","padding":"0","margin":"0 0 20rpx","position":"relative","height":"auto"}'>
				<image :style='{"width":"100%","objectFit":"cover","borderRadius":"16rpx","display":"block","height":"328rpx"}' mode="aspectFill" class="listmpic" :src="baseUrl+item.picture"></image>
				<view :style='{"padding":"0 20rpx","margin":"0","backgroundColor":"rgba(0,0,0,.3)","whiteSpace":"nowrap","color":"#fff","textAlign":"center","bottom":"0","overflow":"hidden","borderRadius":"0 0 16rpx 16rpx","left":"0","width":"100%","lineHeight":"64rpx","fontSize":"28rpx","position":"absolute","textOverflow":"ellipsis","zIndex":"1"}' class="title ">{{item.title}}</view>
			  </view>
			  <view @tap="onNewsDetailTap(item.id)" v-if="index>0" class="list-item" :style='{"padding":"0 24rpx","margin":"0 0 8rpx 0","borderColor":"#ccc","borderRadius":"16rpx","background":"#fff","borderWidth":"0 0 10rpx 0","width":"100%","borderStyle":"solid","height":"auto"}'>
				<view :style='{"borderColor":"#ccc","overflow":"hidden","whiteSpace":"nowrap","color":"#333","borderWidth":"0 0 0px 0","width":"100%","lineHeight":"88rpx","fontSize":"28rpx","textOverflow":"ellipsis","borderStyle":"solid"}' class="title ">{{item.title}}</view>
			  </view>
			</block>
		  </view>
		  		  
		  <!-- 样式6 -->
		  		  
		  <!-- 样式7 -->
		  		  
		  <!-- 样式8 -->
		  		  
		  <!-- 样式9 -->
		  			
			<view v-if="false && 1 == 3" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		</view>
																		<!-- 新闻资讯 -->
				
		<!-- 系统简介 -->
		<view :style='{"padding":"24rpx","boxShadow":"4rpx 6rpx 8rpx #333","margin":"16rpx 24rpx 48rpx 24rpx","borderColor":"#ccc","display":"flex","borderRadius":"16rpx","flexWrap":"wrap","background":"#fff","borderWidth":"0 0 10rpx 0","width":"calc(100% - 48rpx)","position":"relative","borderStyle":"solid","height":"auto"}'>
		  <view :style='{"width":"100%","lineHeight":"1.5","fontSize":"48rpx","color":"#333","textAlign":"center","fontWeight":"bold"}'>{{systemIntroductionDetail.title}}</view>
		  <view :style='{"padding":"0 0 0 16rpx","margin":"0 0 20rpx 0","color":"#999","textAlign":"center","width":"100%","lineHeight":"1.5","fontSize":"28rpx"}'>{{systemIntroductionDetail.subtitle}}</view>
		  <view :style='{"width":"100%","margin":"8rpx 0 0 0","flexWrap":"wrap","display":"flex","height":"auto"}'>
		    <img :style='{"margin":"48rpx 0 0 0","objectFit":"cover","borderRadius":"16rpx","flex":"1","display":"block","width":"30%","height":"240rpx"}' v-if="systemIntroductionDetail.picture1" :src="baseUrl+systemIntroductionDetail.picture1">
		    <img :style='{"margin":"0 10rpx","objectFit":"cover","borderRadius":"16rpx","flex":"1","display":"block","width":"30%","height":"240rpx"}' v-if="systemIntroductionDetail.picture2" :src="baseUrl+systemIntroductionDetail.picture2">
		    <img :style='{"width":"30%","margin":"48rpx 0 0 0","objectFit":"cover","borderRadius":"16rpx","flex":"1","height":"240rpx"}' v-if="systemIntroductionDetail.picture3" :src="baseUrl+systemIntroductionDetail.picture3">
		  </view>
		  <view :style='{"width":"100%","padding":"0","margin":"8rpx 0 20rpx 0","lineHeight":"2","fontSize":"28rpx","color":"rgb(102, 102, 102)"}' v-html="systemIntroductionDetail.content"></view>
		  <view :style='{"width":"50%","display":"none","height":"160rpx"}' />
		  <view :style='{"width":"50%","display":"none","height":"160rpx"}' />
		</view>

	</view>
</view>
</template>

<script>
    import menu from '@/utils/menu'
	import '@/assets/css/global-restaurant.css'
	import uniIcons from "@/components/uni-ui/lib/uni-icons/uni-icons.vue"
	export default {
		components: {
			uniIcons
		},
		data() {
			return {
				options2: {
					effect: 'flip',
					loop : true
				},
				options3: {
					effect: 'cube',
					loop : true,
					cubeEffect: {
						shadow: true,
						slideShadows: true,
						shadowOffset: 20,
						shadowScale: 0.94,
					}
				},
				rows: 2,
				column: 4,
				iconArr: [
				  'cuIcon-same',
				  'cuIcon-deliver',
				  'cuIcon-evaluate',
				  'cuIcon-shop',
				  'cuIcon-ticket',
				  'cuIcon-cascades',
				  'cuIcon-discover',
				  'cuIcon-question',
				  'cuIcon-pic',
				  'cuIcon-filter',
				  'cuIcon-footprint',
				  'cuIcon-pulldown',
				  'cuIcon-pullup',
				  'cuIcon-moreandroid',
				  'cuIcon-refund',
				  'cuIcon-qrcode',
				  'cuIcon-remind',
				  'cuIcon-profile',
				  'cuIcon-home',
				  'cuIcon-message',
				  'cuIcon-link',
				  'cuIcon-lock',
				  'cuIcon-unlock',
				  'cuIcon-vip',
				  'cuIcon-weibo',
				  'cuIcon-activity',
				  'cuIcon-friendadd',
				  'cuIcon-friendfamous',
				  'cuIcon-friend',
				  'cuIcon-goods',
				  'cuIcon-selection'
				],
                role : '',
                systemIntroductionDetail: {},
                menuList: [],
                swiperMenuList:[],
                user: {},
                tableName:'',
				btnColor: ['#409eff','#67c23a','#909399','#e6a23c','#f56c6c','#356c6c','#351c6c','#f093a9','#a7c23a','#104eff','#10441f','#a21233','#503319'],
				queryList:[
					{
						queryName:"图书名称",
					},
				],
				queryIndex: 0,
				searchForm:{
					ershoushujitushumingcheng:'',
				},
				CustomBar: '0',

				//轮播
				swiperList: [],
				ershoushujilist: [],
				hometongzhigonggaolist: [],
				news: [],
			}
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
        async onLoad(){
            this.role = uni.getStorageSync("role");
            let table = uni.getStorageSync("nowTable");
            let res = await this.$api.session(table);
            this.user = res.data;
            this.tableName = table;
            let menus = menu.list();
            this.menuList = menus;
            this.menuList.forEach((item,key) => {
                if(this.role==item.roleName) {
                    item.frontMenu.forEach((item2,key2) => {
                        if(item2.child[0].buttons.indexOf("查看")>-1) {
                            this.swiperMenuList.push(item2);
                        }
                    })
                }
            })
        },
		async onShow() {
            this.btnColor = this.btnColor.sort(()=> {
                    return (0.5-Math.random());
            });
			// 轮播图
			let swiperList = []
			let res = await this.$api.page('config', {
				page: 1,
				limit: 5
			});
			for (let item of res.data.list) {
				if (item.name.indexOf('picture') >= 0 && item.value && item.value!="" && item.value!=null ) {
					swiperList.push({
						img: item.value,
                        title: item.name
					});
				}
			}
			if (swiperList) {
				this.swiperList = swiperList;
			}
            this.getSystemIntroduction();
			// 图书资讯
			res = await this.$api.list('news', {
				page: 1,
				limit: 6
			});
			this.news = res.data.list

			// 推荐信息
			res = await this.$api.recommend('ershoushuji', {                                              
                page: 1,
                limit: 6
            });
			this.ershoushujilist = res.data.list

			res = await this.$api.list('tongzhigonggao', {
				page: 1,

				limit: 4
			});
			this.hometongzhigonggaolist = res.data.list
		},

		methods: {

			//查询条件切换
			queryChange(e) {
				this.queryIndex=e.detail.value;
				this.searchForm.ershoushujitushumingcheng="";
			},
			//轮播图跳转
			onSwiperTap(e) {

			},
            async getSystemIntroduction() {
                let res = await this.$api.info('systemintro', 1)
                this.systemIntroductionDetail = res.data;
            },
			// 新闻详情
			onNewsDetailTap(id) {
				this.$utils.jump(`../news-detail/news-detail?id=${id}`)
			},
			// 推荐列表点击详情
			onDetailTap(tableName, id) {
				this.$utils.jump(`../${tableName}/detail?id=${id}`)
			},
			onPageTap(tableName){
				if(this.queryIndex==0) {
					uni.setStorageSync('indexQueryCondition',this.searchForm.ershoushujitushumingcheng);
					this.searchForm.ershoushujitushumingcheng = '';
				}

				uni.navigateTo({
					url: `../${tableName}/list`,
					fail: function(){
						uni.switchTab({
							url: `../${tableName}/list`
						});
					}
				});
				// this.$utils.jump(`../${tableName}/list`)
			},
            onPageTap2(url) {
                uni.setStorageSync("useridTag",0);
                uni.navigateTo({
                    url: url,
                    fail: function() {
                        uni.switchTab({
                            url: url
                        });
                    }
                });
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

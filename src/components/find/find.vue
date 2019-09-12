<template>
	<div class="hello">
		<muiHeader></muiHeader>
		<div class="mui-content">
			<div class="mui-slider">
				<div class="mui-slider-group mui-slider-loop">
					<!--支持循环，需要重复图片节点-->
					<div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img :src="sliderImages[sliderImages.length-1]" /></a></div>
					<div class="mui-slider-item" v-for="(item,index) in sliderImages" :key="index"><a href="#"><img :src="item" /></a></div>
					<!--支持循环，需要重复图片节点-->
					<div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img :src="sliderImages[0]" /></a></div>
				</div>
			</div>
			<div class="" style="background-color:#fff">
				<h5 style="background-color:#efeff4">热门歌单</h5>
				<ul class="mui-table-view mui-grid-view">
					<li class="mui-table-view-cell mui-media mui-col-xs-4" v-for="(item,index) in recommendDiscList" :key="index">
						<a href="#">
							<img class="mui-media-object" :src="item.imgurl">
							<div class="mui-media-body">{{item.dissname}}</div>
						</a>
					</li>
				</ul>
			</div>


		</div>
		<muiNav></muiNav>
	</div>
</template>

<script>
	import muiHeader from 'components/common/mui-header.vue';
	import muiNav from 'components/common/mui-nav.vue';
	import axios from 'axios'

	import APIKit from '../../api/index.js'

	export default {
		name: 'HelloWorld',
		data() {
			return {
				sliderImages: ['static/images/1.jpg', 'static/images/2.jpg', 'static/images/3.jpg', 'static/images/4.jpg'],
				recommendDiscList: []
			}
		},
		components: {
			muiHeader,
			muiNav
		},
		mounted: function() {
			let vm = this;
			var gallery = vm.mui('.mui-slider');
			gallery.slider({
				interval: 2000 //自动轮播周期，若为0则不自动播放，默认为0；
			});
			vm.getSliderList();
			vm.getRecommendDisc();
		},

		methods: {
			getSliderList: function() {
				let vm = this;
				APIKit.api.getSliderList().then(function(res) {
					if (res) {
						let picUrl = [];
						for (let i in res.data.slider) {
							picUrl.push(res.data.slider[i].picUrl)
						}
						vm.sliderImages = picUrl;
					}
				});
			},
			getRecommendDisc: async function() {
				let vm = this;
				let result = await axios.get('/recommendDisc');
				if (result && result.data.data) {
					vm.recommendDiscList = result.data.data.list
				}
			},
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.mui-content {
		margin-top: 44px;
		margin-bottom: 60px;
	}
</style>

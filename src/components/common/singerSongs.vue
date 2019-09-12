<template>
	<div class="hello">
		<header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">标题</h1>
		</header>
		<div class="mui-content">

			<div>
				<audio id="audio1" controls="controls" :src="songUrl">
				</audio>
			</div>
			
			<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media mui-col-xs-12" v-for="(item,index) in singerSongs" :key="index">
					<a href="javascript:;" :id="item.mid" @click="playSongs(item.mid)">
						<div class="mui-media-body">
							{{item.name}}-{{item.singer[0].name}}
						</div>
					</a>
				</li>
			</ul>


			<!-- <div class="mui-text-center" style="margin-top: 3px;">加载更多</div> -->
		</div>
		<muiNav></muiNav>
	</div>
</template>

<script>
	import muiHeader from 'components/common/mui-header.vue';
	import muiNav from 'components/common/mui-nav.vue';
	import APIKit from '../../api/index.js'
	import axios from 'axios';

	export default {
		data() {
			return {
				singerId: this.$route.query.singerId,
				sliderImages: ['static/images/1.jpg', 'static/images/2.jpg', 'static/images/3.jpg', 'static/images/4.jpg'],
				singerSongs: [],
				pagination: 0,
				songUrl: '',
			}
		},
		components: {
			muiHeader,
			muiNav
		},
		mounted: function() {
			let vm = this;
			vm.getSingerSongs();


		},

		methods: {
			getSingerSongs: async function() {
				let vm = this;
				let result = await axios.get(`/singerSongs/${vm.singerId}`);
				if (result.data.code == 0) {
					vm.singerSongs = result.data.singer.data.songlist
				}
			},
			playSongs: async function(songId) {
				let vm = this;
				let result = await axios.get(`/songsVkey/${songId}`);
				if (result) {
					vm.songUrl = `http://dl.stream.qqmusic.qq.com/${result.data.url}`;
					setTimeout(function() { 
						var myVideo = document.getElementById("audio1");
						myVideo.play();
					}, 500)

				}
			}


		}


	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.mui-content {

		margin-bottom: 60px;
	}
</style>

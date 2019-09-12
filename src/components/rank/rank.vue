<template>
	<div class="hello">
		<muiHeader></muiHeader>
		<div class="mui-content">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(item,index) in songers" :key="index">
					<a href="javascript:;" @click="changerLocation(item.singer_mid)">
						<img class="mui-media-object mui-pull-left" :src="item.singer_pic" style="border-radius: 50%;">
						<div class="mui-media-body">
							{{item.singer_name}}
						</div>
					</a>
				</li>
			</ul>
		</div>
		<muiNav></muiNav>
	</div>
</template>

<script>
	import muiHeader from 'components/common/mui-header.vue';
	import muiNav from 'components/common/mui-nav.vue';
	import axios from 'axios'

	export default {
		data() {
			return {
				songers: [],
			}
		},
		components: {
			muiHeader,
			muiNav
		},
		mounted: function() {

			let vm = this;
			vm.getSongerRankList();

		},
		methods: {
			getSongerRankList: async function() {
				let vm = this;
				let result = await axios.get('/songerRank');
				if (result.data.code == 0) {
					vm.songers = result.data.singerList.data.singerlist;
				}
			},
			changerLocation: function(singerId) {
				let vm = this;
				console.log(singerId);
				vm.$router.push({
					path:'/singerSongs',
					query:{
						singerId:singerId
					}
				})
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

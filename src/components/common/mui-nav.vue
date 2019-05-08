<template>
	<div>
		<nav class="mui-bar mui-bar-tab">
			<a v-for="(item,index) in routers" :key="index" @click="changeLocation(item.url)" class="mui-tab-item">
				<span :class="'mui-icon '+item.icon"></span>
				<span class="mui-tab-label">{{item.name}}</span>
			</a>
		</nav>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				routers: [{
					name: '发现',
					url: '/find',
					icon:'mui-icon-home'
				},{
					name: '视频',
					url: '/video',
					icon:'mui-icon-extra mui-icon-extra-heart'
				},{
					name: '排行',
					url: '/rank',
					icon:'mui-icon-extra mui-icon-extra-heart-filled'
				}],
			}
		},
		methods: {
			changeLocation: function(url) {
				let vm = this;
				vm.$router.push({
					path: `${url}`
				})

			}
		},

	}
</script>

<style>
</style>

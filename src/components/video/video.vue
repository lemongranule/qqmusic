<template>
	<div class="hello">
		<muiHeader></muiHeader>
		<div class="mui-content">
			
			
			
			<div>
				<audio controls="controls">
					<source :src="songUrl" />
				</audio>
			</div>

		</div>
		<muiNav></muiNav>
	</div>
</template>

<script>
	import muiHeader from 'components/common/mui-header.vue';
	import muiNav from 'components/common/mui-nav.vue';

	export default {
		data() {
			return {
				sliderImages: ['static/images/1.jpg', 'static/images/2.jpg', 'static/images/3.jpg', 'static/images/4.jpg'],
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
		},


	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>

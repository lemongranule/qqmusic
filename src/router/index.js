import Vue from 'vue'
import Router from 'vue-router'
import find from '@/components/find/find'
import video from '@/components/video/video'
import rank from '@/components/rank/rank'
import singerSongs from '@/components/common/singerSongs'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: find
    },
		{
		  path: '/find',
		  component: find
		},
		{
		  path: '/video',
		  component: video
		},
		{
		  path: '/rank',
		  component: rank
		},
			{
		  path: '/singerSongs',
		  component: singerSongs
		},
		
		
  ]
})

import jsonp from './common/jsonp'
import {
	commonParams,
	options
} from './config'
import axios from 'axios';

module.exports = function(APIKit) {
	const api = APIKit.api = {};

	api.getSliderList = async function() {
		const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
		const data = Object.assign({}, commonParams, {
			uin: 0,
			needNewCode: 1,
			platform: 'h5'
		})
		return jsonp(url, data, options)
	};


	api.getDiscList = async function() {
		var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
		let result = await axios.get(url, {
			headers: {
				referer: 'https://c.y.qq.com/',
				host: 'c.y.qq.com'
			},
			params: {
				g_tk: 1928093487,
				inCharset: 'utf-8',
				outCharset: 'utf-8',
				notice: 0,
				format: 'jsonp',
				platform: 'yqq',
				hostUin: 0,
				sin: 0,
				ein: 29,
				sortId: 5,
				needNewCode: 0,
				categoryId: 10000000,
				rnd: Math.random(),
				format: 'json'
			}
		}).then((response) => {
			console.log(response);
		}).catch((e) => {
			console.log(e)
		})

	};










}

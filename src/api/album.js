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


	api.getSongVkey = async function(songmid) {
		const url = 'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg'
		const data = Object.assign({}, {
			callback: 'musicJsonCallback',
			format: 'jsonp',
			platform: 'yqq',
			needNewCode: 0,
			cid: 205361747,
			guid: 5931742855,
			songmid: songmid,
			filename: `C400${songmid}.m4a`
		})
		return jsonp(url, data)
	};

}

import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

export function getSongList(disstid) {
  const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'

  const data = Object.assign({}, commonParams, {
    g_tk:5381,
    uin:0,
    platform:'h5',
	needNewCode:1,
	new_format:1,
	pic:500,
	disstid:disstid,
	type:1,
	json:1,
	utf8:1,
	onlysong:0,
	nosign:1
  })

  return jsonp(url, data, options)
}
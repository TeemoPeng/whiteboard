var host = {
	//'localIp': 'http://192.168.8.66:8080/bat/',//宝安通(测试)
	'localIp': 'http://bat.kiway.cn:8080/bat/',//宝安通(部署)
	// 'localImgIp': 'http://192.168.8.66:8090/91hxwkf/',//宝安通客服后台管理(测试)
	'localImgIp': 'http://www.91hxw.cn/batkf/',//宝安通客服后台管理(部署)
	// 'zsbmIp':'http://192.168.8.18:8080/kwm/visit.html?orgdm=440204_gbxy&tpl=loginzs_m'//招生报名(测试)
	'zsbmIp':'http://xsgl.sz.edu.cn:8008/zsls/visit.html?orgdm=440204_gbxy&tpl=loginzs_m'//招生报名(部署)
}

var urls = {
	'getArticleLists':'cgi-bin/getArticleLists.do',//type=bat_zszc&start=0&end=10
	'getArticleInfo':'cgi-bin/getArticleInfo.do',//articleId=128,
    'getLqjgInfo':'cgi-bin/getLqjgInfo',//bmlsh=10911702&dlmm=111111
    'addZxdyInfo':'cgi-bin/addZxdyInfo.do',//添加咨询答疑信息
    'getZxdyList':'cgi-bin/getZxdyList.do',//获取咨询答疑列表信息
    'getSessionData':'cgi-bin/getSessionData.do',//获取session中的数据
    'setSessionData':'cgi-bin/setSessionData.do',//设置session中的数据
    'zjcjUpload':'cgi-bin/zjcjUpload.do'//上传文件
}
export default {
	host: host,
	url: urls
}
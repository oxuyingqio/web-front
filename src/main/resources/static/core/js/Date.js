/**
 * @name	Date
 * @package	core.js
 * @desc	日期
 * @type	类扩展
 * 
 * @date	2016年8月20日 09:41:57
 */

/**
 * 格式化日期
 * 
 * @param format{string}
 *            格式化参数
 * @returns {string}
 */
Date.prototype.format = function(format) {

	// 日期数据
	var data = {

		// 月
		"M+" : this.getMonth() + 1,
		// 日
		"d+" : this.getDate(),
		// 时,12进制
		"h+" : this.getHours() % 12 === 0 ? 12 : this.getHours() % 12,
		// 时,24进制
		"H+" : this.getHours(),
		// 分
		"m+" : this.getMinutes(),
		// 秒
		"s+" : this.getSeconds(),
		// 毫秒
		"S" : this.getMilliseconds()
	};

	// 处理年
	if (/(y+)/.test(format)) {

		format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}

	// 处理月 日 时 分 秒 毫秒
	for ( var el in data) {

		if (new RegExp("(" + el + ")").test(format)) {

			format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (data[el]) : (("00" + data[el]).substr(("" + data[el]).length)));
		}
	}

	return format;
};
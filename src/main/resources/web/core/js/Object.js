/**
 * @name Object
 * @package core.js
 * @desc 超类
 * @type 类扩展
 * 
 * @date 2016年8月20日 09:15:16
 * 
 * @attention 1.若扩展Object.prototype,引入jQuery时会产生未知错误.
 */

/**
 * 克隆对象(原型式继承)-静态方法
 * 
 * @param object{Object}
 *            待克隆的对象
 * @returns {Object}
 */
Object.clone = function(object) {

	// 一个空函数
	function Clone() {

	}
	// 函数原型指向本对象
	Clone.prototype = object;
	// 返回空函数的一个实例
	return new Clone();
};
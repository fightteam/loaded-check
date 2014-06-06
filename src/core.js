/**
* 核心模块 
* ready
*/

var document = window.document;


function L(){
		return L.fn.init();
}



L.fn = L.prototype = {
	init: function(){
		return this;
	}
};


// 版本标识
L.version = "@VERSION";

L.a = function(){
	return createScript();
}
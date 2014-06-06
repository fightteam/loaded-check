
(function( window, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		
		module.exports = function( w ) {
			w = w || window;
			if ( !w.document ) {
				throw new Error("Loaded requires a window with a document");
			}
			return factory( w );
		};
	} else {
		factory( window );
	}

// Pass this, window may not be defined yet
}(this, function( window ) {

	
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
L.version = "0.0.1";

L.a = function(){
	return createScript();
}

// 创建script节点
 function createScript(){
	var script = document.createElement("script");
	return script;
}

// 创建link节点
function createStyle(){
	var link = document.createElement("link");
	link.rel = "stylesheet";
    link.type = "text/css";
	return link;
}

// 创建img节点
function createImg(){
	var img = document.createElement("img");
	
	return img;
}

if ( typeof define === "function" && define.amd ) {
		define( "L", [], function() {
			return L;
		});
	}

	return (window.L = L);
}));

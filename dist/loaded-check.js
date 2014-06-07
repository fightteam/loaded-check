
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
	urls: {
		scripts:[],
		styleSheets:[],
		images:[]
	},
	fialUrls: {
		scripts:[],
		styleSheets:[],
		images:[]
	},
	successUrls: {
		scripts:[],
		styleSheets:[],
		images:[]
	},
	// 初始化
	init: function(){
		console.log("初始化");

		// script标签
		var scripts = document.scripts;
		var len = scripts.length - 1;

		var i,scriptsUrls = this.urls.scripts;

		for(i = 0; i < len; i++ ){

			scriptsUrls.push(scripts[i].src);
		}

		// link 标签
		var links = document.styleSheets;
		var len2 = links.length,styleSheetsUrls = this.urls.styleSheets;

		for(i = 0; i < len2; i++ ){
			styleSheetsUrls.push(links[i].href);
		}

		// 图片
		var images = document.images;

		var len3 = images.length, imagesUrls = this.urls.images;

		for(i = 0; i < len3; i++ ){
			imagesUrls.push(images[i].src);
		}

		// 递交处理
		this.check();

		return this;
	},
	check: function(){
		console.log("全局检测");

		var scripts = this.urls.scripts;
		var len = scripts.length;

		for(i = 0; i < len; i++ ){
			L.checkJs(scripts[i], this.handleSuccess, this.handleFail);
		}

		var styleSheets = this.urls.styleSheets;
		var len2 = styleSheets.length;

		for(i = 0; i < len; i++ ){
			L.checkCss(styleSheets[i], this.handleSuccess, this.handleFail);
		}

		var images = this.urls.images;
		var len3 = images.length;

		for(i = 0; i < len; i++ ){
			L.checkImg(images[i], this.handleSuccess, this.handleFail);
		}

		
	},
	handleSuccess: function(){
		console.log("success");
		var tagName = this.tagName
		if (tagName == "SCRIPT") {
			L.fn.successUrls.scripts.push(this.src);
		}else if(tagName == "LINK"){
			L.fn.successUrls.styleSheets.push(this.href);
		}else if(tagName == "IMG"){
			L.fn.successUrls.images.push(this.src);
		}
		removeDom(this);
	},
	handleFail: function(){
		console.log("fail");
		var tagName = this.tagName
		if (tagName == "SCRIPT") {
			L.fn.fialUrls.scripts.push(this.src);
		}else if(tagName == "LINK"){
			L.fn.fialUrls.styleSheets.push(this.href);
		}else if(tagName == "IMG"){
			L.fn.fialUrls.images.push(this.src);
		}
		removeDom(this);
	}

};


// 版本标识
L.version = "0.0.1";

// 缓存第一次变量
L.current = null;

// 自动检测
L.auto = true;

// 检测是否成功加载css
L.checkCss = function(obj, success, fail){
	// 1.采用 dom事件
	var link = createLink();
	link.href = obj;
	link.onload = success;
	link.onerror = fail;
	document.head.appendChild(link);
}

// 检测是否成功加载js
L.checkJs = function(obj,success,fail){
	console.log("检测js加载");
	// 1.采用 dom事件
	var script = createScript();
	script.src = obj;
	script.onload = success;
	script.onerror = fail;
	document.head.appendChild(script);
}

// 检测是否成功加载图片
L.checkImg = function(obj,success,fail){
	console.log("检测图片加载");
	// 1.采用 dom事件
	var img = createImg();
	img.src = obj;
	img.onload = success;
	img.onerror = fail;
	document.body.appendChild(img);
}

// 创建script节点
 function createScript(){
	var script = document.createElement("script");
	return script;
}

// 创建link节点
function createLink(){
	var link = document.createElement("link");
	link.rel = "stylesheet";
    link.type = "text/css";
	return link;
}

// 创建img节点
function createImg(){
	var img = document.createElement("img");
	img.style.visibility = "hidden";
	return img;
}


// 事件完成后删除节点
function removeDom(el){
	console.log("删除");
	el.remove();

}



if (L.auto) {
	L.current = new L();
};

if ( typeof define === "function" && define.amd ) {
		define( "L", [], function() {
			return L;
		});
	}

	return (window.L = L);
}));


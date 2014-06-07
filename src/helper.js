
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

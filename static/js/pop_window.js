var defaults = {
	popMain:"pop-panel",
	// 定义的拟态框
}
// 当前对象 信息数据
// 遍历当前对象
// this info-btoa
// options:popMain:".info-panel",
// default:popMain:".pop-panel",
return this .each (function(){
	// info_panel是第一个选项 元素合并到空物体
var opts = $.extend({},defaults,options);	
var pBtn = $(this);
var pMain = $(opts.popMain)

pBtn.click(function(e){
	e.stopPropagation();
	// 阻止冒泡
	if($(".mask-layer").length<1){
		// 如果没有灰色背景,让他添加
		showMaskLayer()
		}
		var mLayer = $(".mask_layer");
		mLayer.fadeIn(200)
		pMain.fadeIn(200)
		mLayer.on("click",function(){
			mlayer.fadeOut(200)
			pMain.fadeOut(200)
		})
})	
	
	function showMaskLayer(){
		// 弹出灰色
		$("body").append("<div class='mask-layer'></div>")
	}
	
	
	
	
	
}

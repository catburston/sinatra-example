(function (global) {
 'use strict';
var list=[];

$.get('/api/items',function(resp){
	list=resp;
	loadItems(resp);
},"json").done(function(){
	$('.btn').on('click',function(evt){
		$.post('/api/remove',evt.target.id, function(res){
			console.log();
			$("#"+evt.target.id).parent().remove();
		});
	});
});
$(".send").on('click',function(evt){
	$.post('/api/new',$('input'),function(res){
	});
	loadItems([$('input').val()]);
	$('input').val("");
});

var loadItems=function(resp){
	for(var i=0;i<resp.length;i++){
		$("#table").append("<li><button class='btn' id="+i.toString()+">Delete</button>  "+resp[i]+"</li>");
	}
}

})(window);
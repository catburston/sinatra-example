(function (global) {
 'use strict';

$.get('/api/items',function(resp){
	for(var i=0;i<resp.length;i++){
		$("#table").append("<li><button class='btn' id="+i.toString()+">Delete</button>  "+resp[i]+"</li>");
	}
},"json").done(function(){
	$('.btn').on('click',function(evt){
		$.post('/api/remove',evt.target.id, function(res){
			console.log();
			$("#"+evt.target.id).parent().remove();
		});
	});
});


})(window);
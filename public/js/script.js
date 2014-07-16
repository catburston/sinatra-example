(function (global) {
 'use strict';
$.get('/api/items',function(resp){
	for(var i=0;i<resp.length;i++){
		$("#table").append("<li>"+resp[i]+"</li>");
	}

},"json")

})(window);
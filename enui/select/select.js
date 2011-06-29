steal.plugins('jquery/controller',
	'jquery/view/ejs').then(function($){

/**
 * @class Enui.Select
 */
$.Controller('Enui.Select',
/* @Static */
{
	defaults : {
	
	}
},
/* @Prototype */
{
	init : function(){
		$.rpc(this.options.url,this.callback('addOptions'))
	},
	addOptions : function(options){
		this.element.html('//enui/select/views/options.ejs', options)
	}
})

var waiting = [];
$.rpc = function(url, callback){
	if(!waiting.length){
		setTimeout(function(){
			var processing = waiting.slice(0);
			waiting = [];
			
			$.get("batch.json", {},function(data){
				processing[0].callback(data.types)
				processing[1].callback(data.status)
			},"json")
		},100)
	} 
	
	waiting.push({
		url: url,
		callback : callback
	})
}


});
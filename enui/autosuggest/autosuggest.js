steal.plugins('jquery/controller').then(function($){

/**
 * @class Enui.Autosuggest
 * 
 * $('input').enui_autosuggest({attr: "name", model: PropertyName, param: "name"})
 */
$.Controller('Enui.Autosuggest',
/* @Static */
{
	defaults : {
	
	}
},
/* @Prototype */
{
	
	init : function(){
		this.element.html("Hello World!");
	},
	"keyup" : function(){
		this.options.model.findAll({name: this.element.val()}, this.callback('found'))
	},
	found : function(options){
		var a
	}
})

});
steal.plugins('jquery/controller').then(function($){

$.fn.contextmenu = function(){
	var el = this;
	$(document).click(function(){
		el.remove()
	})
}

/**
 * @class Enui.Contextmenu
 */
$.Controller('Enui.Contextmenu',{
	pluginName: "cntxtmenu"
},
{
	"{document} click" : function(){
		this.element.remove()
	}
})

});
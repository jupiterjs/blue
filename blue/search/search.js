steal.plugins('jquery/controller',
	'jquery/view/ejs',
	'steal/less',
	'blue/history',
	'jquery/dom/form_params')
.then(function($){
	steal.less("search")
/**
 * @class Blue.Search
 */
$.Controller('Blue.Search',
/* @Static */
{
	defaults : {
	
	}
},
/* @Prototype */
{
	init : function(){
		this.element.html("//blue/search/views/init.ejs",{});
	},
	"{Blue.state} search change" : function(clientState){
		
	},
	"submit" : function(el, ev){
		ev.preventDefault();
		
		Blue.state.attr("search",el.formParams() )
	}
})

});
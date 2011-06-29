steal.plugins('jquery/controller',
 'jquery/event/hashchange',
 'jquery/lang/deparam',
 'jquery/lang/observe/delegate').then(function($){


var curParams ={};
/**
 * @class Np.History
 * Listens to history changes and merges changes with state.
 * Listens to changes in state and merges with history
 */
$.Controller('Blue.History',
/* @Static */
{
	defaults : {
		clientState : $.Observe({})
	},
	
	curParams : function(params) {
		curParams = params;
	}
},
/* @Prototype */
{
	init : function(){
		this.updateFromHash();
	},
	"{window} hashchange" : function(){
		this.updateFromHash()
	},
	updateFromHash : function(){
		var hash = window.location.hash.substr(2); // everything after #!
		//deparam it
		var props = $.String.deparam(hash);
		curParams = props;
		
		this.options.clientState.merge(props, true);
	},
	"{clientState} change" : function(clientState){
		
		// throttle this ...
		
		clearTimeout(this.updateHashTimer);
		this.updateHashTimer = setTimeout(this.callback('updateHash'),10)
	},
	updateHash : function(){
		window.location.hash ="#!"+$.param(this.options.clientState.serialize())
	}
});
Blue.link = function(attr, data){
	//merge
	var p = $.extend(true, {}, curParams),
		parts = attr.split('.'),
		prop = parts.pop(),
		cur = p;
	if(parts.length){
		cur = $.String.getObject( parts.join("."), p, true  ) 
	}
	cur[prop] = data;
	return "#!"+$.param(p)
};

Blue.propsLink = function(prop){
	var p = $.extend(true, {}, curParams),
		products = ( p.products || (p.products = {}) ),
		properties = ( products.properties || (products.properties = []) ),
		replaced = false;
	
	for(var i = 0; i < properties.length; i++) {
		if(properties[i].name == prop.name) {
			properties[i].value = prop.value;
			replaced = true;
			break;
		}
	}
	if(!replaced){
		properties.push( prop)
	}
		
	return "#!"+$.param(p)
};
Blue.state = new $.Observe({});

$(document).blue_history({clientState : Blue.state});

});
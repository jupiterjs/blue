steal.plugins('jquery/controller',
	'blue/history',
	'jquery/view/ejs').then(function($){



/**
 * @class Blue.Paginate
 */
$.Controller('Blue.Paginate',
/* @Static */
{
	defaults : {
	
	}
},
/* @Prototype */
{
	init : function(){
		if(Blue.state.attr('search')){
			this.render();
		}
	},
	"{Blue.state} params.** change" : function(){
		this.render();
	},
	"{Blue.state} search change" : function(state, ev, attr, how){
		// show this
		if(how == "add" || how == "set"){
			// add limit and offset if not provided
			if(!Blue.state.attr('params')){
				Blue.state.attr('params',{
					limit : 0,
					params : 10
				})
			}
			
			this.element.show();
		} else {
			this.element.hide();
		}
	},
	page : function(){
		var limit = this.limit(),
			offset= this.offset();
		
		return Math.floor( offset / limit );
	},
	limit : function(){
		return parseInt( Blue.state.attr('params.limit') );
	},
	offset : function(){
		return parseInt( Blue.state.attr('params.offset') )  || 0;
	},
	count : function(){
		return parseInt( Blue.state.attr('params.count') )|| Infinity
	},
	// return the pages html
	pages : function(){
		var num = 6,
			current = this.page(),
			first = Math.max( current - num/2, 0),
			limit = this.limit(),
			lastPage = Math.floor( this.count() / limit ),
			last = Math.min(lastPage, first+num),
			content = [];
		
		for(var i=first; i < last; i++){
			content.push("<a href='",
				Blue.link("params.offset",limit*i),
				"'>",
				(i+1),
				"</a> ")	
		}
		return content.join("")
	},
	render : function(){
		clearTimeout(this.renderTimer);
		this.renderTimer = setTimeout(this.callback('_render'),20)
	},
	_render : function(){
		this.element.html('//blue/paginate/views/init.ejs',{
			pages : Blue.state.attr('params.count') ? this.pages() : ""
		})
	}
})

});
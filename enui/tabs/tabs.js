steal.plugins('jquery','jquery/controller')
	.css('tabs', '../enui').then(function( $ ) {
	
	$.Controller('Enui.Tabs',{
		init : function(){
			var getPanel = this.getPanel;
			
			this.element.find("li").each(function( i, li ) {
				if ( i == 0 ) {
					$(li).addClass('active')
				} else {
					getPanel(li).hide()
				}
			})
		},
		getPanel: function( li ) {
			var href = $(li).find("a").attr("href");
			return $(href);
		},
		"li click" : function(li, ev){
			var old = li.siblings('.active');
			old.removeClass("active");
			this.getPanel(old).hide();
			li.addClass("active");
			this.getPanel(li).show();
		},
		callback : function(name, arg1, arg2, etc){
			var args = $.makeArray(arguments);
			name = args.unshift();
			
			return function(){
				self[name].apply(self,args.concat(
					$.makeArray(arguments) ) )
			}
		},
	})

	$('#tabs').enui_tabs();

});
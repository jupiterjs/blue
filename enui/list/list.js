steal.plugins('jquery/controller','jquery/view/ejs')
.then("//blue/models/property",
	"//blue/fixtures/properties",function(){





$.Controller('Enui.List',{
	init : function(){
		this.element.html('//enui/list/views/list.ejs', 
			Property.findAll({}) )
	},
	"{Property} created" : function(Property, ev, newProperty){
		this.element.append('//enui/list/views/list.ejs', [newProperty])
	}
})



});
			
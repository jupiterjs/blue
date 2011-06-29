steal.plugins('jquery/model').then(function(){
	$.Model('PropertyName',{
		// GET /services/properties?name=Miami -> []
		findAll : "/services/property_names"
	},{}) 
})

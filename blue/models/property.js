steal.plugins('jquery/model').then(function(){
	
	$.Model('Property',{
		// GET /services/properties?name=Miami -> []
		findAll : "/services/properties"
	},{}) 
})

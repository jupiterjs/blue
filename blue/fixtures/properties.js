steal.plugins('jquery/dom/fixture').then(function(){
	
	name = "<script>Do something evil</script>"
	
	var names = ["Chicago","Maimi","New York","LA","Boston"]
	
	
	$.fixture["-property_names"] = function(settings){
		
		
		var matches = settings.data.name ? $.grep(names, function(name){
			return name.toLowerCase().indexOf(settings.data.name) !== -1
		}) : names
		
		return [$.map(matches, function(name){
			return {name: name}
		})];
	}
	
	var rand = function(arr){
		var num = Math.floor(Math.random() * arr.length);
		return arr[num]
	}
	
	$.fixture.make('property', 2000,function(i){
		return {
			location: rand(names),
			name: "Property "+i,
			price: 100000+Math.floor(Math.random() *1000000)
		}
		
	});
});

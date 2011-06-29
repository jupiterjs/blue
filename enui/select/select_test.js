steal.plugins('funcunit').then(function(){

module("Enui.Select", { 
	setup: function(){
		S.open("//enui/select/select.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "Enui.Select Demo","demo text");
});


});
steal.plugins('funcunit').then(function(){

module("Enui.Autosuggest", { 
	setup: function(){
		S.open("//enui/autosuggest/autosuggest.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "Enui.Autosuggest Demo","demo text");
});


});
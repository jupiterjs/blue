steal.plugins('funcunit').then(function(){

module("Blue.Search", { 
	setup: function(){
		S.open("//blue/search/search.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "Blue.Search Demo","demo text");
});


});
steal.plugins('funcunit').then(function(){

module("Blue.History", { 
	setup: function(){
		S.open("//blue/history/history.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "Blue.History Demo","demo text");
});


});
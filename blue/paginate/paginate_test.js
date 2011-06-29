steal.plugins('funcunit').then(function(){

module("Blue.Paginate", { 
	setup: function(){
		S.open("//blue/paginate/paginate.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "Blue.Paginate Demo","demo text");
});


});
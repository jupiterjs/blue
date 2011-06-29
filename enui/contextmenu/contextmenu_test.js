steal.plugins('funcunit').then(function(){

module("Enui.Contextmenu", { 
	setup: function(){
		S.open("//enui/contextmenu/contextmenu.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "Enui.Contextmenu Demo","demo text");
});


});
module("tabs test", { 
	setup: function(){
		S.open("//enui/tabs/tabs.html");
	}
});

test("click tab buttons", function(){
	S('#tabs a:contains(Locations)').click();
	
	S('#locations:visible').exists(function(){
		ok(true, "locations is visible")
		equals( S('#contacts:visible').size(), 0 , 
			"there are no visible contacts")
	})
});


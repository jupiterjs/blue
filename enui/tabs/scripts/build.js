//steal/js enui/tabs/scripts/compress.js

load("steal/rhino/steal.js");
steal.plugins('steal/build','steal/build/scripts','steal/build/styles',function(){
	steal.build('enui/tabs/scripts/build.html',{to: 'enui/tabs'});
});

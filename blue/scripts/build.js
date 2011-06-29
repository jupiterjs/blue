//steal/js blue/scripts/compress.js

load("steal/rhino/steal.js");
steal.plugins('steal/build','steal/build/scripts','steal/build/styles',function(){
	steal.build('blue/scripts/build.html',{to: 'blue'});
});

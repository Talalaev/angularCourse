function *mainPage() {
    
    try {
        var html = jade.renderFile(
            path.join(roots.templates, 'index.jade'), 
            {
                appName: "Account Of Expenses"
            }
        );

        this.body = html;
        
    } catch(err) {
        
        this.body = 'server error ' + err;
        
    }
	
}

const roots			= require('config');
const jade 			= require('jade');
const path 			= require('path');

module.exports = mainPage;


/*
	var fn = jade.compile('h1 Mane Page! Lesson: #{lesson}', {filename: "mainPage"});

	var html = fn({lesson: "Ajax-based"});
	
	this.body = html;
*/
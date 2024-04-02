// Z.JS            :          BACKEND ENVIRONMENT
// fs.js, Db.js, Tag.js need to be provided along with this file
// In Z.JS three libraries are provided: Fs for the file system, Db for databases and Tag for built-in "React"

function include(file){
	var xml = new XMLHttpRequest();
	xml.open("GET", file, false);
	xml.send(null);
	if (xml.status == 200){
		return eval(xml.responseText);
	}else {
		console.error("Error:", xml.statusText);
		return "";
	};
};
function require(module){
	return include(module + ".js");
};

const tag = require('Tag');
tag.createTag("TAG", (tag)=>{
	tag.elem.innerHTML = "We are updating the text with a length of "+tag.props.length;
});

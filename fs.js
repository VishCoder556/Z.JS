var fs = {
	"readFile": (fileName)=> {
		var xml = new XMLHttpRequest();
		xml.open("GET", fileName, false);
		xml.send(null);
		if (xml.status == 200){
			return xml.responseText;
		} else {
			console.error("There was an error: "+xml.statusText);
			return "";
		};
	}
}

fs

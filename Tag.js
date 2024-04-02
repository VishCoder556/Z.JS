var __TAG_LIST = [];

class ZDomElement{
	constructor(properties, element){
		this.props = properties;
		this.elem = element;
	};
};

const tag = {
	"createTag": (name, fun) => {
		__TAG_LIST.push([name, fun]);
		Array.from(document.body.children).forEach((el)=>{
			__TAG_LIST.forEach((el2) => {
				if(el.tagName == el2[0]) {
					var list = {};
					for (var i=0; i<=Array.from(el.attributes).length-1; i++){
						// list.push({"name": el.attributes[i].name, "value": el.attributes[i].value});
						list[el.attributes[i].name] = el.attributes[i].value;
					}
					var dom = new ZDomElement(list, el);
					el2[1](dom);
					// el.style.display = "none";
				};
			});
		});
	}
}

tag

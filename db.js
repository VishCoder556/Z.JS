const Db = {
	"open": (dbName)=>{
		const request = indexedDB.open(dbName, 1);
		request.onupgradeneeded = function(event) {
			const db = event.target.result;
			const objectStore = db.createObjectStore('data', {keyPath: "id", autoIncrement: true});
			objectStore.createIndex('textIndex', 'text', {unique: false});
		};
		//request.onsuccess = function(event) {
			return request;
		//};
		//console.error("Error: " + );
	},
	"write": (event, data)=>{
		var dbN = event.target.result;
		const transaction = dbN.transaction(['data'], 'readwrite');
		const objectStore = transaction.objectStore('data');
		const addRequest = objectStore.add({text: data});
	},

	"read": (event)=>{
		var dbN = event.target.result;
		const transaction = dbN.transaction(['data'], 'readwrite');
		const objectStore = transaction.objectStore('data');
		const cursorReq = objectStore.openCursor();
		var data = "";
		return cursorReq;
	},

	"readField": (event) => {
		const cursor = event.target.result;
		if(cursor){
			var text = cursor.value.text;
			cursor.continue();
			return text;
		}else {
			return "";
		};
	},

	"clear": (event) => {
		const dbN = event.target.result;
		const objectStore = dbN.transaction(['data'], 'readwrite').objectStore('data');
		objectStore.clear();
	}

};

Db;

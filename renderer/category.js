var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('../db/sales.db');

const catForm = document.querySelector('#catForm');
const catInput = document.querySelector('#category');

catForm.addEventListener('submit', (event) => {
	event.preventDefault();

	let category = catInput.value;


})



var Category = funtion(){
	this.name = '',

	this.insert = (value) =>{
		let stmt = db.prepare("IISERT INTO category (name) VALUES (?)");
		stmt.run(value);
		stmt.finalize();
	}

	this.update = (id, value) =>{
		let stmt = db.prepare("UPDATE category SET name = ? WHERE id = ?");
		stmt.run([value, id], (error) => {
			if(error){

			}
		});
	}
}
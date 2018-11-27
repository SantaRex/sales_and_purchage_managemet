/* Category class*/
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('../db/sales.db');

var Category = function(){
	this.name = '';

	this.insert = (value) =>{
		let stmt = db.prepare("INSERT INTO category (name) VALUES (?)");
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

module.exports = Category;
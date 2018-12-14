const catForm = document.querySelector('#catForm');//form id
const catInput = document.querySelector('#category');
const {electron, dialog} = require('electron').remote;

const mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'sales'
});
connection.connect();

catForm.addEventListener('submit', (event) => {
	event.preventDefault();
	let category = catInput.value;
    let sql = "INSERT INTO category (name) VALUES ("+"'"+category+"'"+")";
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
		dialog.showMessageBox({message: 'Category inserted successfully',  buttons: ["OK", "Close"] });
    });

})

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

var categoryDropDown = document.querySelector('#category');
var subCategoryInput = document.querySelector('#sub-category');
var subCatForm = document.querySelector('#subCatForm');
let sql = "SELECT id, name FROM category";
connection.query(sql, function (error, results, fields) {
    var options = [];
    if (error) throw error;
    for(let i =0; i< results.length; i++){
        let option = '<option value="'+results[i].id+'">'+results[i].name+'</option>';
        console.log(option);
        categoryDropDown.innerHTML += option;
    }
});


subCatForm.addEventListener('submit', (event) => {
	event.preventDefault();
    let category = categoryDropDown.value;
    let subCategory = subCategoryInput.value;
    let sql = `INSERT INTO subcategory (name,category) VALUES ('${subCategory}', '${category}')`;
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
		dialog.showMessageBox({message: 'Sub Category inserted successfully',  buttons: ["OK", "Close"] });
    });

})

const {electron, dialog} = require('electron').remote;

const mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'sales'
});
connection.connect();

var stockForm = document.querySelector('#stockForm');//form id
var productInput = document.querySelector('#product');
var quantityInput = document.querySelector('#quantity');
stockForm.addEventListener('submit', (event) => {
	event.preventDefault();
	let product = productInput.value;
  let quantity = quantityInput.value;
  let sql = `INSERT INTO stock_tbl (product_name , quantity) VALUES ('${product}','${quantity}')`;
    connection.query(sql, function (error, results, fields) {
        if (error){
            dialog.showErrorBox(this,{message: 'Stock insertion failed',  buttons: ["OK", "Close"] });
        } else{
            dialog.showMessageBox(this,{message: 'Product inserted into stock successfully',  buttons: ["OK", "Close"] });
        }
    });

})


const {electron, dialog} = require('electron').remote;

const mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'sales'
});
connection.connect();

 var expenseForm = document.querySelector('#expenseForm');//form id
 var dateInput = document.querySelector('#date');
 var amountInput = document.querySelector('#amount');

expenseForm.addEventListener('submit', (event) => {
	event.preventDefault();
	let date = dateInput.value;
  let amount = amountInput.value;
  let sql = `INSERT INTO expences_tbl (date , amount) VALUES ('${date}','${amount}')`;
    connection.query(sql, function (error, results, fields) {
        if (error){
            dialog.showErrorBox(this,{message: 'Expenses insertion failed',  buttons: ["OK", "Close"] });
        } else{
            dialog.showMessageBox(this,{message: 'Expenses inserted successfully',  buttons: ["OK", "Close"] });
        }
    });

})

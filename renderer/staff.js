
const {electron, dialog} = require('electron').remote;

const mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'sales'
});
connection.connect();

var staffForm = document.querySelector('#staffForm');
var nameInput = document.querySelector('#name');
var dojInput = document.querySelector('#doj');
var dobInput = document.querySelector('#dob');
var genderInput = document.querySelector('#gender');
var designationInput = document.querySelector('#designation');
var salaryInput = document.querySelector('#salary');
var villageInput = document.querySelector('#village');
var poInput = document.querySelector('#po');
var psInput = document.querySelector('#ps');
var districtInput = document.querySelector('#district');
var stateInput = document.querySelector('#state');
var mobInput = document.querySelector('#mob');


staffForm.addEventListener('submit', (event) => {
	event.preventDefault();
	let name = nameInput.value;
  let doj = dojInput.value;
  let dob = dobInput.value;
  let gender = genderInput.value;
  let designation = designationInput.value;
  let salary = salaryInput.value;
  let village = villageInput.value;
  let po = poInput.value;
  let ps = psInput.value;
  let district = districtInput.value;
  let state = stateInput.value;
  let mobile = mobInput.value;
 
  let sql = `INSERT INTO staff_tbl (name ,dob,doj,gender,designation,po,ps,village,district,state,mobile,salary) VALUES ('${name}','${dob}','${doj}','${gender}','${designation}','${po}','${ps}','${village}','${district}','${state}','${mobile}','${salary}')`;
    connection.query(sql, function (error, results, fields) {
        if (error){
            dialog.showErrorBox(this,{message: 'Staff insertion failed',  buttons: ["OK", "Close"] });
        } else{
            dialog.showMessageBox(this,{message: 'Staff Added Successfully',  buttons: ["OK", "Close"] });
        }
    });

})

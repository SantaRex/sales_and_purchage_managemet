const {electron, dialog} = require('electron').remote;

const mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
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

var subCategoryDropDown = document.querySelector('#sub-category');
var itemInput = document.querySelector('#name');
var manufacInput = document.querySelector('#mfg');
var gstInput = document.querySelector('#gst');
var cgstInput = document.querySelector('#cgst');
var usesInput = document.querySelector('#usage');
var buyingPriceInput = document.querySelector('#b-price');
var sellingPriceInput = document.querySelector('#s-price');
var itemForm = document.querySelector('#itemForm')
let sql = `select id,name FROM subcategory`;
connection.query(sql, function (Error, results, fields ) {
    var options = [];;
    if (Error) throw Error;
    for(let i = 0; i < results.length; i++ ) {
      let option = '<option value="'+results[i].id+'">'+results[i].name+'</option>'
      console.log(option);
      subCategoryDropDown.innerHTML += option; 
    }
});


itemForm.addEventListener('submit', (event) => {
	event.preventDefault();
    let category = categoryDropDown.value;
    let subCategory = subCategoryDropDown.value;
    let item = itemInput.value;
    let manufac = manufacInput.value;
    let gst = gstInput.value;
    let cgst = cgstInput.value;
    let uses = usesInput.value;
    let bprice = buyingPriceInput.value;
    let sprice = sellingPriceInput.value;

    let sql = `INSERT INTO item_tbl (category,sub_category,item_name,manufacturer,gst,cgst,uses,b_price,s_price) VALUES ('${category}', '${subCategory}','${item}','${manufac}','${gst}','${cgst}','${uses}','${bprice}','${sprice}')`;
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
		dialog.showMessageBox({message: 'item inserted successfully',  buttons: ["OK", "Close"] });
    });

})
const path = require('path');

var sqlite3 = require('sqlite3').verbose();

const log4js = require('log4js');

log4js.configure({
  appenders: { database: { type: 'file', filename: path.join(__dirname,'../logs/error.log') } },
  categories: { default: { appenders: ['database'], level: 'error' } }
});

const logger = log4js.getLogger('database');



var dbPath = path.join(__dirname,'../db/sales.db');


var db = new sqlite3.Database(dbPath);

var Database = function(){
	this.sql = '';
	this.table = '';
	this.error;
	var result = [];
	var arrayValues = [];

	this.query = (sql, values) =>{
		db.run(sql, values, (error) => {
			if(error){
				logger.error(error);
				this.error = 1;
			}
		});

		return !this.error ? true : false;

	};

	this.insert = (table, params) => {
		this.table = table;
		this.sql = `INSERT INTO ${table} `;
		this.sql += `(${buildFieldPart(params)}) VALUES (${buildValuePart(params)})`;
		buildValueArray(params);
		return this;
	}

	this.delete = (table, id) =>{
		this.table = table;
		arrayValues = [id];
		this.sql = `DELETE FROM ${this.table} WHERE id = ?`;
		return this;
	}

	this.selectAll = function(table){
		this.sql = `SELECT * FROM ${table}`;
		db.all(this.sql,[], (error, rows)=>{
			if(error){
				logger.error('Failed to execute : ' + this.sql);
				logger.error(error);
				throw error;
			}
			rows.forEach((row)=>{
				result.push(row);
			});
		});
		console.log(result);
		return this;
	}





	this.get = ()=>{
		return result ? result : null;
	}

	this.run = ()=>{

		db.run(this.sql, arrayValues, (error) => {
			if(error){
				logger.error('Failed to execute : ' + this.sql);
				logger.error(error);
				this.error = 1;
			}
		});

		return !this.error ? true : false;
	}


	var buildFieldPart = (params) => {
		return params.map((field) => {
			let key = Object.keys(field);
  			return key[0];
		}).join(',');
	} 

	var buildValuePart = (params) => {
		return  params.map((param) =>{
		  for(let key in param){
		    //let p = param[key].toString();
		    return `?`;
		  }
		}).join(',');
	}

	var buildValueArray = (params)=> {
		arrayValues = params.map((param) => {
			for(let key in param){
				return param[key];
			}
		});
	}
}

module.exports = Database;

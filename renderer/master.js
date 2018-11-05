const electron = require('electron')
const ipc = electron.ipcRenderer

const btnCategory = document.querySelector('#category');

btnCategory.addEventListener('click', (event)=>{
	ipc.send('category-window', 1);
});

const btnSubCategory = document.querySelector('#sub-category');

btnSubCategory.addEventListener('click', (event)=>{
	ipc.send('sub-category-window', 1);
});

const btnItem = document.querySelector('#item');

btnItem.addEventListener('click', (event)=>{
	ipc.send('item-window', 1);
});

const btnStock = document.querySelector('#stock');

btnStock.addEventListener('click', (event)=>{
    ipc.send('stock-window' , 1);
});

const btnCollection = document.querySelector('#collection');

btnCollection.addEventListener('click', (event)=>{
  
  ipc.send('collection-window' , 1);
});

const btnExpences = document.querySelector('#expences');

btnExpences.addEventListener('click', (event)=> {

ipc.send('expences-window' , 1);

});

const btnStaff = document.querySelector('#staff');

btnStaff.addEventListener('click', (event)=> {

 ipc.send('staff-window' , 1);
});
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
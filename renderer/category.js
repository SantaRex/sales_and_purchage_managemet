const catForm = document.querySelector('#catForm');//form id
const catInput = document.querySelector('#category');
const electron = require('electron')
const ipc = electron.ipcRenderer


catForm.addEventListener('submit', (event) => {
	event.preventDefault();

	let category = catInput.value;
	ipc.send('cat-data', category);

})


ipc.on('category-inserted', (event, arg)=>{
	alert(' category-inserted successfully');
});


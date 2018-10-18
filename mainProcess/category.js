 const { app, BrowserWindow, ipcMain } = require('electron')
 let categoryWindow;
 ipcMain.on('category-window', (event, arg)=>{
    if(arg === 1){
      categoryWindow = new BrowserWindow(
        { 
          width: 600, 
          height: 180, 
          parent: win, 
          minimizable: false, 
          maximizable : false,
          alwaysOnTop : true,
          resizable : false,
        });
      categoryWindow.setMenu(null);
  
    // and load the index.html of the app.
      categoryWindow.loadFile('./views/categoty.html');
    
      // Open the DevTools.
      //win.webContents.openDevTools()
    
      // Emitted when the window is closed.
      categoryWindow.on('closed', () => {
        
        categoryWindow = null
      });
    }
  });
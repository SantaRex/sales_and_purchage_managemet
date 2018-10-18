const {
    app,
    BrowserWindow,
    ipcMain
} = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWin;

function createWindow() {
    // Create the browser window.
    mainWin = new BrowserWindow({
        width: 1200,
        height: 800
    })

    // and load the index.html of the app.
    mainWin.loadFile('./views/index.html')

    // Open the DevTools.
    //win.webContents.openDevTools()

    // Emitted when the window is closed.
    //win.setMenu(null);
    mainWin.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWin = null
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWin === null) {
        createWindow()
    }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.


// Category window 
ipcMain.on('category-window', (event, arg) => {
    if (arg === 1) {
        categoryWindow = new BrowserWindow({
            width: 600,
            height: 180,
            parent: mainWin,
            minimizable: false,
            maximizable: false,
            alwaysOnTop: true,
            resizable: false,
        });

        categoryWindow.setMenu(null);

        categoryWindow.loadFile('./views/categoty.html');

        categoryWindow.on('closed', () => {
            categoryWindow = null
        });
    }
});

// sub category window 
let subCatWindow;
ipcMain.on('sub-category-window', (event, arg) => {
    if (arg === 1) {
        subCatWindow = new BrowserWindow({
            width: 600,
            height: 260,
            parent: mainWin,
            minimizable: false,
            maximizable: false,
            alwaysOnTop: true,
            resizable: false,
        });

        subCatWindow.setMenu(null);

        subCatWindow.loadFile('./views/sub-category.html');

        subCatWindow.on('closed', () => {
            subCatWindow = null
        });
    }
})

// sub category window 
let itemWindow;
ipcMain.on('item-window', (event, arg) => {
    if (arg === 1) {
        itemWindow = new BrowserWindow({
            width: 700,
            height: 500,
            parent: mainWin,
            minimizable: false,
            maximizable: false,
            alwaysOnTop: true,
            resizable: false,
        });

        itemWindow.setMenu(null);

        itemWindow.loadFile('./views/item.html');
        
        itemWindow.on('closed', () => {
            itemWindow = null
        });
    }
})


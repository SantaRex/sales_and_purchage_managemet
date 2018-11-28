const {
    app,
    BrowserWindow,
    ipcMain
} = require('electron')

const mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'sales'
});

connection.connect();
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
            height: 280,
            parent: mainWin,
            minimizable: false,
            maximizable: false,
            alwaysOnTop: true,
            //resizable: false,
        });

        categoryWindow.setMenu(null);

        //categoryWindow.webContents.openDevTools();

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
            height: 290,
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

// item window 
let itemWindow;
ipcMain.on('item-window', (event, arg) => {
    if (arg === 1) {
        itemWindow = new BrowserWindow({
            width: 700,
            height: 520,
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

//stock window
let stockWindow;
ipcMain.on('stock-window', (event, arg) => {
    if (arg === 1) {
        stockWindow = new BrowserWindow({
            width: 600,
            height: 300,
            parent: mainWin,
            minimizable: false,
            maximizable: false,
            alwaysOnTop: true,
            resizable: false,
        });

        stockWindow.setMenu(null);
        stockWindow.webContents.openDevTools();


        stockWindow.loadFile('./views/stock.html');

        stockWindow.on('closed', () => {
            stockWindow = null
        });
    }
});

//collection window
let collectionWindow;
ipcMain.on('collection-window', (event, arg) => {
    if (arg === 1) {
        collectionWindow = new BrowserWindow({
            width: 600,
            height: 300,
            parent: mainWin,
            minimizable: false,
            maximizable: false,
            alwaysOnTop: true,
            resizable: false,
        });

        collectionWindow.setMenu(null);

        collectionWindow.loadFile('./views/collection.html');

        collectionWindow.on('closed', () => {
            collectionWindow = null
        });
    }
});

//Expences window
let expencesWindow;
ipcMain.on('expences-window', (event, arg) => {
    if (arg === 1) {
        expencesWindow = new BrowserWindow({
            width: 600,
            height: 300,
            parent: mainWin,
            minimizable: false,
            maximizable: false,
            alwaysOnTop: true,
            resizable: false,
        });

        expencesWindow.setMenu(null);

        expencesWindow.loadFile('./views/expences.html');

        expencesWindow.on('closed', () => {
            expencesWindow = null
        });
    }
});

//Staff window
let staffWindow;
ipcMain.on('staff-window', (event, arg) => {
    if (arg === 1) {
        staffWindow = new BrowserWindow({
            width: 700,
            height: 750,
            parent: mainWin,
            minimizable: false,
            maximizable: false,
            alwaysOnTop: true,
            resizable: false,
        });

        staffWindow.setMenu(null);

        staffWindow.loadFile('./views/staff.html');

        staffWindow.on('closed', () => {
            staffWindow = null
        });
    }
});
//category
ipcMain.on('cat-data', (event, arg) => {
   // console.log(arg);
    let sql = "INSERT INTO category (name) VALUES ("+"'"+arg+"'"+")";
    //console.log(sql);
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        event.sender.send('category-inserted', 1);
    });

})

//stock

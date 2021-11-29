// Modules to control application life and create native browser window
const {app, BrowserWindow, Menu, MenuItem, Tray, session} = require('electron');
const path = require('path');

const Store = require('electron-store');
const store = new Store();
const { DefaultOptions } = require('discord.js/src/util/Constants');

const package_name = process.env.npm_package_name,
      package_version = process.env.npm_package_version;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow,
    tray;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 800,
    minHeight: 400,
    fullscreenable: false,
    webPreferences: {
      preload: path.join(__dirname, '/src/preload.js'),
    },
    frame: false,
    backgroundColor: '#202225',
  })

  // and load the index.html of the app.
  mainWindow.loadFile(__dirname+'/src/index.html');
  
  // mainWindow.loadURL('http://dpd.solcraft.eu');
  // mainWindow.loadURL('http://fleme.nedius.com');

  // remove menu bar
  // mainWindow.removeMenu();
  // const menu = new Menu();

  // menu.append(new MenuItem(
    // { label: 'Open Inspectum Elementum',
    // accelerator: 'Ctrl+Shift+I',
    // click: () => { console.log('Ctrl+Shift+I') }
    // },
    // { label: 'Open Inspectum Elementum Alt',
    //   accelerator: 'F12',
    //   click: () => { console.log('F12') }
    // },
  // ));


  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  mainWindow.webContents.on('new-window', function(e, url) {
    e.preventDefault();
    require('electron').shell.openExternal(url);
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', function() {
  // Request single instance
  var first = app.requestSingleInstanceLock();
  // console.log(first);
  if(first)
    createWindow();
  else
    app.quit();

  tray = new Tray(__dirname+'/src/img/tray.png');
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Discord4Bot', enabled: false },
    { type: 'separator' },
    { label: 'Reset size/pos', click() { mainWindow.setSize(1280, 720); mainWindow.center(); } },
    // { label: 'Reset position', click() { console.log('Reset position') } },
    { type: 'separator' },
    { label: 'Log Out', click() {
      store.set('token', '');
      store.set('oneSession', true);
      store.set('hasPassword', false);
      mainWindow.reload();
    }},
    { label: 'Quit Discord4Bot', role: 'quit' }
  ]);
  tray.setToolTip('Discord4Bot');
  tray.setContextMenu(contextMenu);

  tray.on('click', function(){
    mainWindow.restore();
    mainWindow.focus()
  })

  // change user-agent for api requests
  session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
    if(details.url.startsWith(DefaultOptions.http.host)){
      details.requestHeaders[`User-Agent`] = `DiscordBot (${package_name}, ${package_version})`;
    }
    callback({ 
      cancel: false,
      requestHeaders: details.requestHeaders 
    });
  });
})

// if second instaance has been launched 
app.on('second-instance', (event, argv, workingDirectory) => {
  // console.log(event, argv, workingDirectory);
  if (mainWindow) {
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.focus();
  }
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// В main процессе.
const { ipcMain } = require('electron')
ipcMain.on('asynchronous-message', (event, arg) => {
  if(arg == "btnClose"){
    if(process.platform !== 'darwin'){
      app.exit();
    }
  }
  if(arg == "btnMinimize") quitApplication();
})
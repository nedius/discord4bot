'use strict'

import { app, protocol, BrowserWindow, ipcMain, shell } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
//import { log } from 'console'
const isDevelopment = process.env.NODE_ENV !== 'production'

const path = require('path')

// require("./bot")

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

let win, tray;

tray;

async function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 800,
    minHeight: 400,
    fullscreenable: false,
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      preload: path.join(__dirname, 'preload.js'),
    },
    icon: path.join(__dirname, '/assets/logo.png'),
    frame: false,
    // backgroundColor: '#202225',
    // backgroundColor: '#fff',
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    process.env.DEFAULT_DISCORD4BOT_PATH = process.env.WEBPACK_DEV_SERVER_URL;
    await win.loadURL(process.env.DEFAULT_DISCORD4BOT_PATH)
    
    // if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    process.env.DEFAULT_DISCORD4BOT_PATH = 'app://./index.html';
    await win.loadURL('app://./index.html')
  }


  win.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })

  // win.webContents.on('new-window', function(e, url) {
  //   e.preventDefault();
  //   shell.openExternal(url);
  // });

  win.webContents.on('will-navigate', (e, url) =>{
    console.log(e, url);

    if(!(url.includes("localhost") || url.includes('app://'))){
      e.preventDefault();
      shell.openExternal(url);
    }else{
      if (process.env.WEBPACK_DEV_SERVER_URL) {
        win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
      } else {
        win.loadURL('app://./index.html')
      }
    }
  })

  win.webContents.setWindowOpenHandler(function(details) {
    let allow = false;
    console.log(details);

    if(allow){
      return {action: 'allow'};
    }else{
      shell.openExternal(details.url);
      return {action: 'deny'};
    }
  });
}

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
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  // Request single instance
  let first = app.requestSingleInstanceLock();
  if(first){
    createWindow();
  }
  else{
    app.quit();
  }
})

// if second instance has been launched 
app.on('second-instance', async (event, argv, workingDirectory) => {
  event; argv; workingDirectory;
  // console.log(event, argv, workingDirectory);
  if (app) {
    if (win.isMinimized()) win.restore();
    win.focus();
  }
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}

ipcMain.on('controlButton', (event, arg) => {
  // console.log(event, arg);
  switch(arg.action) {
    case 'close':
      if(process.platform !== 'darwin'){
        app.exit();
      }
      break;
    case 'minimize':
      win.minimize();
      break;
    case 'maximize':
      if (!win.isMaximized()) {
        win.maximize();
      } else {
        win.unmaximize();
      }
      break;
    case 'devTools':
      win.webContents.openDevTools();
      break;
    default:
      // console.log(arg.action);
      // code block
  }
})

import { ipcRenderer, contextBridge } from 'electron';
console.log(`preload loaded`);

contextBridge.exposeInMainWorld('preload', {
    maximize: () => ipcRenderer.send('controlButton', {action: 'maximize'}),
    minimize: () => ipcRenderer.send('controlButton', {action: 'minimize'}),
    close: () => ipcRenderer.send('controlButton', {action: 'close'}),
    openDevTools: () => ipcRenderer.send('controlButton', {action: 'devTools'}),
})

console.log(process.env.DEFAULT_DISCORD4BOT_PATH);

// window.ipcRenderer = ipcRenderer;
// window.test = 'test';

// console.log(window.ipcRenderer);
// window.ipcRenderer.send('controlButton', {action: 'test'});
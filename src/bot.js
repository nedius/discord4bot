import { contextBridge } from 'electron';
import Discord from 'discord.js';
console.log(`bot preload loaded`);
let client = new Discord.Client();

contextBridge.exposeInMainWorld('core', {
    bot: client,
});
# Discord4bot
Discord client for bot account

### _I decided to rewrite the discord4bot on VUE.JS. This will help ease development._

#### Using your person account, not bot account, are against Discord TOS and can result in an account termination! ([link](https://support.discordapp.com/hc/en-us/articles/115002192352-Automated-user-accounts-self-bots-)) USE AT YOUR OWN RISK

### Feature List
 * Login screen, with options to locally save token with or without additional local password
 * Get and open guilds
 * Get and open guild channels
   * For text channel you can get, delete and send messages
 * Get guild channels properties and edit some of them
 * Get guild members properties and edit some of them
 * Get guild members in voice channels
   * If this member is muted/deafened himself or server wide, also Go Live icon
   * Drag'n'Drop members around voice channels

### Long-Term To-Do List
 * Migration to new Discord.js v12

# Installation
Node.js 12.0.0 or newer is required.

1. Download Discord4bot with `git clone https://github.com/nedius/discord4bot.git --depth 1`
2. Within the Discord4bot folder run `npm ci`
3. To open Discord4bot run `npm start`

### If you have problem

If you encountered some problems try to delete Discord4bot folder and go trough installation again (you won't lose your settings). Its likely because of new Discord.js version. Discord4bot intended to run with 11.6.x version of Discord.js. You can check your Discord.js version with `npm list discord.js` command.

### Known Issues
 * ~~Reaction entirely disappearing when you unreact them. Channel reload should show correctly reaction again.~~ It's working now, but dont do it fast. Can still depend on channel reloading.
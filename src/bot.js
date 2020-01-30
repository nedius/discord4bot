const Discord = require('discord.js');
const client = new Discord.Client();

const Store = require('electron-store');
const store = new Store();

module.exports = {
    client: client
};

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    setClientUser(client.user);

    client.guilds.tap(guild => {
        addGuild(guild);
        // console.log(guild.name);
        document.getElementById('gd/' + guild.id).addEventListener('click', selectGuild);
    });

    if(store.has('lastGuild'))
        document.getElementById(store.get('lastGuild')).click();
    if(store.has('lastChannel'))
        document.getElementById(store.get('lastChannel')).click();
    goToApp();
});

client.on('message', msg => {
//   if (msg.content === 'ping') {
//     msg.reply('pong');
//   }
    // console.log(msg.content);
});

client.on("error", (e) => {
    console.error(e);
});

function selectGuild(e){
    let guildId = e.target;
    if(guildId.classList.contains('guildImage'))
        guildId = guildId.parentNode;
    if(guildId.classList.contains('wrapper'))
        guildId = guildId.parentNode;
    if(guildId.classList.contains('listItem'))
        guildId = guildId.id;

    let guild = client.guilds.get(guildId.substring(3));

    delChannels();
    document.getElementsByClassName('sidebarGuildName')[0].innerText = guild.name;


    // https://stackoverflow.com/questions/57023811/how-to-map-by-sorting-by-a-certain-property

    const descPos = (a, b) => {
        if (a.type !== b.type) {
            if (a.type === 'voice') return 1;
            else return -1;
        } else return a.position - b.position;
    };

    const channels = new Discord.Collection();

    channels.set('__none', guild.channels.filter(channel => !channel.parent && channel.type !== 'category').sort(descPos));

    const categories = guild.channels.filter(channel => channel.type === 'category').sort(descPos);
    categories.forEach(category => channels.set(category.id, category.children.sort(descPos)));

    for (let [categoryID, children] of channels) {
        const category = guild.channels.get(categoryID);
        if (category) addChannel(category);
        for (let [, child] of children){
            addChannel(child);
            if(child.type == 'voice' && child.members.size > 0){
                for(let [, member] of child.members){
                    // console.log(member)
                    addVoiceUser(child, member);
                    if(member.selfMute || member.serverMute)
                        setMute(member, true);
                    if(guild.afkChannelID === member.voiceChannelID)
                        setMute(member, true);
                    if(member.selfDeaf || member.serverDeaf)
                        setDeaf(member, true);
                    // setMute(member, member.mute);
                    // setDeaf(member, member.deaf);
                }
            }
        }
    }

    // console.log(list.join('\n'));



    guild.channels.tap(channel =>{ 
        document.getElementById('ch/' + channel.id).addEventListener('click', selectChannel);
    })

    store.set('lastGuild', guildId);
}

function selectChannel(e){
    // console.log(e.target);
    let channelId = e.target;
    let types = [   'string',
                    'number',
                    'boolean',
                    'bigint',
                    // 'undefined',
                    'object',
    ];
    let whitelist = [   {name : 'name', method : "setName"},
                        {name : 'guild', method : ""},
                        {name : 'id', method : ""},
                        {name : 'type', method : ""},
                        {name : 'topic', method : "setTopic"},
                        {name : 'bitrate', method : "setBitrate"},
                        {name : 'joinable', method : ""},
                        {name : 'userLimit', method : ""},
                        {name : 'full', method : ""},
                        {name : 'createdAt', method : ""},
                        {name : 'nsfw', method : "setNSFW"},
                        {name : 'rateLimitPerUser', method : "setRateLimitPerUser"},
                        {name : 'position', method : ""},
                        {name : 'calculatedPosition', method : ""},
                        {name : 'typing', method : ""},
                        {name : 'typingCount', method : ""},
    ];

    whitelist.has = function(string){
        // for(data of this){
        for(var i = 0 ; i < this.length; i++){
            // console.log(data);
            if(this[i].name === string){
                // console.log(data.name, '=', string);
                return true;
            } 
        }
        return false;
    };

    // let dimaBlet = {
    //     "one": {},
    //     "two": {},
    // }

    while(channelId.parentNode){
        if( channelId.classList.contains('sidebarChannelContainer') || channelId.classList.contains('sidebarCategoryContainer') )
            break;
        channelId = channelId.parentNode;
    }
    if(channelId)
        channelId = channelId.id;
    // console.log(channelId);

    let channel = client.channels.get(channelId.substring(3));
    // let guildCh = client.channels.get(channelId.substring(3)).guild.channels.get(channelId.substring(3));

    // console.log(channel);
    delChatOps();
    document.getElementsByClassName('chatTitleName')[0].innerText = channel.name;

    for(data of whitelist){
        // console.log(data);
        if(typeof(channel[data.name]) == 'undefined')
            continue;
        addChatOp(channel, data.name, data.method);
    }

    addChatOp({'__SEPARATOR': '__SEPARATOR'}, '__SEPARATOR');

    for(data in channel){
        if( types.includes( typeof(channel[data]) ) ){
            if(!whitelist.has(data))
                addChatOp(channel, data);
        }
    }

    let buttons = document.getElementsByClassName('chennelOptionButton');

    for(var i=0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(e){
            let target = e.target,
                parent = target.parentNode;
            console.log(parent.getAttribute('channel'), parent.children[0].innerText, parent.children[1].value);
        });
    }

    // for(data in channel){
    //     // if( types.includes( typeof(channel[data]) )){
    //         console.log(data, '(', typeof(channel[data]) , ')', ': ',  channel[data]);
    //         // addChatOp(channel, data);
    //     // }
    // }

    
    store.set('lastChannel', channelId);
}

client.on('voiceStateUpdate', (oldM, newM) => {
    // console.log(oldM, newM);
    if(newM.voiceChannelID == null){
        delVoiceUser(newM);
    }else{
        addVoiceUser(newM.voiceChannel, newM);
    }

    
    if(newM.selfMute || newM.serverMute)
        setMute(newM, true);
    if(newM.guild.afkChannelID === newM.voiceChannelID)
        setMute(newM, true);
    if(newM.selfDeaf || newM.serverDeaf)
        setDeaf(newM, true);

    // var video = newM.guild._rawVoiceStates.get(newM.id);
    // var video = newM;
    // console.log(video);

    // if(video)
    //     setGoLive(newM, true);

});
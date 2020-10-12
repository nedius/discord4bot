// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

const { remote } = require('electron');
const Store = require('electron-store');
const store = new Store();

const { client } = require("./bot.js");

var token = '',
    oneSession = false,
    onlyPassword = false,
    password  = '',
    tokenRegex = /^[MN][A-Za-z\d]{23}\.[\w-]{6}\.[\w-]{27}$/g;

function appInit(){
  changeTheme(store.get('themeType'));

  let sizeX = store.get('sizeX'),
      sizeY = store.get('sizeY'),
      posX = store.get('posX'),
      posY = store.get('posY');
  let { availWidth, availHeight } = screen;

  if(sizeX < 800){
    sizeX = 1280;
    store.set('sizeX', sizeX);
  }else if(sizeX > availWidth){
    sizeX = 1280;
    store.set('sizeX', sizeX);
  } 

  if(sizeY < 400){
    sizeY = 720; 
    store.set('sizeY', sizeY);
  }else if(sizeY > availHeight){
    sizeY = 720;
    store.set('sizeY', sizeY);
  }

  if(typeof(sizeX) == 'undefined')
    sizeX = 1280;
  if(typeof(sizeY) == 'undefined')
    sizeY = 720;
  if(typeof(posX) == 'undefined')
    posX = 100;
  if(typeof(posY) == 'undefined')
    posY = 100;
  
  // if(sizeX < 800){
  //   sizeX = 1280;
  //   store.set('sizeX', sizeX);
  // }else if(sizeX > width){
  //   sizeX = 1280;
  //   store.set('sizeX', sizeX);
  // } 

  remote.getCurrentWindow().setSize(sizeX, sizeY);
  remote.getCurrentWindow().setPosition(posX, posY);

  clearLoginWarning();
  
  if(store.get('oneSession') || store.get('token') == ''){
    goToLogin();
  }else{
    if(hasPassword()){
      onlyPassword = true;
      goToLogin(onlyPassword);
    }else{
      console.log('found that its not oneSession and token is insecure trying to log in');
      login();
    }
  }
};

function botInit(){
  // console.log(`bot init`);

  // addGuild({id:123456, iconURL: "./img/placeholder.png"});
  // addGuild({id:1234567, iconURL: ""});

  // addGuild({id:11, iconURL: ""});
  // addGuild({id:12, iconURL: ""});
  // addGuild({id:13, iconURL: ""});
  // addGuild({id:14, iconURL: ""});
  // addGuild({id:15, iconURL: ""});
  // addGuild({id:16, iconURL: ""});
  // addGuild({id:17, iconURL: ""});

  // delGuild({id:1234567});
  // delGuilds();
  // addGuild({id:123456, iconURL: "./img/placeholder.png"});

  // addChannel({type:'category', name:'category', id: 1});
  // addChannel({type:'text', name:'Text Channel', id: 2});
  // addChannel({type:'voice', name:'Voice Channel', id: 3});
  // addChannel({type:'voice', name:'Voice Channel w/ people', id: 4});
  // addVoiceUser({id: 4}, {id: 101, nickname: "test user", mute: true, deaf: true, user:{username:"user1", avatarURL: "./img/placeholder.png"}});
  // addVoiceUser({id: 4}, {id: 102, nickname: "test user 2", mute: true, deaf: true, user:{username:"user2", avatarURL: "./img/placeholder.png"}}); //TODO: if user already exist
  // addVoiceUser({id: 4}, {id: 102, nickname: "test user 2", mute: true, deaf: true, user:{username:"user2", avatarURL: "./img/placeholder.png"}}); //TODO: if user already exist
  // addVoiceUser({id: 4}, {id: 103, nickname: null, mute: true, deaf: true, user:{username:"user3", avatarURL: "./img/placeholder.png"}});

  // setDeaf({id: 103}, true);
  // setMute({id: 103}, true);

  client.login(hasPassword() ? decrypt(getToken(), password) : getToken())
    .catch(function(e) {
      console.error(e);
      setLoginWarning(e.message, true);
  });
  // goToApp();

};

function login(){
  // console.log('tipo password verification and logging');
  // console.log("oneSession", oneSession, ", onlyPassword", onlyPassword );
  // console.log( ( hasEncrypted(getToken()) ? "ecrypted_" : "" ) + "token", getToken(),
  //              ", passowrd" , (password == '') ? '(undefined)' : password,
  //              ", decrypted_token", hasPassword() ? decrypt(getToken(), password) : '(undefined)' );
  
  // if(getToken() === '' || !( hasEncrypted(getToken()) ? decrypt(getToken(), password) : getToken() ).match(tokenRegex)){ ///[MN][A-Za-z\d]{23}\.[\w-]{6}\.[\w-]{27}/g
  //   console.log('invalid-token');
  //   setLoginWarning('Invalid token', true);
  // }else{
  //   // password = '';
  //   botInit();
  // }

  clearLoginWarning();
  botInit();

  // goToApp();
}

window.addEventListener('DOMContentLoaded', () => {

  appInit();

  var body = document.body;
  var btnChangeTheme = document.getElementById('btnChangeTheme');

  btnChangeTheme.addEventListener('click', function(){
    changeTheme('toggle');
    setTimeout(() => {
      store.set('themeType', isLightTheme() ? 'light' : 'dark');
    }, 1100);
  });
  
  document.getElementById('btnClose').addEventListener('click', function(){
    window.close();
  });

  document.getElementById('btnMinimize').addEventListener('click', function(){
    remote.BrowserWindow.getFocusedWindow().minimize();
  });

  document.getElementById('btnMaximize').addEventListener('click', function(){
    if (!remote.getCurrentWindow().isMaximized()) {
      remote.getCurrentWindow().maximize();
    } else {
      remote.getCurrentWindow().unmaximize();
    }
  });

  var btnAppAuthor = null,
      btnAppAuthorClicked = false;
  document.getElementById('btnAppAuthor').addEventListener('click', function(){
    let taskbar = document.getElementById(`taskbar`);

    if(taskbar.classList.contains('openTask')){
      taskbar.classList.remove('openTask');
      taskbar.classList.remove('closeTask');
      return;
    }

    if(btnAppAuthorClicked)
      return;
    else
      btnAppAuthorClicked = true;

    clearTimeout(btnAppAuthor);
    taskbar.classList.remove('showTask')
    
    taskbar.classList.add('showTask');

    btnAppAuthor = setTimeout(() => {
      taskbar.classList.remove('showTask');
      btnAppAuthorClicked = false;
    }, 2000 - 50);
  });
  // https://fleme.nedius.com

  // document.getElementById('btnToFleme').addEventListener('click', function(){
  //   toFleme();
  // });

  document.getElementById('btnInspectumElementum').addEventListener('click', function(){
    remote.getCurrentWindow().webContents.openDevTools();
  });

  document.getElementById('btnChangeToken').addEventListener('click', function(){
    logout();
  });

  document.getElementById('btnLetMeIn').addEventListener('click', () =>{
    let inputToken = document.getElementById('inputToken'),
        btnRememberToken = document.getElementById('btnRememberToken'),
        btnSetPassword = document.getElementById('btnSetPassword'),
        inputPassword = document.getElementById('inputPassword');

    if(onlyPassword){ // if needs only password
      password = inputPassword.value;
      inputPassword.value = '';
      login();
    }else if(!btnRememberToken.checked){ // one session token
      setToken(inputToken.value, true);
      store.set('oneSession', true);
      store.set('hasPassword', false);
      inputToken.value = '';
      inputPassword.value = '';
      login();
    }else{
      if(!btnSetPassword.checked){ // insecure token
        store.set('oneSession', false);
        // store.set('token', inputToken.value);
        setToken(inputToken.value, false);
        store.set('hasPassword', false);
        inputToken.value = '';
        inputPassword.value = '';
        login();
      }else{ // secure token
        store.set('oneSession', false);
        setToken(encrypt(inputToken.value, inputPassword.value), false);
        // store.set('token', encrypt(inputToken.value, inputPassword.value));
        store.set('hasPassword', true);
        password = inputPassword.value;
        inputToken.value = '';
        inputPassword.value = '';
        login();
      }
    }
  })

  window.addEventListener('message', event => {
    if (event.data.logout === true) logout();
  });

  window.onbeforeunload = (e) => {
    // console.log('no i will be not closed');
    // e.returnValue = false;
    client.destroy();
  }

  // botInit();

});

var windowsPos = remote.getCurrentWindow().getPosition(),
    windowsSize = remote.getCurrentWindow().getSize(),
    lastPos = 0,
    lastSize = 0,
    lastInterval = 0.350;

remote.getCurrentWindow().on('move', () => {
  if( remote.process.uptime() - lastPos > lastInterval){
    lastPos = remote.process.uptime();
    // console.log('lastPos', lastPos);
    if(windowsPos[0] !== remote.getCurrentWindow().getPosition()[0] || windowsPos[1] !== remote.getCurrentWindow().getPosition()[1]){
      windowsPos =  remote.getCurrentWindow().getPosition();
      // console.log(`pos x: ${windowsPos[0]} y: ${windowsPos[1]}`);
      store.set('posX', windowsPos[0]);
      store.set('posY', windowsPos[1]);
    }
  }
})

remote.getCurrentWindow().on('resize', () => {
  if(windowsSize[0] !== remote.getCurrentWindow().getSize()[0] || windowsSize[1] !== remote.getCurrentWindow().getSize()[1]){
    windowsSize =  remote.getCurrentWindow().getSize();
    // console.log(`size x: ${windowsSize[0]} y: ${windowsSize[1]}`);
    store.set('sizeX', windowsSize[0]);
    store.set('sizeY', windowsSize[1]);
  }
})

function hasPassword(){
  return store.get('hasPassword');
}

function getToken(){
  if(oneSession)
    return token;
  else
    return store.get('token');
}

function setToken(_token, _oneSession = false){
  if(_oneSession){
    token = _token;
    oneSession = _oneSession;
    store.set('token', '');
  }else{
    store.set('token', _token);
  }
}

function encrypt(token, secret){
  return CryptoJS.AES.encrypt(token, secret).toString();
}

function decrypt(token, secret){
  return CryptoJS.AES.decrypt(token, secret).toString(CryptoJS.enc.Utf8);
}

function logout(){
  store.set('token', '');
  store.set('oneSession', true);
  store.set('hasPassword', false);
  remote.getCurrentWindow().reload();
}

function hasEncrypted(string){
  return string.match(tokenRegex);
}

// const myContextMenu = remote.Menu.buildFromTemplate ([
//   { type: 'separator' },
//   { label: 'nothing here'},
//   { type: 'separator' },
//   // { label: 'Start', click() { console.log('Start the app') } }
//   ])
  
//   window.addEventListener('contextmenu', (event) => {
//    event.preventDefault();
//    myContextMenu.popup();
// })
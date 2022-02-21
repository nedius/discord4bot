<template>
    <div class="loginArt">
        <div class="loginCard">
            <div class="loginHeader">Welcome Back!</div>
            <div class="loginSubTitle">We're so excited to see you again!</div>

            <div class="loginBlock">
                <!-- <v-text-field
                    label="Token"
                    :rules="rules"
                    hide-details="auto"
                ></v-text-field> -->
                <div class="loginBlockInput">
                    <h5 class="loginH5" for="loginPass">Token</h5>
                    <input v-model="token" @keydown.enter="attemptLogin" type="password" name="pass" class="loginPass" id="loginPass">
                </div>
                <div class="loginText">Need a token ? <a href="https://discordapp.com/developers">Go grab it here</a></div>
                <div class="loginText">Remember token ? <n-switch v-model="rememberToken"></n-switch> </div>
                
                <!-- <v-switch v-model="rememberToken" @click="test" color="primary"></v-switch> -->
                <!-- <input type="checkbox" name="rememberMe" id="loginRemember">
                <v-switch
                    v-model="rememberToken"
                ></v-switch> -->
                <button class="loginButton" @click="attemptLogin">Let me in !!</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Login',

    data () {
      return {
        token: undefined,
        rememberToken: false,
      }
    },

    mounted() {
        // 
    },
    
    methods:{
        attemptLogin(){
            console.log(`attempt to login`);
            console.log(`rememberToken: ${this.rememberToken}`);
            this.$router.push({name: "default"});
        },
    }
}
</script>

<style scoped>
    .loginArt{
        width: 100%;
        max-width: 100%;
        max-height: 100%;
        margin: auto;
        overflow: auto;

        background-image: url("../assets/loginart.jpg");
        background-size: cover;
        background-position: center;
    }
    
    .loginCard{
        width: 480px;
        padding: 40px;
        font-size: 18px;
        color: var(--text-normal);
        background-color: var(--background-primary);
        -webkit-box-shadow: 0 2px 10px 0 rgba(0,0,0,.2);
        box-shadow: 0 2px 10px 0 rgba(0,0,0,.2);
        border-radius: 5px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .loginHeader{
        font-size: 26px;
        line-height: 32px;
        margin-bottom: 8px;
        font-weight: 300;
        color: var(--text-normal);
        text-align: center;
    }

    .loginSubTitle{
        color: var(--text-muted);
        font-size: 18px;
        line-height: 22px;
        font-weight: 500;
        padding: 5px;
        border-bottom: 1px solid #72767d;
        word-break: break-all;
        text-align: center;
    }

    .loginBlock{
        width: 100%;
        text-align: left;
        margin-top: 5px;
    }

    .loginBlockInput{
        margin-bottom: 10px;
    }

    .loginH5{
        color: var(--channels-default);
        margin-bottom: 8px;
        margin-top: 20px;
        font-size: 12px;
        line-height: 16px;
        font-weight: 600;
        text-transform: uppercase;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        cursor: default;
        text-align: left;
    }

    .loginPass{
        padding: 10px;
        height: 40px;
        font-size: 16px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 100%;
        border-radius: 3px;
        color: var(--text-normal);
        background-color: var(--deprecated-text-input-bg);
        border: 1px solid var(--deprecated-text-input-border);
    }

    .loginPass:hover{
        border-color: var(--deprecated-text-input-border-hover);
    }

    .loginPass:focus{
        border-color: var(--text-link);
    }

    .loginText{
        color: var(--channels-default); 
        margin-bottom: 20px;
        margin-top: 4px;
        font-size: 14px;
    }

    .loginButton{
        color: #fff;
        background-color: var(--brand-experiment);;
        margin-bottom: 8px;
        width: 100%;
        min-width: 130px;
        min-height: 44px;
        transition: background-color .17s ease,color .17s ease;
        border-radius: 3px;
        font-size: 14px;
        padding: 2px 16px;
    }

    .loginButton:hover{
        background-color: var(--brand-experiment-560);;
    }

    .loginButton:active{
        background-color: var(--brand-experiment-600);;
    }
</style>

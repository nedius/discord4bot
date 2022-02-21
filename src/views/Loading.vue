<template>
    <div>
        <div class="_container">
            <img class="logo" src="../assets/logo.png" alt="fleme logo">
            <RandomText></RandomText>
            <br>
            <p class="connectingText">Connecting {{  }}</p>
            <br>
            <router-link to="/default">goto Default</router-link>
            <br>
            <router-link to="/login">goto Login</router-link>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import RandomText from '@/components/RandomText.vue'

export default {
    name: 'Loading',
    components: {
        RandomText
    },

    data () {
        return {
            loadingInterval: undefined,
            loadingProgress: 0,
        }
    },

    mounted() {
        // this.tryLogin()
        //     .then(result => {
        //         console.log(result);
        //         this.$router.push({name: "login"});
        //     })
        //     .catch(result => {
        //         console.log(result)
        //         this.$router.push({name: "default"});
        //     });
    },
    
    methods:{
        startLoading(){
            this.loadingInterval = setInterval(() => {
                this.loadingProgress++;
                this.updateProgress();
            }, 1000);
        },
        updateProgress(){
            
        },
        tryLogin(){
            return new Promise((resolve, reject) => {
                let random = Math.random();
                console.log(random);
                if(random > .5){
                    setTimeout(() => {resolve(true);}, 2500);
                }else{
                    setTimeout(() => {reject(false);}, 2500);
                }
            });
        },
    }
}
</script>

<style scoped>
    ._container{
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        text-align: center;
    }

    .logo{
        width: 140px;
        height: auto;
        filter: grayscale(1);
        margin-bottom: 20px;
    }

    .connectingText{
        color: var(--text-muted);
    }
</style>

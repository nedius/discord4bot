<template>
    <div class="listItem">
        <div class="wrapper">
            <img class="guildImage" draggable="false" src="../assets/placeholder.png" alt="guild">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'n-guild',

        data () {
            return {
                
            }
        },

        props: {
            guild: Object,
            selected: Boolean,
            hasNewMessage: Boolean,
        },

        // mounted() {

        // },
        
        methods:{

        }
    }
</script>

<style scoped>
    .listItem{
        position: relative;
        margin: 0 0 8px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 72px;
        border-radius: 100%;
    }

    .listItem:active > .wrapper{
        position: relative;
        top: 2px;
    }

    .listItem:hover::before{
        content: '';
        /* position: relative; */
        left: 0;
        top: 50%;
        transform: translateY(-50%);

        overflow: hidden;
        /* width: 8px; */
        height: 20px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: start;
        justify-content: flex-start;
        contain: layout size;

        position: absolute;
        display: block;
        width: 8px;
        border-radius: 0 4px 4px 0;
        margin-left: -4px;
        background-color: var(--header-primary);

        transition: height ease-in-out .25s;
    }

    .guildSelected{
        border-radius: 30%;
    }

    .guildSelected::before{
        content: '';
        /* position: relative; */
        left: 0;
        top: 50% !important;
        transform: translateY(-50%);

        overflow: hidden;
        /* width: 8px; */
        height: 48px !important;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: start;
        justify-content: flex-start;
        contain: layout size;

        position: absolute;
        display: block;
        width: 8px;
        border-radius: 0 4px 4px 0;
        margin-left: -4px;
        background-color: var(--header-primary);

        transition: height ease-in-out .25s;
    }

    .newMessage::before{
        content: '';
        /* position: relative; */
        left: 0;
        top: 50% !important;
        transform: translateY(-50%);

        overflow: hidden;
        /* width: 8px; */
        height: 10px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: start;
        justify-content: flex-start;
        contain: layout size;

        position: absolute;
        display: block;
        width: 8px;
        border-radius: 0 4px 4px 0;
        margin-left: -4px;
        background-color: var(--header-primary);
        
        transition: height ease-in-out .25s;
    }

    .wrapper{
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 48px;
        height: 48px;
        overflow: hidden;

        border-radius: inherit;
        background-color: var(--background-primary);
    }

    .guildSeparator{
        height: 2px;
        width: 32px;
        border-radius: 1px;
        background-color: var(--background-modifier-accent);
    }

    .guildImage{
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    .guildAcronym{
        position: relative;
        top: -80%;
        margin: auto;
        text-align: center;
        cursor: pointer;
    }
</style>
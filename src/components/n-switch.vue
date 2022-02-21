<template>
    <span class="authCheckboxMargin">
        <input type="checkbox" id="switch" class="authCheckbox" v-bind:checked="checked" v-on:change="$emit('change', $event.target.checked)">
        <label for="switch" class="toggle"><span></span></label>
    </span>
</template>

<script>
    export default {
        name: 'n-switch',

        data () {
            return {
                
            }
        },

        model: {
            prop: 'checked',
            event: 'change'
        },
        props: {
            checked: Boolean
        },

        // mounted() {

        // },
        
        methods:{
            toggle(){
                // toggle
            },
        }
    }
</script>

<style scoped>
    .toggle {
        position: relative;
        display: block;
        /* width: 40px;
        height: 20px; */
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        transform: translate3d(0, 0, 0);
    }
    .toggle:before {
        content: "";
        position: relative;
        top: 3px;
        left: 3px;
        width: 34px;
        height: 14px;
        display: block;
        background: #72767d;
        border-radius: 8px;
        transition: background 0.2s ease;
    }
    .toggle span {
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
        display: block;
        background: white;
        border-radius: 10px;
        box-shadow: 0 3px 8px rgba(114, 118, 125, 0.5);
        transition: all 0.2s ease;
    }
    .toggle span:before {
        content: "";
        position: absolute;
        display: block;
        margin: -18px;
        width: 56px;
        height: 56px;
        background: rgba(114, 137, 218, 0.5);
        border-radius: 50%;
        transform: scale(0);
        opacity: 1;
        pointer-events: none;
    }
    .authCheckbox:checked + .toggle:before {
        background: #9cace5;
    }
    .authCheckbox:checked + .toggle span {
        background: #7289da;
        transform: translateX(20px);
        transition: all 0.2s cubic-bezier(0.8, 0.4, 0.3, 1.25), background 0.15s ease;
        box-shadow: 0 3px 8px rgba(114, 137, 218, 0.2);
    }
    .authCheckbox:checked + .toggle span:before {
        transform: scale(1);
        opacity: 0;
        transition: all 0.4s ease;
    }

    .authCheckbox{
        display: none;
    }

    .authCheckboxMargin{
        margin-left: 10px;
        display: inline-block;
    }
</style>
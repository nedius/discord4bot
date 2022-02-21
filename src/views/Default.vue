<template>
    <div class="app1">
        <div class="app2">
            <div class="appBg"></div>
            <div class="layersApp">
                <div class="layerApp">
                    <div class="appContainer">

                        <nav class="guilds guildWrapper">
                            <div class="scrollerWrap">
                                <div id="guildContainer" class="scroller">

                                    <div class="listItem">
                                        <div class="wrapper">
                                            <img class="guildImage" draggable="false" src="../assets/placeholder.png" alt="guild">
                                        </div>
                                    </div>

                                    <div class="listItem">
                                        <div class="guildSeparator"></div>
                                    </div>

                                    <!-- guilds here -->

                                </div>
                            </div>
                        </nav>

                        <div class="base">
                            <div class="baseContent">
                                <div class="sidebar">

                                    <div class="sidebarContainer">
                                        <div class="sidebarContainer1 selectable">
                                            <header class="sidebarHeader">
                                                <h1 class="sidebarGuildName">
                                                    name
                                                </h1>
                                            </header>
                                        </div>
                                        <div class="sidebarScrollerWrap">
                                            <div id="channelContainer" class="sidebarScroller">

                                            <!-- Channels here -->

                                            </div>
                                        </div>
                                    </div>

                                    <div class="panels">
                                        <div class="usernameContainer">
                                            <div class="avatarWrapper">
                                                <img id="userImage" draggable="false" class="guildImage" src="../assets/placeholder.png" alt="guild image">
                                            </div>
                                            <div class="nameTag">
                                                <div class="nameTagUsername">bot</div>
                                                <div class="nameTagUserId">#0000</div>
                                            </div>
                                            <div class="namePanel">
                                                <div class="btnUserSettings">
                                                    <div id="clientBotTag" class="botTag">BOT</div>
                                                </div>
                                                <div id="btnAppAuthor" class="btnUserSettings selectable">
                                                    <svg name="none" aria-hidden="false" width="20" height="20" viewBox="0 0 24 24">
                                                        <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"></path>
                                                    </svg>
                                                </div>
                                                <div id="btnSetting" class="btnUserSettings selectable">
                                                    <svg name="Gear" aria-hidden="false" width="20" height="20" viewBox="0 0 24 24">
                                                        <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="chat">
                                    <div class="chatTitle">
                                        <div class="chatTitleChildren">
                                            <div class="chatTitleIcon">
                                                <svg width="24" height="24" viewBox="0 0 24 24" class="chatTitleIconSvg">
                                                    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"></path>
                                                </svg>
                                                <!-- <svg class="chatTitleIconSvg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z"></path>
                                                </svg> -->
                                            </div>
                                            <h1 class="chatTitleName">
                                                Channel name
                                            </h1>
                                        </div>
                                    </div>

                                    <div class="chatRoot">
                                        <div class="chatContent">
                                            <div class="messageWrapperRoot">
                                                <div class="messageScrollerWrap">
                                                    <div id="chatContent" class="messageScroller">

                                                        <!-- Channel Options here -->
                                                    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="memberList">
                                            <div class="memberScrollerWrap">
                                                <div id="memberDiv" class="memberScroller">

                                                    <!-- member/group name -->

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Default',

    components: {
        //
    },


    data () {
        return {
            bot:{
                guilds:{
                    cache: {

                    }
                }
            }
        }
    },

    mounted() {
        //
    },
    
    methods:{
        //
    }

}
</script>

<style scoped>
.app1{
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    z-index: auto;
    height: 100%;
}

.app2{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--background-tertiary);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
}

.appBg{
    background-color: var(--background-tertiary);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

.layersApp{
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    overflow: hidden;
    min-width: 0;
    min-height: 0;
}

.layerApp{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
}

.appContainer{
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
}

.guilds{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
}

.guildWrapper{
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 72px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    /* position: relative; */
    background-color: var(--background-tertiary)
}

.scrollerWrap{
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
}

.scroller{
    overflow-y: scroll;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
}

.scroller::-webkit-scrollbar{
    width: 0;
    height: 0;
}

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

.base{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    overflow: hidden;

    flex-direction: column;
    position: absolute;
    top: 0;
    left: 72px;
    right: 0;
    bottom: 0;
}

.baseContent{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    min-width: 0;
    min-height: 0;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
}

.base .sidebar{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    overflow: hidden;
    border-radius: 8px 0 0;
}

.sidebar{
    flex-direction: column;
    min-height: 0;
    width: 240px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    background: var(--background-secondary);
}

.panels{
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    background-color: var(--background-secondary-alt);
}

.usernameContainer{
    flex-shrink: 0;

    height: 52px;
    font-size: 14px;
    font-weight: 500;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 8px;
    margin-bottom: 1px;
}

.nameTag{
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-right: 4px;
}

.nameTagUsername{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 14px;
    line-height: 18px;
    color: var(--text-normal);
}

.nameTagUserId{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: var(--header-secondary);
    line-height: 13px;
    font-size: 12px;
    /* line-height: 16px; */
}

.namePanel{
    flex: 0 1 auto;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    flex-wrap: nowrap;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: stretch;
    align-items: stretch;
    display: -webkit-box;
    display: flex;
}

.btnUserSettings{
    line-height: 0;
    width: 32px;
    height: 32px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    border-radius: 4px;
    position: relative;
    color: var(--interactive-normal);
    /* width: auto; */
    background: transparent;
    color: currentColor;
    border: 0;
    padding: 0;
    margin: 0;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: none;
    border: none;
    border-radius: 3px;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    /* padding: 2px 16px; */
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.selectable{
    cursor: pointer !important;
}

.botTag{
    margin-left: 4px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;

    background: #7289da;
    color: #fff;

    font-size: .625em;
    font-weight: 500;
    height: 1.28em;
    padding: .072rem .275rem;
    margin-top: .075em;
    border-radius: 3px;
    text-transform: uppercase;
    vertical-align: baseline;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    line-height: 1.3;
}

.sidebarContainer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 0;
    position: relative;
    background-color: var(--background-secondary);
}

.sidebarContainer1{
    position: relative;
}

.sidebarHeader{
    position: relative;
    font-weight: 500;
    padding: 0 16px;
    height: 48px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    z-index: 3;
    -webkit-transition: background-color .1s linear;
    transition: background-color .1s linear;
    color: var(--header-primary);
    -webkit-box-shadow: var(--elevation-low);
    box-shadow: var(--elevation-low);
}

.sidebarGuildName{
    font-weight: 600;

    font-size: 16px;
    line-height: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}

.sidebarScrollerWrap{
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 90%;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
}

.sidebarScroller{
    z-index: 1;

    overflow-y: scroll;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
}

.sidebarCategoryContainer{
    position: relative;
    padding-top: 16px;
}

.sidebarCategoryWrapper{
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 24px;
    padding-right: 8px;
    padding-left: 16px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    cursor: default;
    color: var(--channels-default);
}

.sidebarCategoryIcon{
    position: absolute;
    left: 2px;
    top: 6px;
    width: 12px;
    height: 12px;
}

.sidebarCategoryIcon,.sidebarCategoryWrapper:hover{
    color: var(--interactive-hover)
}

.sidebarCategoryCollapsed .sidebarCategoryIcon {
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg)
}

.sidebarCategoryName{
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;

    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    /* color: var(--channels-default); */
}

.sidebarChannelContainer{
    position: relative;
    -webkit-transition: opacity .2s ease-in-out;
    transition: opacity .2s ease-in-out;
}

.sidebarChannelContainerOnDrag:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 8px;
    border-radius: 4px;
    z-index: -1;
    background-color: rgba(67,181,129,.1);
    border: 2px solid rgba(67,181,129,.5)
}

.sidebarChannelWrapper{
    height: 34px;
    overflow: hidden;
    position: relative;
    cursor: pointer;

    color: var(--channels-default);
}

.sidebarChannelWrapper:hover .sidebarChannelContent {
    background-color: var(--background-modifier-hover)
}

.sidebarChannelWrapper:active .sidebarChannelContent {
    background-color: var(--background-modifier-active)
}

.sidebarChannelWrapper:hover {
    color: var(--interactive-hover)
}

.sidebarChannelContent{
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 32px;
    padding: 0 8px;
    margin: 1px 0 1px 8px;
    border-radius: 4px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
}

.sidebarChannelContentIcon{
    color: var(--text-muted);

    display: block;
    width: 20px;
    height: 20px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    margin-right: 6px;
}

.sidebarChannelName{
    /* color: var(--channels-default); */

    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
}

.sidebarChannelNameOptionWrapper{
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    /* text-overflow: ellipsis; */
    /* white-space: nowrap; */
    overflow: hidden;
    -webkit-box-flex: 1;
    flex: 0 1 auto;
    color: var(--channels-default);
    display: none;
    width: 20px;
    height: 20px;
    position: relative;
}

.sidebarChannelNameOptionWrapper:hover{
    color: var(--interactive-hover);
}

.sidebarChannelWrapper:hover .sidebarChannelNameOptionWrapper {
    display: block;
}

.sidebarChannelNameOption{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.sidebarChannelList{
    padding-left: 36px;
    padding-bottom: 8px;

    -webkit-box-direction: normal;

    -webkit-box-orient: vertical;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
}

.voiceUser{
    height: 32px;

    position: relative;
    cursor: pointer;
}

.voiceUserContent{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-radius: 4px;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 1px;
    margin-bottom: 1px;

    color: var(--channels-default);
}

.voiceUserContent:hover {
    background-color: var(--background-modifier-hover);
    color: var(--interactive-hover);
}

.voiceUserContent:active {
    background-color: var(--background-modifier-active)
}

.voiceUserContent::selection {
    background-color: var(--background-modifier-selected)
}

.voiceUserAvatarContainer{
    margin-right: 8px;
    margin-left: 8px;

    width: 24px;
    height: 24px;

    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    border-radius: 50%;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    margin-top: 3px;
    margin-bottom: 3px;

    overflow: hidden;
}

.voiceUserAvatarContainer img{
    -webkit-user-drag: none;
}

.voiceUsername{
    /* color: var(--channels-default); */

    font-size: 14px;
    line-height: 18px;
    font-weight: 500;

    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.voiceUserIcons{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    margin-right: 8px;
}

.voiceUserIconsSpacing{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    margin-left: 4px;
}

.voiceUserIcon{
    color: var(--channels-default);

    width: 16px;
    height: 16px;
}

.avatarWrapper{
    margin-right: 8px;
    width: 32px;
    height: 32px;
    /* cursor: pointer; */
    flex-shrink: 0;
    position: relative;
    border-radius: 100%;
    overflow: hidden;
}

.chat{
    min-width: 0;
    min-height: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    overflow: hidden;
    background: var(--background-primary);
}

.chatTitle{
    background: var(--background-primary);

    position: relative;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    z-index: 100;

    -webkit-box-sizing: border-box;
    box-sizing: border-box;

    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    min-width: 0;
    width: 100%;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    height: 48px;
    padding: 0 8px;
    overflow: hidden;
    font-size: 16px;
    line-height: 20px;
    cursor: default;
    z-index: 2;
    color: var(--text-normal);

    -webkit-box-shadow: var(--elevation-low);
    box-shadow: var(--elevation-low);
}

.chatTitleChildren{
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    min-width: 0;
    overflow: hidden;

    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.chatTitleName{
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    margin: 0 8px 0 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    min-width: auto;
    overflow: hidden;
    white-space: nowrap;

    -webkit-box-flex: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    -webkit-box-sizing: border-box;
    box-sizing: border-box;

    font-weight: 600;
    color: var(--header-primary);

    font-size: 16px;
    line-height: 20px;
}

.chatTitleIcon{
    position: relative;
    height: 24px;
    width: auto;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    margin: 0 8px;

    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.chatTitleIconSvg{
    display: block;
    width: 24px;
    height: 24px;
    -webkit-app-region: no-drag;
    color: var(--text-muted);
}

.chatRoot{
    min-width: 0;
    min-height: 0;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: stretch;
    -ms-flex-pack: stretch;
    justify-content: stretch;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    position: relative;
}

.chatContent{
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
}

.messageWrapperRoot{
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 0;
    min-width: 0;
    z-index: 0;
}

.messageScrollerWrap{
    overflow: hidden;
    height: auto;

    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
}

.messageScroller{
    margin: 0;
    overflow-x: hidden;
    background-color: var(--background-primary);
    contain: layout size;

    overflow-y: scroll;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;

    display: flex;
    flex-direction: column;
}

.memberList{
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;

    min-width: 240px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
}

.memberScrollerWrap{
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
}

.memberScroller{
    width: 240px;
    background-color: var(--background-secondary);
    padding: 0 0 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow-y: scroll;
    overflow-x: hidden;
    /* -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto; */

    overflow-y: scroll;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
}

.memberGroup{
    padding: 24px 8px 0 16px;
    height: 40px;

    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    color: var(--channels-default);
}

.member{
    max-width: 224px;
    margin-left: 8px;

    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
    padding: 1px 0;
    border-radius: 4px;
    -webkit-transition: none;
    transition: none;
    color: var(--channels-default);
}

.member:hover{
    color: var(--interactive-hover);
    background-color: var(--background-modifier-hover);
    opacity: 1 !important;
}

.member:active{
    color: var(--interactive-active);
    background-color: var(--background-modifier-active);
}

.memberLayout{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 4px;
    height: 42px;
    padding: 0 8px;
}

.memberAvatar{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 32px;
    height: 32px;
    margin-right: 12px;
}

.memberAvatarWrapper{
    width: 32px;
    height: 32px;

    position: relative;
    /* border-radius: 50%; */
}

.memberAvatarMask{
    pointer-events: none;
    /* position: relative; */
    position: absolute;
    top: 0;
    left: 0;

    display: block;
    height: 100%;
    width: auto;

    border-radius: 25px;
}

.memberAvatarMask:nth-child(2){
    top: 20px;
    left: 20px;
    width: 16px;
    height: 16px;
    /* color: var(--background-secondary); */
    border-radius: unset;
    overflow: visible;
}

.memberAvatarMask[mobile]:nth-child(2){
    top: 15px;
}

/* .memberAvatarMask:nth-child(2) circle:nth-child(1){
    fill: var(--background-secondary);
} */

.memberContent{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    min-width: 0;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
}

.memberName{
    display: -webkit-box;
    display: -ms-flexbox;
    /* display: flex; */
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    display: flex;
    flex-flow: row;
}

.memberNameText{
    /* flex: 1; */
    overflow: hidden;
    text-overflow: ellipsis;
}

.nitroBoostIcon{
    /* flex: 1; */
    color: #ff73fa;
    width: 18px;
    height: 18px;
}

.memberSubText{
    margin-top: -2px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: flex;
    flex-direction: row;
}

.memberActivity{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 12px;
    line-height: 16px;
    color: var(--channels-default);
    font-weight: 500;
}

.memberActivityEmoji{
    margin-right: 4px;
    width: 14px;
    height: 14px;
}

.hidden{
    display: none !important;
}
</style>

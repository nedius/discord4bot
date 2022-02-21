<template>
  <div>
    <div class="text">{{ selectedRndP.text }}</div>
    <div v-if="selectedRndP.author" class="author">submitted by 
      <a v-if="selectedRndP.platform" :href="selectedRndP.link">
        @<span class="authorName">{{ selectedRndP.author }}</span>
      </a>
      <span v-else>
        <span class="authorName">{{ selectedRndP.author }}</span>
      </span>
    </div>
    <div v-else class="author hidden">...</div>
  </div>
</template>

<script>
  export default {
    name: 'RandomText',

    data: () => ({
      interval: undefined,
      selectedRndP: {},
      phrases: [
        // Default discord phrases

        // ["Wobbling to 299%","belchicola","twitter"],
        // ["DISCORD REQUIRES MORE MINERALS","LeAwesomeRohan","twitter"],
        // ["Untap, Upkeep, Draw","MRautmann","twitter"],
        // ["Traveling to Hanamura","AstroNoot88","twitter"],
        // ["TIME'S UP - LET'S DO THIS!","RobertAWing","twitter"],
        // ["This loading is a line","AirDur","twitter"],
        // ["They see me loading, They waiting","boomer_cherry","twitter"],
        // ["Start your engines","CollegeCarball","twitter"],
        // ["Skipping cutscenes","TOOMANYENEMIES","twitter"],
        // ["Shuffling the deck","MrSwats","twitter"],
        // ["Reviving dead memes","Fqdez_Awqy","twitter"],
        // ["Returning the slab","megoon_pleb","twitter"],
        // ["Recombobulating Discombobulators","HelixVexium","twitter"],
        // ["now with scratch and sniff","hahahahahapizza","twitter"],
        // ["Now with 100% more Screenshare!","Lehtinen_a_Niko","twitter"],
        // ["Dropping in Pochinki","ThatGuySolace","twitter"],
        // ["Looking for the power button","Skizz289","twitter"],
        // ["Look behind you","Lyemug","twitter"],
        // ["Locating Wumpus","BetaAnalysis","twitter"],
        // ["Loading your digital hug","Rainbeww","twitter"],
        // ["Loading Simulation","Jehbrielle","twitter"],
        // ["Jumping to hyperspace","Canton_NS","twitter"],
        // ["Is this thing on?","Ahzzey_","twitter"],
        // ["Initiating launch sequence","Steven_Fix","twitter"],
        // ["Initializing socialization","Craig_Brunet","twitter"],
        // ["If you are reading this, you can read","alex_shannessy","twitter"],
        // ["I swear it's around here somewhere...","Pydrex_","twitter"],
        // ["i need healing","tearybunnie","twitter"],
        // ["how do i turn this thing on","asdfghjklibbyx","twitter"],
        // ["Loading machine broke","BOOK_FREE_","twitter"],
        // ["Get ready for a surprise!","strauberrybrony","twitter"],
        // ["Finishing this senta...","ParksterW33","twitter"],
        // ["Dusting the cobwebs","glennanderson42","twitter"],
        // ["Do you even notice these?","Bion234","twitter"],
        // ["Opening the loading bay doors","PizzablawkCP","twitter"],
        // ["Discord is my city","SniperHeat112","twitter"],
        // ["Disconnecting from Reality","HeyitWilliamHYT","twitter"],
        // ["Charging spirit bomb","marou_sama","twitter"],
        // ["Charging Limit Break","ChronWriter3511","twitter"],
        // ["Calibrating flux capacitors","ItsChiefGrief","twitter"],
        // ["Buckle up!","wulf_tfk","twitter"],
        // ["Assembling Voltron","ash_10saller","twitter"],
        // ["Are we there yet?","HeadlessHorror","twitter"],
        // ["A brawl is surely brewing!","MemeMasterMeme","twitter"],
        // ["LOADING 001: ARP 303 Saw","VITICZ","twitter"],
        // ["*Elevator Music Plays*","Luminosity48","twitter"],
        // ["Researching cheat codes","Enderfoo_","twitter"],
        // ["Wizard needs food badly",null,null],
        // ["Decrypting Engrams",null,null],
        // ["And now for something completely different",null,null],
        // ["Stopping to smell the flowers",null,null],
        // ["Achieving Nirvana",null,null],
        // ["Managing Inventory",null,null]

        ["They ඞ are among us !!!", "nedius", "github"],
        ["Is this live?", "developer", null],
        ["Rainbow has 7 colors", "anonymous", null],
        ["Don't be scared", null, null],
      ],
    }),

    mounted() {
      this.selectRandomPhrase();
      this.interval = setInterval(() => {
        this.selectRandomPhrase();
      }, 5 * 1000);
    },

    destroyed() {
      clearInterval(this.interval);
    },
    
    methods:{
        selectRandomPhrase(){
          let phrase = this.getRandomPhrase();
          this.setRandomPhrase({
            text: phrase[0],
            author: phrase[1],
            platform: phrase[2],
          });
        },
        getPlatformDomainSpace(platform){
          switch (platform) {
            case 'twitter':
              return 'com';
            case 'github':
              return 'com';
            
            default:
              return 'com';
          }
        },
        setRandomPhrase(obj){
          if(obj.platform){
            obj.link = `https://${obj.platform}.${this.getPlatformDomainSpace(obj.platform)}/${obj.author}`;
          }else {
            obj.link = ``;
          }
          this.selectedRndP = obj;
        },
        getRandomPhrase(){
          return this.phrases[Math.floor(Math.random() * this.phrases.length )];
        },
    }
  }
</script>

<style scoped>
  .text{
    font-style: italic;
    font-size: larger;
    color: var(--header-primary);
    text-transform: uppercase;
  }

  .author{
    font-size: small;
    color: var(--text-muted);
    text-transform: uppercase;
  }

  a{
    color: var(--text-muted);
  }

  .authorName{
    font-weight: bold;
  }

  .hidden{
    color: var(--background-primary);
  }
</style>
<template>
  <div class='container'>
    <div class='timer'>01:45:22</div>
    <div class='modules'>
      <div class='menu'>
        <span class='menuOption' v-on:click='currentElement(0)'>equipment</span>
        <span class='menuOption' v-on:click='currentElement(1)'>riddle</span>
        <span class='menuOption' v-on:click='currentElement(2)'>Log out</span>
      </div>
      <div class='module'>
        <equipment v-if='displayValue() == 0'></equipment>
        <riddles v-else-if='displayValue() == 1'></riddles>
        <log-out v-else-if='displayValue() == 2'></log-out>
      </div>
    </div> 
  </div>
</template>

<script>
import equipment from './equipment.vue';
import logOut from './logOut.vue';
import riddles from './riddles.vue';




export default {
  name: 'rightModule',
  components:{
    equipment,
    riddles,
    logOut
   
  },
  methods:{
    displayValue:function(){
      return this.display;
    },
    currentElement:function(x){
      this.display = x;
    },

  },
  data:function(){
    return{
      display:0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  width:40%;
  height:100%;
  background-color: #bafbaf;
  display:flex;
  flex-direction: column;
}
.timer{
  width:100%;
  height:10%;
  background-color:aqua;
  font-weight: bold;
  font-size:2.5em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.modules{
  width:100%;
  height:90%;
  background-color: beige;
}

.module{
  width:100%;
  height:95%;
}
.menu
{
  width:100%;
  height:5%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: stretch;
  align-items: center;
}

.menuOption{
  margin-left:1.2em;
  box-sizing:border-box;
  padding:10px;
}

.menuOption:hover{
  transition:0.2s;
  font-size:1.2em;
  font-weight:bold;
}

</style>

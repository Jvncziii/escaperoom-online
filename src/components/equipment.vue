<template>
  <div class='equipment'>
      <img v-for='sources in renderImg' :key="sources" :src='sources'>
  </div>
</template>

<script>
import { firebase } from '@firebase/app'
import '@firebase/database'
export default {
  async beforeMount(){
    await this.equipChange();
  },
  name: 'equipment',
  
  data() {
    return {
      photos:{
        photo1:{src:false},
        photo2:{src:false},
        photo3:{src:false},
        photo4:{src:false},
        photo5:{src:false}
      },
      isModalVisible:false
    }
  },
  methods: {
   equipChange:function(){
      const refObj = firebase.database().ref('/equipment');
      
      refObj.on('value',snap=>{
        this.photos = snap.val()
      })
   }
  },
  computed:{
    renderImg:function()
    {
      let trueArray = []
      for(let x = 0;x<Object.entries(this.photos).length;x++)
      {
        if(Object.entries(this.photos)[x][1].src != false)
        trueArray.push(Object.entries(this.photos)[x][1].src)
      }
      return trueArray
    }
  }
}
</script>

<style scoped>
.equipment{
    width:100%;
    height:100%;
    box-sizing: border-box;
    padding:10px;
    display: grid;
   grid-template-columns: repeat(3, 1fr);
   justify-content: space-evenly;
}

img{
  width:128px;
  height:128px;
  margin-left:auto;
  margin-right:auto;
}

</style>

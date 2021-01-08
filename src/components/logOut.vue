<template>
  <div>
    <span v-if='logged'>Zalogowano</span>
    <button v-if='logged' @click='signOut'>Log out</button>
  </div>
</template>

<script>
import { firebase } from '@firebase/app'
import '@firebase/auth'
export default {
  created(){
    firebase.auth().onAuthStateChanged(user=>{
     this.logged = !!user
    })
  },
  name: 'logOut',
  methods:{
    async signOut(){
      try {
        const data = await firebase.auth().signOut()
        console.log(data)
        this.$router.replace({name:'login'})
      } catch (err) {
        console.log(err)
      }
    }
  },
  data(){
    return{
      logged: false
    }
  }
}
</script>

<style scoped>

</style>

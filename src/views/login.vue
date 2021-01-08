<template>
  <div>
      <form @submit.prevent='pressed'>
        <input type='email' placeholder="email" v-model='email'>
        <input type='password' placeholder="password" v-model='password'>
        <button type='submit'>Login</button>
      </form>
      <div v-if='error'>{{err.message}}</div>
  </div>
</template>

<script>
import { firebase } from '@firebase/app'
import '@firebase/auth'
export default {
  name: 'login',
  methods:{
      async pressed(){
          try{
            const val = await firebase.auth().signInWithEmailAndPassword(this.email,this.password)
            console.log(val)
            this.$router.replace({name:'user'})
          }catch(err){
              console.log(err)
          }
      }
  },
  data(){
      return{
          email:'',
          password:'',
          error:''
      }
  }
}
</script>

<template>
  <div>
    <log-out></log-out>
      <button @click='changePhoto(1,1)'>Photo1 ON</button>
      <button @click='changePhoto(1,0)'>Photo1 OFF</button><br>
      <button @click='changePhoto(2,1)'>Photo2 ON</button>
      <button @click='changePhoto(2,0)'>Photo2 OFF</button><br>
      <button @click='changePhoto(3,1)'>Photo3 ON</button>
      <button @click='changePhoto(3,0)'>Photo3 OFF</button><br>
      <button @click='changePhoto(4,1)'>Photo4 ON</button>
      <button @click='changePhoto(4,0)'>Photo4 OFF</button><br>
      <button @click='changePhoto(5,1)'>Photo5 ON</button>
      <button @click='changePhoto(5,0)'>Photo5 OFF</button>
  </div>
</template>

<script>
import { firebase } from '@firebase/app'
import '@firebase/database'
import logOut from '../components/logOut.vue'
export default {
  components: { logOut },
  name: 'admin',
  methods: {
    changePhoto:function(photoNumber,status){
      if(status == 0)
      {
        firebase.database().ref('/equipment/photo'+photoNumber).set({
            src: false,
          });
      }else
      firebase.database().ref('/equipment/photo'+photoNumber).set({
            src: this.photos[photoNumber-1]
          });

    }
  },
  data() {
    return {
      photos:['https://i.pinimg.com/originals/9c/d3/e5/9cd3e5549ff14cd6d4d6ba3cef963d6a.png','https://img5.gram.pl/fullavatars/152851.gif','https://www.wykop.pl/cdn/c3201142/comment_AFGxZVXsHpcYJ8fF4rUazHruxsgH0ZZA,w400.jpg','https://avatarfiles.alphacoders.com/215/215753.jpg','https://pbs.twimg.com/profile_images/378800000478240318/f2fc7a4b01ced45f4289242c51fa05c7.png']
    }
  },
  
}
</script>

<template>
  <div class='container'>
      <videoModule></videoModule>
      <rightModule>
        <equipment></equipment>
        <riddles></riddles>
        <log-out></log-out>
      </rightModule>

  </div>
</template>

<script>
import equipment from '../components/equipment.vue'
import videoModule from '../components/videoModule.vue'
import rightModule from '../components/rightModule.vue'
import riddles from '../components/riddles.vue'
import LogOut from '../components/logOut.vue'

export default {
  name: 'user',
  components:{
    videoModule,
    rightModule,
    riddles,
    equipment,
    LogOut
  }
}
</script>


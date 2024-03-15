<template>
  <div>About
  
    <div>
      <Profile />
    </div>
  </div>

</template>

<script>
import Vue from 'vue';

// import {} from 'vue'

const Profile = Vue.extend({
  // functional: true,
  template: '<div>{{msg}}</div>',
  data() {
    return {
      msg: 'Profile'
    }
  },
  // render(h, ctx) {
  //   console.log(ctx)
  //   return (
  //     <div class="red">{ctx.data.msg}</div>
  //   )
  // }
})

export default {
  name: 'LkAbout',
  components: {
    Profile,
  }
}
</script>

<style scoped>
.red {
  background-color: red;
  color: white;
}
</style>
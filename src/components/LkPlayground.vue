<template>
  <div>
    LkPlayer

    <input v-hello:msg="3" />


    <button @click="$emit('msg', 'hello, leehow!')">send a message</button>

    <button @click="isShow = !isShow">animate</button>
    <transition appear name="hello">
      <div id="aniDiv" v-show="isShow">animation div</div>
    </transition>


    <transition 
      appear
      enter-active-class="animate__animated animate__bounce"
    >

      <div style="background-color: cyan;">animate.css</div>
    </transition>


    <slot-demo>
      <template slot-scope="slotProps">
        {{slotProps}}
      </template>
    </slot-demo>
  </div>
</template>

<script>
import 'animate.css'

import SlotDemo from './SlotDemo.vue'
export default {
  name: "LkPlayground",
  data() {
    return {
      isShow: true,
    };
  },
  components: {
    SlotDemo
  }
}
</script>

<style scoped>

#aniDiv {
  background-color: blue;
  color: white;
}
.hello-enter-active {
  animation: anis 0.25s linear;
}

.hello-leave-active {
  animation: anis 0.25s linear reverse;
}

@keyframes anis {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
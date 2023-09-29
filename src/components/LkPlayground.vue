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

    <count />


    <demo />

    <div>{{msg}}</div>
    <div>{{message}}</div>

    <div>{{ person.name }}-{{ person.age }}</div>
    <button @click="person.name += '!',person.age+=1">change person info</button>
  </div>
</template>

<script>
import 'animate.css'
import {mapState, mapGetters} from 'vuex'
import SlotDemo from './SlotDemo.vue'
import Demo from './Demo.vue'
import Count from './Count.vue'
export default {
  name: "LkPlayground",
  data() {
    return {
      isShow: true,
      person: {
        name: 'lee how',
        age: 12
      }
    };
  },
  components: {
    SlotDemo,
    Count,
    Demo
  },
  computed: {
    ...mapState('countModel', ['msg']),
    ...mapGetters('countModel',['message'])
  },
  mounted() {
    console.log(this)
  },
  watch: {
    person: {
      deep: true,
      handler(value, oldValue){
        console.log(value)
        console.log(oldValue)
      }
    }
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
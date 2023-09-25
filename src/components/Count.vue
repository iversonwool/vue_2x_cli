<template>
  <div>
    <h2>sum is {{sum}}</h2>

    <button @click="increment(1)"> + </button>&nbsp;&nbsp;&nbsp;&nbsp;
    <button @click="decrement(1)"> - </button>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'MyCount',
  // data() {
  //   return {
  //     sum: 0
  //   }
  // },

  computed: {
    ...mapState('countModel', ['sum'])
  },
  methods: {
    // increment() {
    //   this.$store.dispatch('increment', 1)
    // },
    // decrement() {
    //   this.$store.commit('DECREMENT', 1)
    // }
    ...mapMutations('countModel', {increment:'INCREMENT', decrement: 'DECREMENT'})
  },
}
</script>

<style>

</style>
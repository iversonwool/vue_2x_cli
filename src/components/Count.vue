<template>
  <div>
    <h2>sum is {{$store.state.sum}}</h2>

    <button @click="increment"> + </button>&nbsp;&nbsp;&nbsp;&nbsp;
    <button @click="decrement"> - </button>
  </div>
</template>

<script>
export default {
  name: 'MyCount',
  // data() {
  //   return {
  //     sum: 0
  //   }
  // },
  methods: {
    increment() {
      this.$store.dispatch('increment', 1)
    },
    decrement() {
      this.$store.commit('DECREMENT', 1)
    }
  },
}
</script>

<style>

</style>
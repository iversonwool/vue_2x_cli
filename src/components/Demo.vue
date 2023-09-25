<template>
  <div>{{msg}}</div>
</template>

<script>
export default {
  name: 'MyDemo',
  data() {
    return {
      msg: 'Hello, Demo!'
    }
  },
}
</script>

<style scoped>
div {
  background-color: saddlebrown;
  color: white;
}
</style>
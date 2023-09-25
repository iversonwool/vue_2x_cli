<template>
  <div class="bg">
    <slot :users="users"></slot>
  </div>
</template>

<script>
export default {
  name: 'SlotDemo',
  data() {
    return {
      users: [
        {id: '1', name: 'Mike'},
        {id: '2', name: 'Jack'},
      ]
    }
  },
}
</script>

<style scoped>
.bg {
  background-color: cadetblue;
}
</style>
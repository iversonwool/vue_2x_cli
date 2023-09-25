<template>
  <div>
    <h2>Demo Component</h2>
    {{msg}}
    <ul>
      <li v-for="user in personList" :key="user.id">{{user.name}}</li>
    </ul>

    <h3>{{firstPersonName}}</h3>

    <button @click="addPerson">Create Tom</button>
    <button @click="addGreen">Add Green</button>
  </div>

</template>

<script>
export default {
  name: 'MyDemo',
  data() {
    return {
      msg: 'Hello, Demo!'
    }
  },
  computed: {
    personList() {
      return this.$store.state.userModel.users
    },
    firstPersonName() {
      return this.$store.getters['userModel/firstPersonName']
    }
  },
  methods: {
    addPerson() {
      this.$store.dispatch('userModel/createUser', {id: 'slslsls', name: 'Tom'})
    },
    addGreen() {
      this.$store.commit('userModel/CREATE_USER', {id: 'djksjkdsk', name: 'Green'})
    }
  }
}
</script>

<style scoped>
div {
  background-color: saddlebrown;
  color: white;
}
</style>
import Vue from 'vue'

Vue.component('TestTemplate', {
  
})

const Test2 = Vue.extend({
  data() {
    return {
      message: 'this is a test 2'
    }
  },
  template: `
    <div class="hello">{{ message }}</div>
  `,
  render() {
    return (
      <div class="hee"></div>
    )
  }
})
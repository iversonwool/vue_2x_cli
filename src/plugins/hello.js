export default {
  install(Vue, options) {
    Vue.directive('hello', {
      inserted(ele, binding) {
        ele.focus()
        console.log(binding)
      }
    })
  }
}
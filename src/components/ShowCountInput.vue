<template>
  <!-- <component :is="elementType" v-bind="$attrs">
  </component>
  <span class="limitCount">{{ textLength }}/{{ maxCharLength }}</span> -->

  <div class="container">
    <el-input v-bind="$attrs" v-on="$listeners" @input="onChange" />
    <span class="limitCount">{{ textLength }}/{{ maxLength }}</span>
  </div>
</template>

<script>
export default {
  model: {
    event: 'inputChange'
  },
  props: {
    maxLength: {
      type: Number,
      default: 20
    }
  },
  data() {
    return {
      textLength: 0
    }
  },
  methods: {
    onChange(e) {
      let b = 0 // 输入的字符数
      for (let i = 0, length = e.length; i < length; i++) {
        const c = e.charAt(i)
        if (/^[\u0000-\u00ff]$/.test(c)) {
          b++
        } else {
          b += 2
        }
        if (b > this.maxLength) {
          this.$emit('inputChange', e.substr(0, i))
          if (/^[\u0000-\u00ff]$/.test(c)) {
            b--
          } else {
            b -= 2
          }
          break
        } else {
          this.$emit('inputChange', e)
        }
      }
      if (b === 0) {
        /** 清空操作 */
        this.$emit('inputChange', e)
      }
      this.textLength = b
    }
  }
  // computed: {
  //   elementType() {
  //     return 'el-input'
  //   }
  // }
}
</script>

<style lang="less" scoped>
.limitCount {
  position: absolute;
  right: 10px;
  bottom: 10px;
  color: rgba(0, 0, 0, 0.5);
}
</style>

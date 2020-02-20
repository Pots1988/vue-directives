<template>
  <button
    class="btn"
    @click="change"
  >
    <span>Default </span>
    <slot>your text</slot>
    {{ a }}
  </button>
</template>

<script>
export default {
  name: 'Button',

  data () {
    return {
      a: 0
    }
  },

  props: {
    size: {
      type: String,
      default: '10'
    }
  },

  methods: {
    change () {
      console.log('Parent')
    }
  }
}
</script>

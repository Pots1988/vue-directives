<template>
  <div>
    <input
      type="text"
      name=""
      id=""
      v-focus
      v-clipboardCopy:copy="coppied"
    />
    <div
      v-sticky:click.bottom.right="stickyFunc"
      class="message"
    >Some custom text</div>
  </div>
</template>

<script>
import focus from '@/directives/focus'
import clipboardCopy from '@/directives/clipboardCopy'
import sticky from '@/directives/sticky'

export default {
  name: 'home',

  directives: {
    focus,
    clipboardCopy,
    sticky
  },

  data () {
    return {
      text1: 'Some text1',
      text2: 'Somet text2'
    }
  },

  methods: {
    coppied () {
      console.log('Coppied')
    },
    stickyFunc () {
      console.log('stickyFunc')
    }
  }
}
</script>

<style lang="scss">
  .message {
    background: rgba(123, 123, 123, 0.5);
    padding: 10px;
    font-size: 18px;
    line-height: 1.5;
    border-radius: 5px;
    cursor: pointer;
  }
</style>

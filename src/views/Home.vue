<template>
  <div>
    <input
      type="text"
      name=""
      id=""
      v-focus
    />
    <p v-clipboardCopy:click.top="{
      text: textForCopy,
      callback: coppied
    }">Element for click directive</p>
    <Container v-sticky:click.bottom.right="stickyFunc">Some text for directive</Container>
  </div>
</template>

<script>
import focus from '@/directives/focus'
import clipboardCopy from '@/directives/clipboardCopy'
import sticky from '@/directives/sticky'
import Container from '@/components/Container'

export default {
  name: 'home',

  components: {
    Container
  },

  directives: {
    focus,
    clipboardCopy,
    sticky
  },

  data () {
    return {
      text1: 'Some text1',
      text2: 'Somet text2',
      textForCopy: 'Some text'
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

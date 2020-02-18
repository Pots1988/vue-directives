<template>
  <div class="about">
    <button @click="showBlock = !showBlock">Trigger animation</button>
    <transition name="anim">
      <div
        class="block"
        v-if="showBlock"
      >Some text</div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'About',

  data () {
    return {
      showBlock: false
    }
  },

  created () {
    this.$myCustomPlugin.showMessage()
  }
}
</script>

<style lang="scss">
  .block {
    width: 300px;
    height: 100px;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff
  }

  .anim-enter {
    background: red;
  }

  .anim-enter-active {
    transition: background-color 2s;
  }

  .anim-enter-to {
    background: green;
  }

  .anim-leave {
    opacity: 1;
  }

  .anim-leave-active {
    transition: opacity 2s;
  }

  .anim-leave-to {
    opacity: 0;
  }
</style>

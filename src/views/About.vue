<template>
  <div class="about">
    <button @click="showBlock = !showBlock">Trigger animation</button>
    <transition
      name="anim"
      appear
    >
      <div
        class="block"
        v-if="showBlock"
      >Some text</div>
    </transition>

    <!-- <Button /> -->
    <!-- <Button>Custom text</Button> -->
    <ExtendedButton />
  </div>
</template>

<script>
// import Button from '@/components/Button'
import ExtendedButton from '@/components/ExtendedButton'

export default {
  name: 'About',

  components: {
    // Button,
    ExtendedButton
  },

  data () {
    return {
      showBlock: true
    }
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
    opacity: 0;
  }

  .anim-enter-active {
    transition: 2s;
  }

  .anim-enter-to {
    background: green;
  }

  .anim-leave-active {
    transition: 2s;
  }

  .anim-leave-to {
    opacity: 0;
  }
</style>

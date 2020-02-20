<script>
import Button from '@/components/Button'

export default {
  name: 'ExtenedButton',

  extends: Button,

  methods: {
    change () {
      console.log('Child')
    }
  }
}
</script>

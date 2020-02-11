const optionsDefaults = {
  message: 'Some message',

  showMessage () {
    console.log(this.message)
  }
}

export default {
  install (Vue, opts) {
    console.log('My plugin installed')
    const options = { ...optionsDefaults, ...opts }

    Vue.prototype.$myCustomPlugin = options
  }
}

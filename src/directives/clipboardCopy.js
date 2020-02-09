const copyFunc = (text, callback, position) => {
  return () => {
    console.log('Click')
    const el = document.createElement('textarea')
    el.value = text
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)

    const copiedObj = document.createElement('div')
    copiedObj.style.position = 'absolute'
    copiedObj.style.padding = '10px'
    copiedObj.style.borderRadius = '5px'
    copiedObj.style.backgroundColor = 'rgba(123, 123, 123, 0.5)'
    copiedObj.textContent = 'copied'

    if (Object.keys(position).length) {
      for (const key in position) {
        if (key in document.body.style) {
          switch (key) {
            case 'bottom':
              copiedObj.top = '100%'
              copiedObj.marginTop = '10px'
              break
            case 'top':
              copiedObj.bottom = '100%'
              copiedObj.marginBottom = '10px'
              break
            case 'left':
              copiedObj.right = '100%'
              copiedObj.marginRight = '10px'
              break
            case 'right':
              copiedObj.left = '100%'
              copiedObj.marginLeft = '10px'
              break
          }
        }
      }
    } else {
      copiedObj.left = '50%'
      copiedObj.bottom = '100%'
      copiedObj.transform = 'translateX(-50%)'
      copiedObj.marginBottom = '10px'
    }

    document.body.appendChild(copiedObj)

    setTimeout(() => {
      copiedObj.remove()
    }, 1000)

    if (callback) {
      setTimeout(callback, 1000)
    }
  }
}

export default {
  bind (el, { arg, value, modifiers }) {
    if (arg && `on${arg}` in window) {
      const text = typeof value === 'object' ? value.text : value

      const { callback = null } = value

      if (text.length) {
        el.style.position = 'relative'
        el.addEventListener(arg, copyFunc(text, callback, modifiers))
      }
    }
  },
  unbind (el, { arg }) {
    if (arg && `on${arg}` in window) {
      el.style.position = ''
      el.removeEventListener(arg, copyFunc())
    }
  }
}

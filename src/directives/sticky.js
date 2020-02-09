const checkRules = (arg, value) => {
  return arg && value && typeof value === 'function' && `on${arg}` in window
}

export default {
  bind (el, { arg, value, modifiers }) {
    el.style.position = 'fixed'

    for (const key in modifiers) {
      el.style[key] = '10px'
    }

    if (checkRules(arg, value)) {
      el.addEventListener(arg, value)
    }
  },

  unbind (el, { arg, value }) {
    if (checkRules) {
      el.removeEventListener(arg, value)
    }
  }
}

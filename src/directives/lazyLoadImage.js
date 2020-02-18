export default {
  // v-lazyLoadImage.background - when we you need to lazyLoad background
  // v-lazyLoadImage.global - when we you need to lazyLoad background
  // v-lazyLoadImage - default using
  inserted: (el, { modifiers }) => {
    const loadImage = obj => {
      if (modifiers.background) {
        obj.classList.add('observe-visible')
      } else {
        if (obj.nodeName !== 'IMG') return
        obj.src = el.dataset.src
        obj.removeAttribute('data-src')
      }

      obj.classList.remove('lazy')
    }

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const loadObj = entry.target
          loadImage(loadObj)
          observer.unobserve(loadObj)
        }
      });
    };

    const createObserver = () => {
      const options = {
        root: null,
        threshold: '0'
      }

      const observer = new IntersectionObserver(handleIntersect, options);

      if (modifiers.global) {
        el.querySelectorAll('.lazy').forEach(image => {
          observer.observe(image)
        })
      } else {
        observer.observe(el)
      }
    }

    !window['IntersectionObserver'] ? loadImage() : createObserver()
  }
}

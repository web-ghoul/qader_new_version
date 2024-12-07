export default class Observer {
  element: HTMLElement
  observer!: IntersectionObserver

  constructor({ element }: { element: HTMLElement }) {
    this.element = element
    this._createObserver()
  }

  _createObserver() {
    const options = {
      rootMargin: '0px',
      threshold: 1,
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.onEnter()
        } else {
          this.onLeave()
        }
      })
    }, options)

    if(this.observer && this.element ){
      this.observer.observe(this.element)

    }

  }

  onEnter() {}
  onLeave() {}
}

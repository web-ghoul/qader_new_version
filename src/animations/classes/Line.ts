import Observer from './Observer'

export default class Line extends Observer {
  constructor({ element }: { element: HTMLElement }) {
    super({ element })
    this.element = element
  }

  onEnter() {
    this.element.classList.add('in-view')
  }
}

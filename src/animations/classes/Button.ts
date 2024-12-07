import { gsap } from 'gsap'
import Observer from './Observer'

export default class Button extends Observer {
  text: Element
  textWrapper: Element
  timeline: gsap.core.Timeline

  constructor({ element }: { element: HTMLElement }) {
    super({ element })
    this.element = element

    this.text = element.querySelector('span span')!
    this.textWrapper = element.querySelector('span')!

    this.timeline = gsap.timeline({
      defaults: {
        duration: 1,
        ease: 'power3',
      },
    })
  }

  onEnter() {
    this.timeline
      .to(this.element, {
        scale: 1,
        delay: 0.1,
        duration: 0.5,
      })
      .to(
        this.textWrapper,
        {
          width: 'auto',
        },
        '-=0.3'
      )
      .to(
        this.text,
        {
          y: 0,
        },
        '-=0.5'
      )
  }
}

import SplitType from 'split-type'
import Observer from './Observer'
import { gsap } from 'gsap'

export default class TextReveal extends Observer {
  element: HTMLElement
  splittedWords: SplitType

  constructor({ element }: { element: HTMLElement }) {
    super({ element })
    this.element = element

    const splitted = new SplitType(element, { types: 'words' })
    this.splittedWords = new SplitType(splitted.words!, { types: 'words' })
  }

  onEnter() {
    gsap.to(this.splittedWords.words, {
      y: 0,
      duration: 1.3,
      stagger: 0.015,
      ease: 'power3',
    })
  }
}

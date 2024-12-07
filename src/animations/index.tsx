'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import Lenis from '@studio-freight/lenis'
import TextReveal from './classes/TextReveal'
import Button from './classes/Button'
import Line from './classes/Line'
import Card from './classes/Card'

export const LenisScroller = () => {
  useEffect(() => {
    new App()
  }, [])

  return <></>
}

export class App {
  lenis: Lenis

  constructor() {
    this.lenis = new Lenis()
    this._createHeaderAnimation()
    this._createTextReveal()
    this._createButtonAnimation()
    this._createLineAnimation()
    this._createCardAnimation()
    this._render()
  }

  _createHeaderAnimation() {
    // const header = document.querySelector('.page--header') as HTMLElement

    // header.classList.add('in-view')
    
    const header = document.querySelector('.page--header') as HTMLElement;
    if (header) {
      header.classList.add('in-view');
    }
  }

  _createTextReveal() {
    const textItems = document.querySelectorAll(
      '[data-animation="text-reveal"]'
    ) as NodeListOf<HTMLElement>

    gsap.set(textItems, { opacity: 1 })

    textItems.forEach((text) => {
      new TextReveal({ element: text })
      setTimeout(() => {
        gsap.to(text.querySelectorAll('div'), {
          clipPath: 'inset(-20% -20% -20% -20%)',
          duration: 1,
        })
      }, 0)
    })
  }

  _createButtonAnimation() {
    const buttonItems = document.querySelectorAll(
      '[data-animation="button"]'
    ) as NodeListOf<HTMLElement>

    buttonItems.forEach((button) => {
      new Button({ element: button })
    })
  }

  _createLineAnimation() {
    const lineItems = document.querySelectorAll(
      '[data-animation="line"]'
    ) as NodeListOf<HTMLElement>

    lineItems.forEach((line) => {
      new Line({ element: line })
    })
  }

  _createCardAnimation() {
    const cardItems = document.querySelectorAll(
      '[data-animation="card"]'
    ) as NodeListOf<HTMLElement>
    const swiper = document.querySelector('.swiper-wrapper') as HTMLElement

    ;[...Array.from(cardItems), swiper].forEach((card) => {
      new Card({ element: card })
    })
  }

  _render(time?: number) {
    this.lenis.raf(time)

    requestAnimationFrame(this._render.bind(this))
  }
}

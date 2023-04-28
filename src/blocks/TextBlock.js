import { colorize } from "../helpers/colors.js";
import { Block } from "./BaseBlock.js";

export class TextBlock extends Block  { 
  #width = 0
  #height = 0
  #lines = []
  #options = {
    align: 'start'
  }
  #alignText(text, filler) {
    switch(this.#options.align) {
      case 'end': return text.padStart(this.#width, filler)
      case 'center': {
        const start = Math.floor((this.#width - text.length)/2)
        return text.padStart(text.length + start, filler).padEnd(this.#width, filler)
      }
      case 'start':
      default: return text.padEnd(this.#width, filler)
    }
  }

  constructor (str, options) {
    super()
    this.#options = {...this.#options, ...options}
    this.#lines = str ? str.split('\n') : [];
    this.#height = this.#lines.length;
    this.#width = Math.max(0, ...this.#lines.map(x => x.length))
  }

  get height() {
    return this.#height
  }

  set height (_) {
    console.error('Block: hight cant be set directly')
  }

  get width() {
    return this.#width
  }

  set width (_) {
    console.error('Block: width cant be set directly')
  }


  render(options = {}) {
    const {
      fontColor,
      backColor,
      filler = ' ',
    } = options
    return this.#lines
      .map(text => this.#alignText(text, filler))
      .map(text => colorize(text, fontColor, backColor))
  }
}

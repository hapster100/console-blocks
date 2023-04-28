import { colorize } from "../helpers/colors.js"
import { Block } from "./BaseBlock.js"

export class PaddingBlock extends Block {
  #options = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
  #child = null
  
  constructor(block, options) {
    super()
    this.#child = block
    this.#options = {...this.#options, ...options}
  }

  get width() {
    return this.#options.left + this.#options.right + this.#child.width
  }

  get height() {
    return this.#options.bottom + this.#options.top + this.#child.height
  }

  render(options) {
    const {
      fontColor,
      backColor,
      filler = ' ',
    } = options
    const {
      top,
      bottom,
      left,
      right,
    } = this.#options

    const childLines = this.#child.render(options)
    const padLines = n => Array.from({
      length: n,
    }, () => colorize(
      filler.repeat(left + this.#child.width + right),
      fontColor,
      backColor,
    ))
    const rightPad = colorize(filler.repeat(right), fontColor, backColor)
    const leftPad = colorize(filler.repeat(left), fontColor, backColor)
    return [
      ...padLines(top),
      ...childLines.map(line => leftPad + line + rightPad),
      ...padLines(bottom),
    ]
  }

}
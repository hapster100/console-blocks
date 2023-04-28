import { colorize } from "../helpers/colors.js";
import { Block } from "./BaseBlock.js";

export class BorderBlock extends Block {
  #options = {
    width: 1,
    color: null,
    backColor: null,
    horizontal: '-',
    vertical: '|',
    corner: '+'
  }
  #child = null
  #width = 0
  #height = 0

  constructor (block, options = {}) {
    super()
    this.#options = {...this.#options, ...options}
    this.#child = block
  }

  get width() {
    return this.#child.width + this.#options.borderWidth*2
  }

  get height() {
    return this.#child.height + this.#options.borderWidth*2
  }

  render(options = {}) {
    const {
      backColor,
      color,
      corner,
      horizontal,
      vertical,
      width,
    } = this.#options
    
    const childLines = this.#child.render(options)
    const topBottom = Array.from({
      length: width,
    }, () => colorize(
      corner.repeat(width)
        + horizontal.repeat(this.#child.width)
        + corner.repeat(width),
      color || options.fontColor,
      backColor || options.backColor,
    ))
    const rightLeft = colorize(
      vertical.repeat(width),
      color || options.fontColor,
      backColor || options.backColor,
    )
    return [
      ...topBottom,
      ...childLines.map(line => rightLeft + line + rightLeft),
      ...topBottom,
    ]
  }
}
const escape = (...codes) => `\u001b[${codes.join(';')}m`

export const bold = () => escape(1)
export const faint = () => escape(2)
export const italic = () => escape(3)

export const slowBlink = () => escape(5)
export const rapidBlink = () => escape(6)

export const invert = () => escape(7)
export const hide = () => escape(8)
export const crossout = () => escape(9)
export const overline = () => escape(53)
export const underline = () => escape(4)
export const doubleUnderline = () => escape(21)

export const resetAll = () => escape(0)
export const resetIntensity = () => escape(22)
export const resetItalic = () => escape(23)
export const resetUnderline = () => escape(24)
export const resetBlink = () => escape(25)
export const resetInvert = () => escape(27)
export const resetCrossout = () => escape(29)

export const font4bit = (i0to15) => i0to15 < 8 ? escape(30 + i0to15) : escape(90 + i0to15 - 8)
export const font8bit = (i0to255) => escape(38, 5, i0to255)
export const font24bit = (r, g, b) => escape(38, 2, r, g, b)
export const fontDefault = () => escape(39)

export const back4bit = (i0to15) => i0to15 < 8 ? escape(40 + i0to15) : escape(100 + i0to15 - 8)
export const back8bit = (i0to255) => escape(48, 5, i0to255)
export const back24bit = (r, g, b) => escape(48, 2, r, g, b)
export const backDefault = () => escape(49)

export const under8bit = (i0to255) => escape(58, 5, i0to255)
export const under4bit = (i0to15) => under8bit(i0to15)
export const under24bit = (r, g, b) => escape(58, 2, r, g, b)
export const underDefault = () => escape(59)

export const test4bitColors = () => {
  for(let code = 0; code < 16; code += 4) {
    console.log(
      font4bit(code), 'Hello',
      font4bit(code+1), 'Hello',
      font4bit(code+2), 'Hello',
      font4bit(code+3), 'Hello',
    )
  }
}

export const test8bitColors = () => {
  for(let code = 0; code < 2**8; code+=8) {
    console.log(
      font8bit(code), 'Hello',
      font8bit(code+1), 'Hello',
      font8bit(code+2), 'Hello',
      font8bit(code+3), 'Hello',
      font8bit(code+4), 'Hello',
      font8bit(code+5), 'Hello',
      font8bit(code+6), 'Hello',
      font8bit(code+7), 'Hello'
    )
  }
}

export const test24bitColors = () => {
  for(let r = 0; r < 256; r += 50) {
    for(let g = 0; g < 256; g += 50) {
      let line = ''
      for(let b = 0; b < 256; b += 50) {
        line += font24bit(r, g, b) + 'Hello world' +  resetAll() + ' '
      }
    }
  }
}

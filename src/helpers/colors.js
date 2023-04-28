import { back4bit, backDefault, font4bit, fontDefault } from "./ansi_sgr.js"

export const Colors = Object.freeze({
  Black   : 0,
  Red     : 1,
  Green   : 2,
  Yellow  : 3,
  Blue    : 4,
  Magenta : 5,
  Cyan    : 6,
  White   : 7,
  Bright  : Object.freeze({
    Black   : 8,
    Red     : 9,
    Green   : 10,
    Yellow  : 11,
    Blue    : 12,
    Magenta : 13,
    Cyan    : 14,
    White   : 15,  
  })
})

const colorizeFont = (text, color) => {
  if (typeof color !== 'number') return text
  return `${font4bit(color)}${text}${fontDefault()}`
}

const colorizeBack = (text, color) => {
  if (typeof color !== 'number') return text
  return `${back4bit(color)}${text}${backDefault()}`
}

export const colorize = (text, fgColor, bgColor) => {
  return colorizeBack(
    colorizeFont(
      text,
      fgColor
    ),
    bgColor,
  )
}
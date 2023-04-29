# Blocks

## BaseBlock
Base class for all blocks, declare geters for width and height, and render method.

### render(options)
Return array of processed strings.
- fontColor: number of color from 0 to 15 (see Colors from helpers)
- backColor: number of color from 0 to 15 (see Colors from helpers)
- filler: character used for filling empty space

## TextBlock
Responsible for rendering text and its align.

### constructor(str, options)
- str: content of block, each newline character increase height
- options:
  - align: 'start', 'center' or 'end' ('start' by default)


## PaddingBlock
Responsible for the space around the block.

### constructor(block, options)
- block: create space around this block
- options:
  - top: (0 by default)
  - bottom: (0 by default)
  - right: (0 by default)
  - left: (0 by default)

## BorderBlock
Responsible for the border around the block.

### constructor(block, options)
- block: create border around this block
- options:
  - width: (1 by default)
  - color: used for character in border, (used fontColor from render options by default)
  - backColor: used for background in border, (used backColor from render options by default)
  - horizontal: character for top and bottom lines ('-' by default)
  - vertical: character for left and rigth lines ('|' by default)
  - corner: character for corners ('+' by default)

# Helpers

## ANSI escapes
Set of function for customise input like colors, intensity, etc.

### Color Escapes
For each of foreground, background and underlines provide four function for 4bit, 8bit, 24bit and default colors.

- font4bit, font8bit, font24bit, fontDefault
- back4bit, back8bit, back24bit, backDefault
- under4bit, under8bit, under24bit, underDefault

#### 4bit
Function for classic terminal colors (Black, Red, Green, Yellow, Blue, Magenta, Cyan, White and its Bright variations).

input: number from 0 to 15

#### 8bit
input: number from 0 to 255
- 0-15: same as 4bit.
- 16-231: 6x6x6 color cube.
- 232-255: grayscale from dark to light.

#### 24bit
input: three numbers from 0 to 255  (font24bit(red, green, blue))

### Text Decoration Escapes

- crossout()
- overline()
- underline()
- doubleUnderline()

### Font Style Escapes

- bold()
- faint()
- italic()

### Other

- some resets
- blink
- invert

## Colors
High-level color api

### 4bit Colors
Human readable color codes

- Colors.Black (0)
- Colors.Red (1)
- Colors.Green (2)
- ...
- Colors.Bright.Black (8)
- Colors.Bright.Red (9)
- ...

### colorize (text, fgColor, bgColor)

- text: string
- fgColor: 4bit color code
- bgColor: 4bit color code

### Example

```js
  const colored = colorize('Hello Colors :3' , Colors.Red, Colors.Green)
```

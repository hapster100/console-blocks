import { BorderBlock } from "../src/blocks/BorderBlock.js";
import { TextBlock } from "../src/blocks/TextBlock.js";
import { Colors } from "../src/helpers/colors.js";

const textBlock = new TextBlock('bordered\ntext\nblock', { align: 'center' })


const defaultBlock = new BorderBlock(
  textBlock
)
const coloredBorderBlock = new BorderBlock(
  textBlock,
  {
    backColor: Colors.White,
    color: Colors.Red,
    vertical: '^',
    horizontal: ' ',
    corner: ' ',
    width: 2,
  }
)

const defaultRes1 = defaultBlock.render().join('\n')

const coloredBlock1 = coloredBorderBlock.render({
  filler: '-',
  fontColor: Colors.Red,
  backColor: Colors.White,
}).join('\n')

console.log(defaultRes1)
console.log(coloredBlock1)
import { TextBlock } from "../src/blocks/TextBlock.js";
import { Colors } from "../src/helpers/colors.js";

const block = new TextBlock('hello\nworld')

const res1 = block.render({
  fontColor: Colors.Cyan,
  backColor: Colors.Red
}).join('\n')

const res2 = block.render().join('\n')

console.log(res1)
console.log(res2)

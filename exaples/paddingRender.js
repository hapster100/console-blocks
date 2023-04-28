import { BorderBlock } from "../src/blocks/BorderBlock.js";
import { PaddingBlock } from "../src/blocks/PaddingBlock.js";
import { TextBlock } from "../src/blocks/TextBlock.js";
import { Colors } from "../src/helpers/colors.js";

const text = new TextBlock('padded\ntext', { align: 'center' })


const pad1 = new PaddingBlock(
  text,
  {
    top: 2,
    bottom: 4,
    right: 10,
    left: 5
  }
)

const res1 = new BorderBlock(pad1).render({backColor: Colors.Cyan}).join('\n')

console.log(res1)

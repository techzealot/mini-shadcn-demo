import {
  useEffect,
  useRef,
} from "react";

import { Button } from "@/components/button";
import Text, {
  Blockquote,
  Code,
  H1,
  H2,
  H3,
  H4,
  Large,
  Lead,
  List,
  Muted,
  P,
  Small,
} from "@/components/text";

function App() {
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    console.log(ref.current?.innerText);
  });
  return (
    <>
      {/* 由于使用的是css variable切换明暗主题,由于没有切换功能,为避免tailwind去除.dark css需要在工程中出现dark文字以保留相关css */}
      <Button className="my-6">"dark" text to reserve dark css</Button>
      <H1 ref={ref}>This is h1!</H1>
      <H2>This is h2! </H2>
      <H3>This is h3! </H3>
      <H4>This is h4! </H4>
      <P>This is a paragraph!</P>
      <Code>
        //this is a code block! <br />
        console.log("Hello, world!");
      </Code>
      <Blockquote>this is a blockquote!</Blockquote>
      <List>
        <li>this is ul list</li>
        <li>this is ul list</li>
        <li>this is ul list</li>
      </List>
      <Lead>This is a lead text!</Lead>
      <Large>This is a large text!</Large>
      <Small>This is a small text!</Small>
      <Muted>This is a muted text!</Muted>
      <Text className="text-lg font-bold">
        This is a customized text component!
      </Text>
    </>
  );
}

export default App;

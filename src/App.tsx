import { Button } from "@/components/button";

function App() {
  return (
    <>
      {/* 由于使用的是css variable切换明暗主题,由于没有切换功能,为避免tailwind去除.dark css需要在工程中出现dark文字以保留相关css */}
      <Button>"dark" text to reserve dark css</Button>
    </>
  );
}

export default App;

import React, { useState } from "react";
import "../src/index.css";
import UsingListVirtualization from "./UsingListVirtualization";
import UsingRegularList from "./UsingRegularList";

const App = () => {
  const [showVirtualization, setShowVirtualization] = useState(true); // 狀態用來切換

  return (
    <>
      <h1>List Virtualization</h1>
      <div>
        <label>
          <input
            type="radio"
            value="virtualization"
            checked={showVirtualization}
            onChange={() => setShowVirtualization(true)} // 切換到虛擬化
          />
          使用虛擬化
        </label>
        <label>
          <input
            type="radio"
            value="regular"
            checked={!showVirtualization}
            onChange={() => setShowVirtualization(false)} // 切換到不使用虛擬化
          />
          不使用虛擬化
        </label>
      </div>

      {/* 根據狀態顯示相應的列表 */}
      {showVirtualization ? <UsingListVirtualization /> : <UsingRegularList />}
    </>
  );
};

export default App;

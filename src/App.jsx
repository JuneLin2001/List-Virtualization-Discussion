import { Routes, Route } from "react-router-dom";
import "../src/index.css";
import UsingListVirtualization from "./UsingListVirtualization";
import UsingRegularList from "./UsingRegularList";
import Selector from "./Selector";
import { useState } from "react";

const App = () => {
  const [tempItemCount, setTempItemCount] = useState(10);
  const [itemCount, setItemCount] = useState(10);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setTempItemCount(Number(value));
    }
  };

  const handleApplyCount = () => {
    setItemCount(tempItemCount);
  };

  return (
    <>
      <h1 className="w-full text-2xl">List Virtualization</h1>
      <input
        type="text"
        value={tempItemCount}
        onChange={handleInputChange}
        placeholder="輸入數字"
      />
      <button onClick={handleApplyCount}>確定</button>
      <Selector />
      <Routes>
        <Route
          path="/UsingListVirtualization"
          element={<UsingListVirtualization itemCount={itemCount} />}
        />
        <Route
          path="/UsingRegularList"
          element={<UsingRegularList itemCount={itemCount} />}
        />
      </Routes>
    </>
  );
};

export default App;

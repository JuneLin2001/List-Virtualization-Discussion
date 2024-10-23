import { Routes, Route } from "react-router-dom";
import "../src/index.css";
import UsingListVirtualization from "./UsingListVirtualization";
import UsingRegularList from "./UsingRegularList";
import Selector from "./Selector";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const images = [
  "maxwell-cat.gif",
  "7470e23200353f231999a1bcf1fa7342.gif",
  "waTurtle.svg",
];

// Row 組件
const Row = ({ index, isVirtualized }) => {
  const userName = `使用者 ${index + 1}`;
  const message = isVirtualized
    ? `這是一條使用 List Virtualization 的留言內容 ${index + 1}`
    : `這是一條不使用 List Virtualization 的留言內容 ${index + 1}`;

  // 隨機選擇一個頭像
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setImageUrl(images[randomIndex]);
  }, [index]);

  return (
    <div
      className={`flex p-4 border-b last:border-b-0 mb-1 ${
        isVirtualized ? "bg-VirtualizationListItem" : "bg-RegularListItem"
      }`}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden">
        {/* 使用圖片顯示頭像 */}
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={userName}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="bg-gray-300 w-full h-full flex items-center justify-center">
            <span className="text-lg font-semibold text-white">
              {userName.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <div className="ml-4 flex-grow">
        <div className="text-sm font-semibold">{userName}</div>
        <div className="text-sm text-gray-700">{message}</div>
      </div>
    </div>
  );
};

Row.propTypes = {
  index: PropTypes.number.isRequired,
  isVirtualized: PropTypes.bool.isRequired,
};

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
    <div className="app-container flex w-full h-screen">
      {/* 左邊區塊 */}
      <div className="left-panel w-1/3 p-4 flex flex-col space-y-4">
        <h1 className="text-2xl font-bold">List Virtualization 都是個啥</h1>

        {/* List Virtualization 的介紹 */}
        <section className="bg-gray-100 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold">
            List Virtualization 的運作原理
          </h2>
          <p className="mt-2">
            核心概念：讓應用程式僅渲染可見範圍內的項目，需要時再動態加載新的項目。
          </p>
        </section>

        {/* 什麼時候會用到 */}
        <section className="bg-gray-100 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold">什麼時候會用到</h2>
          <p className="mt-2">
            <strong>為什麼需要 List Virtualization？</strong> 性能問題：大量 DOM
            元素渲染會導致頁面卡頓、效能低下。
          </p>
          <p>
            <strong>使用案例：</strong>
            長列表（如社交平台中的訊息流）、大數據表格等。
          </p>
        </section>

        {/* 輸入與按鈕區塊 */}
        <div>
          <p>輸入個數字然後比較一下有無使用的差異：</p>
          <input
            className="border p-2 w-full"
            type="text"
            value={tempItemCount}
            onChange={handleInputChange}
            placeholder="輸入數字"
          />
          <button
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
            onClick={handleApplyCount}
          >
            確定
          </button>
        </div>

        {/* 選擇器 */}
        <Selector />
      </div>

      {/* 右邊區塊 */}
      <div className="right-panel w-2/3 p-4 overflow-y-auto border-[1px]">
        <Routes>
          <Route
            path="/UsingListVirtualization"
            element={
              <UsingListVirtualization itemCount={itemCount} Row={Row} />
            }
          />
          <Route
            path="/UsingRegularList"
            element={<UsingRegularList itemCount={itemCount} Row={Row} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;

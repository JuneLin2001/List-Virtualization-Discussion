import Selector from "./Selector";
import { useState } from "react";
import { generateRandomUsers } from "./utils/userGenerator";
import PropTypes from "prop-types";

const LeftPanel = ({ itemCount, setItemCount, setUsers }) => {
  const [tempItemCount, setTempItemCount] = useState(itemCount);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setTempItemCount(Number(value));
    }
  };

  const handleApplyCount = () => {
    setItemCount(tempItemCount);
    setUsers(generateRandomUsers(tempItemCount));
  };

  return (
    <div className="w-1/3 h-screen md:h-[80vh] lg:h-[90vh] p-4 flex flex-col space-y-4">
      <h1 className="text-3xl font-bold  mb-4">List Virtualization 都是個啥</h1>

      <section className="bg-gray-100 p-4 rounded-md shadow-md">
        <h2 className="text-xl font-semibold">List Virtualization 是什麼？</h2>
        <p className="mt-2">
          核心概念：讓應用程式僅渲染可見範圍內的項目，需要時再動態加載新的項目。
        </p>
      </section>

      <section className="bg-gray-100 p-4 rounded-md shadow-md">
        <h2 className="text-xl font-semibold">
          為什麼需要 List Virtualization？
        </h2>
        <h3 className="text-lg font-semibold mt-2">性能問題：</h3>
        <p>大量 DOM 元素渲染會導致頁面卡頓、效能低下。</p>
        <h3 className="text-lg font-semibold mt-2">
          加速第一次頁面載入的時間：
        </h3>
        <p>
          如果在網頁中需要渲染大量元件，在沒有任何優化的情況下，第一次載入頁面時，必須等待所有的資料都已經載入到瀏覽器後，還要等待瀏覽器渲染與繪製網頁內容，所以，當資料量很大時會造成使用者等待的時間很久，讓使用者體驗
          (UX) 非常不佳。
        </p>

        <h3 className="text-lg font-semibold mt-2">限制：</h3>
        <p>
          由於 List Virtualization
          會讓視窗可見範圍外的大部分元件保持虛擬狀態，因此瀏覽器的
          Ctrl+F（查找）功能無法直接搜尋不可見的元件。
        </p>
        <h3 className="text-lg font-semibold mt-2">使用案例：</h3>
        <p>長列表（如社交平台中的訊息流）、大數據表格等。</p>
      </section>

      <section className="bg-gray-100 p-4 rounded-md shadow-md">
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
      </section>

      <section className="bg-gray-100 p-4 rounded-md shadow-md">
        <Selector />
      </section>
    </div>
  );
};

LeftPanel.propTypes = {
  itemCount: PropTypes.number.isRequired,
  setItemCount: PropTypes.func.isRequired,
  setUsers: PropTypes.func.isRequired,
};

export default LeftPanel;

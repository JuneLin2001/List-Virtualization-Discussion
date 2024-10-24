import Selector from "./Selector";
import { useState } from "react";
import { generateRandomUsers } from "./utils/userGenerator";
import PropTypes from "prop-types";

const LeftPanel = ({ setItemCount, setUsers }) => {
  const [tempItemCount, setTempItemCount] = useState(10);

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
    <div className="w-1/3 p-4 flex flex-col space-y-4">
      <h1 className="text-2xl font-bold">List Virtualization 都是個啥</h1>

      <section className="bg-gray-100 p-4 rounded-md shadow-md">
        <h2 className="text-xl font-semibold">
          List Virtualization 的運作原理
        </h2>
        <p className="mt-2">
          核心概念：讓應用程式僅渲染可見範圍內的項目，需要時再動態加載新的項目。
        </p>
      </section>

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

      <Selector />
    </div>
  );
};

LeftPanel.propTypes = {
  setItemCount: PropTypes.func.isRequired,
  setUsers: PropTypes.func.isRequired,
};

export default LeftPanel;

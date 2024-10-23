import { Link } from "react-router-dom";
import "../src/index.css";
import { useState } from "react";

const Selector = () => {
  const [selectedListType, setSelectedListType] = useState("virtualization");

  return (
    <div className="flex flex-col space-y-4">
      <label
        className={`p-4 rounded ${
          selectedListType === "virtualization"
            ? "bg-VirtualizationListItem outline"
            : "bg-white"
        } cursor-pointer`}
      >
        <Link
          to="/UsingListVirtualization"
          onClick={() => setSelectedListType("virtualization")}
          className="w-full h-full flex items-center"
        >
          使用List Virtualization
        </Link>
      </label>
      <label
        className={`p-4 rounded ${
          selectedListType === "regular"
            ? "bg-RegularListItem outline"
            : "bg-white"
        } cursor-pointer`}
      >
        <Link
          to="/UsingRegularList"
          onClick={() => setSelectedListType("regular")}
          className="w-full h-full flex items-center"
        >
          不使用List Virtualization
        </Link>
      </label>
    </div>
  );
};

export default Selector;

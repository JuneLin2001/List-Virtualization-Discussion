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
            ? "bg-[#f8f8f0] outline"
            : "bg-white"
        } cursor-pointer`}
        onClick={() => setSelectedListType("virtualization")}
      >
        <Link to="/UsingListVirtualization" className="block">
          使用List Virtualization
        </Link>
      </label>
      <label
        className={`p-4 rounded ${
          selectedListType === "regular" ? "bg-[#d3e3fd] outline" : "bg-white"
        } cursor-pointer`}
        onClick={() => setSelectedListType("regular")}
      >
        <Link to="/UsingRegularList" className="block">
          不使用List Virtualization
        </Link>
      </label>
    </div>
  );
};

export default Selector;

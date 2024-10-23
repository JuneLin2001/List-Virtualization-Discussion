import { Link } from "react-router-dom";
import "../src/index.css";
import { useState } from "react";

const Selector = () => {
  const [selectedListType, setSelectedListType] = useState("");

  return (
    <>
      <div>
        <label>
          <input
            type="radio"
            name="listType"
            checked={selectedListType === "virtualization"}
            onChange={() => {
              setSelectedListType("virtualization");
            }}
          />
          <Link
            to="/UsingListVirtualization"
            onClick={() => setSelectedListType("virtualization")}
          >
            使用虛擬化
          </Link>
        </label>
        <label>
          <input
            type="radio"
            name="listType"
            checked={selectedListType === "regular"}
            onChange={() => {
              setSelectedListType("regular");
            }}
          />
          <Link
            to="/UsingRegularList"
            onClick={() => setSelectedListType("regular")}
          >
            不使用虛擬化
          </Link>
        </label>
      </div>
    </>
  );
};

export default Selector;

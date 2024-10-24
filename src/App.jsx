import { Routes, Route } from "react-router-dom";
import "../src/index.css";
import UsingListVirtualization from "./UsingListVirtualization";
import UsingRegularList from "./UsingRegularList";
import { useState } from "react";
import PropTypes from "prop-types";
import { generateRandomUsers } from "./utils/userGenerator";
import LeftPanel from "./LeftPanel";

const Row = ({ index, user, isVirtualized }) => {
  return (
    <div
      className={`flex p-4 border-b last:border-b-0 mb-1 ${
        isVirtualized ? "bg-VirtualizationListItem" : "bg-RegularListItem"
      }`}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden">
        <img
          src={user.avatar}
          alt={user.username}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="ml-4 flex-grow">
        <div className="text-sm font-semibold">{user.username}</div>
        <div className="text-sm text-gray-700 flex justify-between">
          {user.sentence}{" "}
          <span className="text-sm text-gray-500">#{index + 1}</span>
        </div>
      </div>
    </div>
  );
};

Row.propTypes = {
  index: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
  isVirtualized: PropTypes.bool.isRequired,
};

const App = () => {
  const [itemCount, setItemCount] = useState(10);
  const [users, setUsers] = useState(generateRandomUsers(itemCount));

  return (
    <div className="app-container flex w-full h-screen">
      <LeftPanel setItemCount={setItemCount} setUsers={setUsers} />
      <div className="right-panel w-2/3 p-4 overflow-y-auto border-[1px]">
        <Routes>
          <Route
            path="/UsingListVirtualization"
            element={
              <UsingListVirtualization
                itemCount={itemCount}
                Row={Row}
                users={users}
              />
            }
          />
          <Route
            path="/UsingRegularList"
            element={
              <UsingRegularList itemCount={itemCount} Row={Row} users={users} />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;

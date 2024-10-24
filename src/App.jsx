import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "../src/index.css";
import Row from "./Row";
import LeftPanel from "./LeftPanel";
import UsingListVirtualization from "./UsingListVirtualization";
import UsingRegularList from "./UsingRegularList";
import { generateRandomUsers } from "./utils/userGenerator";

const App = () => {
  const [itemCount, setItemCount] = useState(5);
  const [users, setUsers] = useState(generateRandomUsers(itemCount));
  const [likedItems, setLikedItems] = useState(Array(itemCount).fill(false));

  const toggleLike = (index) => {
    const updatedLikes = [...likedItems];
    updatedLikes[index] = !updatedLikes[index];
    setLikedItems(updatedLikes);
  };

  return (
    <div className="flex w-full h-screen">
      <LeftPanel
        itemCount={itemCount}
        setItemCount={setItemCount}
        setUsers={setUsers}
      />
      <div className="w-2/3 p-4 overflow-y-auto border-[1px]">
        <Routes>
          <Route
            path="/UsingListVirtualization"
            element={
              <UsingListVirtualization
                itemCount={itemCount}
                Row={Row}
                users={users}
                likedItems={likedItems}
                toggleLike={toggleLike}
              />
            }
          />
          <Route
            path="/UsingRegularList"
            element={
              <UsingRegularList
                itemCount={itemCount}
                Row={Row}
                users={users}
                likedItems={likedItems}
                toggleLike={toggleLike}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;

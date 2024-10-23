import PropTypes from "prop-types";
import { FixedSizeList as List } from "react-window";
import { useRef, useEffect, useState } from "react";
import memoize from "memoize-one";

const UsingListVirtualization = ({ itemCount, Row, users }) => {
  const listRef = useRef();
  const [height, setHeight] = useState(0);

  // 使用 memoize 來緩存 users 的資料
  const createUserData = memoize((users) => users);

  useEffect(() => {
    const updateHeight = () => {
      if (listRef.current) {
        setHeight(listRef.current.clientHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  const memoizedUsers = createUserData(users); // 緩存 users 資料

  return (
    <div className="h-full w-full" ref={listRef}>
      {height > 0 && (
        <List height={height} itemCount={itemCount} itemSize={64} width="100%">
          {({ index, style }) => (
            <div style={style}>
              <Row
                index={index}
                isVirtualized={true}
                user={memoizedUsers[index]}
              />
            </div>
          )}
        </List>
      )}
    </div>
  );
};

UsingListVirtualization.propTypes = {
  itemCount: PropTypes.number.isRequired,
  Row: PropTypes.elementType.isRequired,
  users: PropTypes.array.isRequired,
};

export default UsingListVirtualization;

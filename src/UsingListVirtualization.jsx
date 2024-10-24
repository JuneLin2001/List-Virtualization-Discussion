import PropTypes from "prop-types";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import memoize from "memoize-one";

const UsingListVirtualization = ({
  itemCount,
  Row,
  users,
  likedItems,
  toggleLike,
}) => {
  const createUserData = memoize((users, likedItems, toggleLike) => ({
    users,
    likedItems,
    toggleLike,
  }));

  const memoizedUsers = createUserData(users, likedItems, toggleLike);

  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          height={height}
          itemCount={itemCount}
          itemSize={135}
          width={width}
        >
          {({ index, style }) => (
            <div style={style}>
              <Row
                index={index}
                user={memoizedUsers.users[index]}
                isLiked={memoizedUsers.likedItems[index]}
                toggleLike={memoizedUsers.toggleLike}
                isVirtualized={true}
              />
            </div>
          )}
        </List>
      )}
    </AutoSizer>
  );
};

UsingListVirtualization.propTypes = {
  itemCount: PropTypes.number.isRequired,
  Row: PropTypes.elementType.isRequired,
  users: PropTypes.array.isRequired,
  likedItems: PropTypes.array.isRequired,
  toggleLike: PropTypes.func.isRequired,
};

export default UsingListVirtualization;

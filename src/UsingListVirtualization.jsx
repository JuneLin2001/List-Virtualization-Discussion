import PropTypes from "prop-types";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

const UsingListVirtualization = ({
  itemCount,
  Row,
  users,
  likedItems,
  toggleLike,
}) => {
  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          itemCount={itemCount}
          height={height}
          width={width}
          itemSize={135}
        >
          {({ index, style }) => (
            <div style={style}>
              <Row
                key={index}
                index={index}
                user={users[index]}
                isLiked={likedItems[index]}
                toggleLike={toggleLike}
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

import PropTypes from "prop-types";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import memoize from "memoize-one";

const UsingListVirtualization = ({ itemCount, Row, users }) => {
  const createUserData = memoize((users) => users);
  const memoizedUsers = createUserData(users);

  return (
    <AutoSizer>
      {({ height, width }) => (
        <List height={height} itemCount={itemCount} itemSize={64} width={width}>
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
    </AutoSizer>
  );
};

UsingListVirtualization.propTypes = {
  itemCount: PropTypes.number.isRequired,
  Row: PropTypes.elementType.isRequired,
  users: PropTypes.array.isRequired,
};

export default UsingListVirtualization;

import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import PropTypes from "prop-types";

const Row = ({ index, style }) => (
  <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
    使用 List Virtualization 的 Row {index + 1}
  </div>
);
Row.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

const UsingListVirtualization = ({ itemCount }) => {
  return (
    <>
      <AutoSizer>
        {({ height, width }) => (
          <List
            className="List"
            height={height}
            itemCount={itemCount}
            itemSize={96}
            width={width}
          >
            {Row}
          </List>
        )}
      </AutoSizer>
    </>
  );
};
UsingListVirtualization.propTypes = {
  itemCount: PropTypes.number.isRequired,
};

export default UsingListVirtualization;

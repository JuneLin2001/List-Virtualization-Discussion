import PropTypes from "prop-types";
import { FixedSizeList as List } from "react-window";

const UsingListVirtualization = ({ itemCount, Row }) => {
  return (
    <div className="h-full w-full">
      <List height={600} itemCount={itemCount} itemSize={64} width="100%">
        {({ index, style }) => (
          <div style={style}>
            <Row index={index} isVirtualized={true} />
          </div>
        )}
      </List>
    </div>
  );
};

UsingListVirtualization.propTypes = {
  itemCount: PropTypes.number.isRequired,
  Row: PropTypes.elementType.isRequired,
};

export default UsingListVirtualization;

import PropTypes from "prop-types";

const UsingRegularList = ({ itemCount, Row }) => {
  return (
    <div className="h-full w-full">
      {Array.from({ length: itemCount }, (_, index) => (
        <Row key={index} index={index} isVirtualized={false} />
      ))}
    </div>
  );
};

UsingRegularList.propTypes = {
  itemCount: PropTypes.number.isRequired,
  Row: PropTypes.elementType.isRequired,
};

export default UsingRegularList;

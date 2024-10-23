import PropTypes from "prop-types";

const UsingRegularList = ({ itemCount, Row, users }) => {
  return (
    <div>
      {Array.from({ length: itemCount }).map((_, index) => (
        <Row
          key={index}
          index={index}
          isVirtualized={false}
          user={users[index]}
        />
      ))}
    </div>
  );
};

UsingRegularList.propTypes = {
  itemCount: PropTypes.number.isRequired,
  Row: PropTypes.elementType.isRequired,
  users: PropTypes.array.isRequired,
};

export default UsingRegularList;

import PropTypes from "prop-types";

const Row = ({ index }) => (
  <div className={index % 2 ? "ListItemOdd" : "ListItemEven"}>Row {index}</div>
);

Row.propTypes = {
  index: PropTypes.number.isRequired,
};

const UsingRegularList = ({ itemCount }) => {
  return (
    <div className="h-4 w-24">
      {Array.from({ length: itemCount }, (_, index) => (
        <Row key={index} index={index} />
      ))}
    </div>
  );
};
UsingRegularList.propTypes = {
  itemCount: PropTypes.number.isRequired,
};

export default UsingRegularList;

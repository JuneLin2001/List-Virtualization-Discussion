import PropTypes from "prop-types";

const Row = ({ index }) => (
  <div
    className={`${
      index % 2 ? "RegularListItemEven" : "ListItemOdd"
    } h-32 p-4 border-x-[1px] `}
  >
    不使用 List Virtualization 的 Row {index}
  </div>
);

Row.propTypes = {
  index: PropTypes.number.isRequired,
};

const UsingRegularList = ({ itemCount }) => {
  return (
    <div className="h-full w-full  ">
      {Array.from({ length: itemCount }, (_, index) => (
        <Row key={index} index={index + 1} />
      ))}
    </div>
  );
};
UsingRegularList.propTypes = {
  itemCount: PropTypes.number.isRequired,
};

export default UsingRegularList;

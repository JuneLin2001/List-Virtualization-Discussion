import PropTypes from "prop-types";

const UsingRegularList = ({
  itemCount,
  Row,
  users,
  likedItems,
  toggleLike,
}) => {
  return (
    <>
      {Array.from({ length: itemCount }).map((_, index) => (
        <Row
          key={index}
          index={index}
          isVirtualized={false}
          user={users[index]}
          isLiked={likedItems[index]}
          toggleLike={toggleLike}
        />
      ))}
    </>
  );
};

UsingRegularList.propTypes = {
  itemCount: PropTypes.number.isRequired,
  Row: PropTypes.elementType.isRequired,
  users: PropTypes.array.isRequired,
  likedItems: PropTypes.array.isRequired,
  toggleLike: PropTypes.func.isRequired,
};

export default UsingRegularList;

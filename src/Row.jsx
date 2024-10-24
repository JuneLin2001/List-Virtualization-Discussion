import PropTypes from "prop-types";
import React from "react";

const Row = React.memo(
  ({ index, user, isLiked, toggleLike, isVirtualized }) => {
    return (
      <div
        className={`p-4 shadow-md rounded-md mb-4 ${
          isVirtualized ? "bg-VirtualizationListItem" : "bg-RegularListItem"
        }`}
      >
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src={user.avatar}
                alt={user.username}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-4">
              <div className="text-lg font-semibold">{user.username}</div>
            </div>
          </div>
          <div className="text-lg text-gray-500">#{index + 1}</div>
        </div>

        <div className="mb-4">
          <p className="text-lg text-gray-700">{user.sentence}</p>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={() => toggleLike(index)}
            className="focus:outline-none"
          >
            {isLiked ? (
              <span className="text-2xl">❤️</span>
            ) : (
              <span className="text-2xl">🤍</span>
            )}
          </button>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.user === nextProps.user &&
      prevProps.isLiked === nextProps.isLiked &&
      prevProps.index === nextProps.index
    );
  }
);

Row.displayName = "Row";

Row.propTypes = {
  index: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
  isLiked: PropTypes.bool.isRequired,
  toggleLike: PropTypes.func.isRequired,
  isVirtualized: PropTypes.bool.isRequired,
};

export default Row;

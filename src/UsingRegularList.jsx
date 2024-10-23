import React from "react";

const Row = ({ index }) => (
  <div className={index % 2 ? "ListItemOdd" : "ListItemEven"}>Row {index}</div>
);

const UsingRegularList = () => {
  const itemCount = 10000;

  return (
    <div className="List" style={{ Height: "600px", overflowY: "auto" }}>
      {Array.from({ length: itemCount }, (_, index) => (
        <Row key={index} index={index} />
      ))}
    </div>
  );
};

export default UsingRegularList;

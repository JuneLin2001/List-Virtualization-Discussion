import React from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import "../src/index.css";

const Row = ({ index, style }) => (
  <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
    Row {index}
  </div>
);

const App = () => {
  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          className="List"
          height={height}
          itemCount={1000}
          itemSize={35}
          width={width}
        >
          {Row}
        </List>
      )}
    </AutoSizer>
  );
};

export default App;

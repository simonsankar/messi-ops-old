import React from "react";

import { RecordItem, RecordItemAlt } from "./RecordItem";

const RecordsBody = ({ data, loading }) => {
  return (
    <>
      {loading
        ? "Loading"
        : data.map((record, index) => {
            return index % 2 === 0 ? (
              <RecordItem key={record.id} record={record} />
            ) : (
              <RecordItemAlt key={record.id} record={record} />
            );
          })}
    </>
  );
};

export default RecordsBody;

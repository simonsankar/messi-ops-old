import React from "react";
import { Grid, Loader } from "semantic-ui-react";

import { RecordItem, RecordItemAlt } from "./RecordItem";

const RecordsBody = ({ data, loading }) => {
  return (
    <>
      {loading ? (
        <Grid container padded="vertically">
          <Loader active inverted />
        </Grid>
      ) : (
        data.map((record, index) => {
          return index % 2 === 0 ? (
            <RecordItem key={record.id} record={record} />
          ) : (
            <RecordItemAlt key={record.id} record={record} />
          );
        })
      )}
    </>
  );
};

export default RecordsBody;

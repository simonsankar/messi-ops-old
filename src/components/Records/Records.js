import React from "react";

import RecordsHeader from "./RecordsHeader";
import RecordsBody from "./RecordsBody";

import { getRecords } from "../../state/records/actions";
getRecords();

const Records = () => {
  return (
    <div className="records">
      <RecordsHeader />
      <RecordsBody />
    </div>
  );
};

export default Records;

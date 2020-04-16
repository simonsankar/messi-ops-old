import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecords } from "../../state/records/actions";
import RecordsHeader from "./RecordsHeader";
import RecordsBody from "./RecordsBody";

const Records = () => {
  const records = useSelector((state) => state.records);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecords);
  }, []);

  return (
    <div className="records">
      <RecordsHeader />
      <RecordsBody {...records} />
    </div>
  );
};

export default Records;

import React, { useEffect, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecords } from "../../state/seasons/actions";

import { Dimmer, Loader } from "semantic-ui-react";
import SeasonsHeader from "./SeasonsHeader";
const SeasonsContent = React.lazy(() => import("./SeasonsContent"));
const SeasonsDetails = React.lazy(() => import("./SeasonsDetails"));

const Seasons = () => {
  const { seasons } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    getRecords(dispatch);
  }, [dispatch]);
  console.log(seasons);
  return (
    <div className="seasons">
      <div className="seasons__bar">
        <SeasonsHeader />
        <Suspense
          fallback={
            <Dimmer active>
              <Loader size="large" content="Loading..." />
            </Dimmer>
          }
        >
          <SeasonsContent />
        </Suspense>
      </div>
      <Suspense
        fallback={
          <Dimmer active>
            <Loader size="large" content="Loading..." />
          </Dimmer>
        }
      >
        <SeasonsDetails />
      </Suspense>
    </div>
  );
};

export default Seasons;

import React, { Suspense } from "react";

import { Dimmer, Loader } from "semantic-ui-react";
import SeasonsHeader from "./SeasonsHeader";
const SeasonsContent = React.lazy(() => import("./SeasonsContent"));
const SeasonsDetails = React.lazy(() => import("./SeasonsDetails"));

const Seasons = () => {
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

import React, { Suspense } from "react";

import SeasonsHeader from "./SeasonsHeader";
const SeasonsContent = React.lazy(() => import("./SeasonsContent"));
const SeasonsDetails = React.lazy(() => import("./SeasonsDetails"));

const Seasons = () => {
  return (
    <div className="seasons">
      <div className="seasons__bar">
        <SeasonsHeader />
        <Suspense fallback={<div>Loading...</div>}>
          <SeasonsContent />
        </Suspense>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <SeasonsDetails />
      </Suspense>
    </div>
  );
};

export default Seasons;

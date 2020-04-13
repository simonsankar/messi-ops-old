import React from "react";

import MSNSingle from "./MSNSingle";
import MSNOverall from "./MSNOverall";

const MSNBody = () => {
  return (
    <>
      <MSNOverall />
      <MSNSingle player={1} />
      <MSNSingle player={2} />
      <MSNSingle player={3} />
    </>
  );
};

export default MSNBody;

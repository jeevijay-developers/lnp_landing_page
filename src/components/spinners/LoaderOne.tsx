import React from "react";
import { BounceLoader } from "react-spinners";

const LoaderOne = () => {
  return (
    <div>
      <BounceLoader
        color="#0085ff"
        cssOverride={{}}
        size={35}
        speedMultiplier={1}
      />
    </div>
  );
};

export default LoaderOne;

import React from "react";
import "./Loader.scss";

const MyLoader = () => {
  return (
    <div className="loader">
      <div className="loader__spinner">
        <div className="loader__spinner2">
          <div className="loader__spinner3"></div>
        </div>
      </div>
      <p className="loadingTXT">
        Please wait we are loading your web experience
      </p>
    </div>
  );
};

export default MyLoader;

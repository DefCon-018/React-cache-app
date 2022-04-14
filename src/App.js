import React from "react";
import CacheBuster from "react-cache-buster";
import packageInfo from "../package.json";
// import Loading from "./loading";
import Hello from "./Hello";

const App = () => {
  const isProduction = process.env.NODE_ENV === "production";
  const version = packageInfo.version;
  console.log("version", version);
  return (
    <CacheBuster
      currentVersion={version}
      isEnabled={isProduction} //If false, the library is disabled.
      isVerboseMode={false} //If true, the library writes verbose logs to console.
      //If not pass, nothing appears at the time of new version check.
    >
      <Hello />
    </CacheBuster>
  );
};

export default App;

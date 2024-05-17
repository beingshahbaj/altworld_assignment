import React from "react";
import Candidates from "./Candidates/Candidates";
import Singlecandidate from "./Singlecandidates/Singlecandidate";

function Assignement() {
  return (
    <div className="flex  w-full p-7 pl-2  gap-5 ">
      <Candidates />
      <Singlecandidate />
    </div>
  );
}

export default Assignement;

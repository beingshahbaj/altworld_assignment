import React, { useContext, useEffect, useState } from "react";
import Candidate from "../Candidate";
import { useSelector } from "react-redux";

function Rejected() {
  const [rejectedcan, setRejectedcan] = useState([]);

  const { items, status, error } = useSelector((state) => state.data);

  console.log(items);

  useEffect(() => {
    setRejectedcan(items.filter((user) => user.status === false));
  }, [items]);

  return (
    <div className="w-full h-[100%] ">
      <div className="flex items-center justify-between px-10 py-2 font-bold text-[11px] text-slate-600">
        <h1>Candidate</h1>
        <h1>Score</h1>
      </div>
      {rejectedcan.length > 0 &&
        rejectedcan.map((user, i) => (
          <Candidate key={user.id} singlecandidate={user} index={i} />
        ))}
    </div>
  );
}

export default Rejected;

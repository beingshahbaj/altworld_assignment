import React, { useContext, useEffect, useState } from "react";
import Candidate from "../Candidate";
import { useSelector } from "react-redux";
import { Empty, Spin } from "antd";

function Rejected() {
  const [rejectedcan, setRejectedcan] = useState([]);
  const { items, status, error, searchquery } = useSelector(
    (state) => state.data
  );
  const filteredItems = useSelector((state) => state.data.filteredItems);

  useEffect(() => {
    if (searchquery.length > 0) {
      setRejectedcan(filteredItems.filter((user) => user.status === false));
    } else if (items.length > 0 || searchquery.length === 0) {
      setRejectedcan(items.filter((user) => user.status === false));
    }
  }, [items, filteredItems]);

  if (status === "loading") {
    return (
      <div className="w-full h-[100%] flex-1 flex items-center justify-center">
        <Spin />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-[100%] flex-1 flex items-center justify-center">
        <Empty />
        <h1 className="text-lg font-bold text-red-500">{error}</h1>
      </div>
    );
  }

  return (
    <div className="w-full h-[100%] flex-1">
      <div className="flex items-center justify-between px-10 py-2 font-bold text-[11px] text-slate-600">
        <h1>Candidate</h1>
        <h1>Score</h1>
      </div>
      {rejectedcan.length > 0 ? (
        rejectedcan.map((user, i) => (
          <Candidate key={user.id} singlecandidate={user} index={i} />
        ))
      ) : (
        <h1 className="text-sm font-bold text-slate-800 text-center">
          <Empty />
        </h1>
      )}
    </div>
  );
}

export default Rejected;

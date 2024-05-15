import React, { useContext, useEffect, useState } from "react";

import Candidate from "../Candidate";
import { useSelector } from "react-redux";

function Sortlisted() {
  const [selected, setselected] = useState([]);
  const { items, status, error, searchquery } = useSelector(
    (state) => state.data
  );

  const filteredItems = useSelector((state) => state.data.filteredItems);

  useEffect(() => {
    if (searchquery.length > 0) {
      setselected(filteredItems.filter((user) => user.status === true));
    } else if (items.length > 0 || searchquery.length === 0) {
      setselected(items.filter((user) => user.status === true));
    }
  }, [items, filteredItems]);

  return (
    <div className="w-full h-[100%] ">
      <div className="flex items-center justify-between px-10 py-2 font-bold text-[11px] text-slate-600">
        <h1>Candidate</h1>
        <h1>Score</h1>
      </div>
      {selected.length > 0 &&
        selected.map((user, i) => (
          <Candidate key={user.id} singlecandidate={user} index={i} />
        ))}
    </div>
  );
}

export default Sortlisted;

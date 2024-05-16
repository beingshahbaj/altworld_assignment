import React, { useContext, useEffect, useState } from "react";
import Candidate from "../Candidate";
import { useSelector } from "react-redux";
import { Spin } from "antd";

function Review() {
  const [review, setReview] = useState([]);

  const { items, status, error, searchquery } = useSelector(
    (state) => state.data
  );
  const filteredItems = useSelector((state) => state.data.filteredItems);

  useEffect(() => {
    if (searchquery.length > 0) {
      setReview(filteredItems.filter((user) => user.status === "pending"));
    } else if (items.length > 0 || searchquery.length === 0) {
      setReview(items.filter((user) => user.status === "pending"));
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
        <h1 className="text-lg font-bold text-red-500">{error}</h1>
      </div>
    );
  }
  return (
    <div className="w-full h-[100%]">
      <div className="flex items-center justify-between px-10 py-2 font-bold text-[11px] text-slate-600">
        <h1>Candidate</h1>
        <h1>Score</h1>
      </div>
      {review.length > 0 ? (
        review.map((user, i) => (
          <Candidate key={user.id} singlecandidate={user} index={i} />
        ))
      ) : (
        <h1 className="text-lg font-bold text-slate-800 text-center">
          Add candidate in list
        </h1>
      )}
    </div>
  );
}

export default Review;

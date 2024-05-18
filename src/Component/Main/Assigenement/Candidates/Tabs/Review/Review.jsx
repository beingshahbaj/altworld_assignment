import React, { useContext, useEffect, useState } from "react";
import Candidate from "../Candidate";
import { useSelector } from "react-redux";
import { Empty, Spin } from "antd";

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
      <div className="w-full flex-col h-[100%] flex-1 flex items-center justify-center">
        <Empty />
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
          <div key={user.id} className="w-full">
            <Candidate singlecandidate={user} index={i} />
          </div>
        ))
      ) : (
        <h1 className="text-lg font-bold text-slate-800 text-center">
          <Empty />
        </h1>
      )}
    </div>
  );
}

export default Review;

import React, { useContext, useEffect, useState } from "react";
import Candidate from "../Candidate";
import { useSelector } from "react-redux";

function Review() {
  const [review, setReview] = useState([]);

  const { items, status, error } = useSelector((state) => state.data);

  useEffect(() => {
    setReview(items.filter((user) => user.status === "pending"));
  }, [items]);

  return (
    <div className="w-full h-[100%]">
      <div className="flex items-center justify-between px-10 py-2 font-bold text-[11px] text-slate-600">
        <h1>Candidate</h1>
        <h1>Score</h1>
      </div>
      {review.length > 0 &&
        review.map((user, i) => (
          <Candidate key={user.id} singlecandidate={user} index={i} />
        ))}
    </div>
  );
}

export default Review;

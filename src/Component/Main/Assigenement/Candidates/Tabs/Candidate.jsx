import React from "react";
import { setSelectedEmail } from "../../../../../Redux/Candidateslice";
import { useDispatch, useSelector } from "react-redux";

function Candidate({ key, singlecandidate, index }) {
  const { id } = useSelector((state) => state.data);

  const dispatch = useDispatch();

  const handleEmailClick = (id) => {
    dispatch(setSelectedEmail(id));
  };
  return (
    <div
      onClick={() => handleEmailClick(singlecandidate.id)}
      style={{
        backgroundColor:
          id === singlecandidate.id || (id === null && singlecandidate.id === 1)
            ? "rgb(239 239 239)"
            : "inherit",
      }}
      key={key}
      className=" hover:shadow-lg h-full  shadow-sm transition-all duration-400  w-full cursor-pointer flex items-center justify-between py-2 pl-5 pr-10"
    >
      <div className="flex items-center gap-3">
        <img
          className="w-9 rounded-lg"
          src={singlecandidate.imageUrl}
          alt={singlecandidate.name}
        />
        <div>
          <h3 className="text-[12px] font-bold">{singlecandidate.name}</h3>
          <h4 className="text-[10px] font-medium">{singlecandidate.email}</h4>
        </div>
      </div>
      <h2
        style={{
          color:
            singlecandidate.percentage <= 50
              ? "#ff5222"
              : singlecandidate.percentage <= 70
              ? "#ecb22e"
              : "#2ebd59",
        }}
        className="font-bold"
      >
        {singlecandidate.percentage}%
      </h2>
    </div>
  );
}

export default Candidate;

import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { InterviewQuestions } from "../../../Data/Question";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import Candidatesdetails from "./Candidatesdetails/Candidatesdetails";

function Singlecandidate() {
  const [questions, setquestion] = useState(0);
  const [singlec, setSinglec] = useState(null);
  const { items, status, error } = useSelector((state) => state.data);
  const id = useSelector((state) => state.data.id);

  useEffect(() => {
    if (id != null && items.length > 0) {
      const singlarr = items.filter((user) => user.id === id);
      setSinglec(singlarr[0]);
    } else if (items.length > 0) {
      setSinglec(items[0]);
    }
  }, [id, items]);

  if (!singlec) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Spin />
      </div>
    );
  }

  const handlePrevious = () => {
    setquestion((prevQuestion) =>
      prevQuestion === 0 ? InterviewQuestions.length - 1 : prevQuestion - 1
    );
  };

  const handleNext = () => {
    setquestion((prevQuestion) =>
      prevQuestion === InterviewQuestions.length - 1 ? 0 : prevQuestion + 1
    );
  };

  return (
    <div className="flex-1 flex gap-6 rounded-lg bg-[#ffffff] shadow-2xl shd p-2 pl-5">
      <div className="flex-1 rounded-lg overflow-hidden">
        <Candidatesdetails candidate={singlec} />
      </div>
      <div className="flex-1 flex items-start flex-col justify-between bg-slate-200 rounded-lg pt-10 overflow-hidden">
        <img className="w-full" src={singlec.imageUrl} alt={singlec.name} />
        <div className="w-full">
          <h1 className="text-center text-sm font-medium p-3">
            {InterviewQuestions[questions]}
          </h1>
          <div className="w-full flex items-center justify-between p-4 shadow-inner bg-slate-900">
            <div
              onClick={handlePrevious}
              className="p-2 bg-slate-100 rounded-lg cursor-pointer"
            >
              <NavigateBefore />
            </div>
            <h1 className="text-[12px] font-medium text-slate-100">
              Interview Question {questions + 1} / {InterviewQuestions.length}
            </h1>
            <div
              onClick={handleNext}
              className="p-2 bg-slate-100 rounded-lg cursor-pointer"
            >
              <NavigateNext />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singlecandidate;

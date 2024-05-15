import { Button } from "antd";
import React from "react";
import {
  rejectcandidate,
  sortlisted,
} from "../../../../../Redux/Candidateslice";
import { useDispatch } from "react-redux";

function Candidatesdetails({ candidate }) {
  const dispatch = useDispatch();

  return (
    <div className="w-full h-full py-3 flex flex-col  text-zinc-800">
      <div className="w-full hover:shadow-lg  flex items-center justify-between transition-shadow mb-6">
        <div className="flex items-center gap-3">
          <img
            className="w-14 rounded-lg"
            src={candidate.imageUrl}
            alt={candidate.name}
          />
          <div>
            <h3 className="text-[12px] font-bold">{candidate.name}</h3>
            <h4 className="text-[10px] font-medium">{candidate.email}</h4>
          </div>
        </div>
        <h2
          style={{
            color:
              candidate.percentage <= 50
                ? "#ff5222"
                : candidate.percentage <= 70
                ? "#ecb22e"
                : "#2ebd59",
          }}
          className="font-bold text-2xl"
        >
          {candidate.percentage}%
        </h2>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center font-bold w-full  text-[10px] justify-between">
          <h1>Brhavioural</h1>
          <div className="w-[70%] gap-2 justify-between flex items-center">
            <div className="bg-slate-200 h-2 w-[80%] rounded-lg">
              <div
                className="h-full rounded-lg bg-green-500"
                style={{
                  width: candidate.behavioralMarks * 10 + "%",
                  backgroundColor:
                    candidate.behavioralMarks <= 5
                      ? "#ff5222"
                      : candidate.behavioralMarks <= 7
                      ? "#ecb22e"
                      : "#2ebd59",
                }}
              ></div>
            </div>
            <h1>{candidate.behavioralMarks}/10</h1>
          </div>
        </div>
        <div className="flex items-center font-bold w-full  text-[10px] justify-between">
          <h1>Communicational</h1>
          <div className="w-[70%] gap-2 justify-between flex items-center">
            <div className="bg-slate-200 h-2 w-[80%] rounded-lg">
              <div
                className="h-full rounded-lg bg-green-500"
                style={{
                  width: candidate.communicationMarks * 10 + "%",
                  backgroundColor:
                    candidate.communicationMarks <= 5
                      ? "#ff5222"
                      : candidate.communicationMarks <= 7
                      ? "#ecb22e"
                      : "#2ebd59",
                }}
              ></div>
            </div>
            <h1>{candidate.communicationMarks}/10</h1>
          </div>
        </div>
        <div className="flex items-center font-bold w-full  text-[10px] justify-between">
          <h1>situation Handlig</h1>
          <div className="w-[70%] gap-2 justify-between flex items-center">
            <div className="bg-slate-200 h-2 w-[80%] rounded-lg">
              <div
                className="h-full rounded-lg "
                style={{
                  width: candidate.situationHandlingMarks * 10 + "%",
                  backgroundColor:
                    candidate.situationHandlingMarks <= 5
                      ? "#ff5222"
                      : candidate.situationHandlingMarks <= 7
                      ? "#ecb22e"
                      : "#2ebd59",
                }}
              ></div>
            </div>
            <h1>{candidate.situationHandlingMarks}/10</h1>
          </div>
        </div>
      </div>
      <div className="mt-7 flex-1 flex flex-col gap-4">
        <div className="text-start">
          <h1 className="text-sm font-bold">About</h1>
          <p className="text-[10px] font-medium">{candidate.about}</p>
        </div>
        <div className="text-start">
          <h1 className="text-sm font-bold">Hobby</h1>
          <p className="text-[10px] font-medium">{candidate.hobby}</p>
        </div>
        <div className="text-start">
          <h1 className="text-sm font-bold">Experience</h1>
          <p className="text-[10px] font-medium">{candidate.experience}</p>
        </div>
        <div className="text-start">
          <h1 className="text-sm font-bold">Introduction</h1>
          <p className="text-[10px] font-medium">{candidate.introduction}</p>
        </div>
      </div>
      <div className="w-full flex items-center justify-between gap-5">
        <Button
          onClick={() => {
            dispatch(sortlisted(candidate.id));
          }}
          type="primary"
          className=" S flex-1 bg-[#2ebd59] font-bold"
        >
          SHORTLIST
        </Button>
        <Button
          onClick={() => {
            dispatch(rejectcandidate(candidate.id));
          }}
          type="primary"
          className=" R flex-1 font-bold bg-[#ecb22e]"
        >
          REJECT
        </Button>
      </div>
    </div>
  );
}

export default Candidatesdetails;

import { Edit, Search } from "@mui/icons-material";
import React, { useEffect } from "react";
import Tabs from "./Tabs/Tabs";
import { Input, Select } from "antd";
import { useDispatch } from "react-redux";
import { search, short } from "../../../../Redux/Candidateslice";

function Candidates() {
  const dispatch = useDispatch();

  const handleChange = (obj) => {
    const { value } = obj;
    dispatch(short(value));
  };

  return (
    <div className="w-[35%] h-[] bg-[#ffffff] flex flex-col rounded-[10px] shadow-2xl overflow-hidden">
      <div className="w-full h-max gap-2 flex flex-col p-4">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-md text-slate-900 font-bold ">Sales BDE</h1>
          <div className="flex gap-3 items-center">
            <h1 className="text-sx font-bold text-[#4fd1c5]">Active</h1>
            <div className=" border-1 shadow-md flex items-center p-1 w-fit rounded-md">
              <Edit
                style={{ width: "0.5em", height: "0.5em" }}
                className=" text-slate-800 text-sx"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <h1 className="text-[12px] text-slate-700 font-medium ">
            Assigenment Link
          </h1>
          <a
            className="text-blue-600 text-[10px] font-medium"
            href="google.com"
          >
            assginement.com
          </a>
        </div>
        <div className="flex items-center justify-between w-full">
          <h1 className="text-[12px] text-slate-700 font-medium ">
            Assigenment Hour
          </h1>
          <h1 className="text-[12px] text-slate-700 font-medium ">3 hours</h1>
        </div>
        <div className="flex items-center justify-between w-full">
          <h1 className="text-[12px] text-slate-700 font-medium ">
            Assigenment Ends at
          </h1>
          <h1 className="text-[12px] text-slate-700 font-medium ">
            11 march 2024
          </h1>
        </div>
      </div>
      <div className="px-3 pb-3 flex items-center gap-3 ">
        <Input
          type="Search"
          placeholder="search candidate"
          onChange={(e) => dispatch(search(e.target.value))}
        />
        <Select
          className="text-sx font-bold"
          labelInValue
          defaultValue={{
            value: "Default",
            label: "short can",
          }}
          style={{ color: "grey" }}
          onChange={handleChange}
          options={[
            {
              value: "Default",
              label: "Default",
            },
            {
              value: "High",
              label: "High to low",
            },
            {
              value: "Low",
              label: "Low to high",
            },
          ]}
        />
      </div>
      <div className="w-full flex-1 h-[100%] flex justify-center">
        <Tabs />
      </div>
    </div>
  );
}

export default Candidates;

import React from "react";
import { Tabs } from "antd";
import { People, Reviews } from "@mui/icons-material";
import Sortlisted from "./Sortlisted/Sortlisted";
import Review from "./Review/Review";
import Rejected from "./Rejected/Rejected";
import { Hidden } from "@mui/material";

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: (
      <div className="text-slate-600 gap-2 font-bold flex items-center text-[12px] px-3 py-2 rounded-lg shadow-md">
        <Reviews style={{ width: "0.5em", height: "0.5em", color: "blue" }} />
        To review
      </div>
    ),
    children: <Review />,
  },
  {
    key: "2",
    label: (
      <div className="text-slate-600 gap-2 font-bold flex items-center text-[12px] px-3 py-2 rounded-lg shadow-md">
        <People style={{ width: "0.5em", height: "0.5em", color: "green" }} />
        Shortlisted
      </div>
    ),
    children: <Sortlisted />,
  },
  {
    key: "3",
    label: (
      <div className="text-slate-600 gap-2 font-bold flex items-center text-[12px] px-3 py-2 rounded-lg shadow-md">
        <People style={{ width: "0.5em", height: "0.5em", color: "red" }} />
        Rejected
      </div>
    ),
    children: <Rejected />,
  },
];
const Tab = () => (
  <div style={{ width: "100%", height: "100%" }}>
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  </div>
);
export default Tab;

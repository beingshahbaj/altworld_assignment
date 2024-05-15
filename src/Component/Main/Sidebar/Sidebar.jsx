import { Add, Home, PlusOne } from "@mui/icons-material";
import React from "react";

function Sidebar() {
  return (
    <div className="w-[20%] flex flex-col gap-3 p-5 h-[100%]">
      <div className=" hover:bg-neutral-100 p-2 w-full shadow-sm flex gap-3 items-center font-bold text-xs rounded-md transition duration-300">
        <Home className="text-[#4fd1c5]" />
        Dashboard
      </div>
      <div className="w-full h-max text-white py-4 bg-[#4fd1c5] rounded-lg px-3 flex flex-col">
        <div className=" bg-neutral-100  p-1 w-fit rounded-md mb-3">
          <Add className=" text-slate-800 " />
        </div>
        <h3 className="text-sm font-bold">New Assignment</h3>
        <p className="text-[9px] font-medium h-fit ">
          Select from pre defind questions to have a quick turn around
        </p>
        <button className="p-2 mt-3 text-center font-medium text-xs text-slate-600 bg-[#ffffff] hover:shadow-md rounded-md">
          Create a new assignment
        </button>
      </div>
    </div>
  );
}

export default Sidebar;

import React, { useEffect } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Assignement from "./Assigenement/Assignement";
import { fetchData } from "../../Redux/Candidateslice";
import { useDispatch, useSelector } from "react-redux";

function Hero() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.data);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchData());
    }
  }, [status, dispatch]);

  return (
    <div className="w-full h-full flex">
      <Sidebar />
      <Assignement />
    </div>
  );
}

export default Hero;

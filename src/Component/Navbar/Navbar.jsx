import React from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
function Navbar() {
  return (
    <div className="w[100%] h-16 flex items-center border-b-2 ">
      <div className="flex items-start gap-3 p-3 pl-5 font-bold">
        <ApartmentIcon />
        HI, AltWorld
      </div>
    </div>
  );
}

export default Navbar;

import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../imgs/logo.png";
import { SidebarData } from "../../Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";

const Sidebar = () => {
  const [selected, setSelected] = useState(2);
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} alt="company-logo" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>

      {/* Menu */}
      <div className="menu">
        {SidebarData && SidebarData.length > 0 ? (
          SidebarData.map((mdata, i) => {
            return (
              <div
                key={i}
                className={selected === i ? "menu-item active" : "menu-item"}
                onClick={() => setSelected(i)}
              >
                <div className="icon">
                  <mdata.icon />
                </div>
                <span>{mdata.heading}</span>
              </div>
            );
          })
        ) : (
          <div>no menudata feteched</div>
        )}

        <div className="menu-item">
          <UilSignOutAlt />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Sidebar;

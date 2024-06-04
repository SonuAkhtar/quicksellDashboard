import React, { useState } from "react";
import "./navbar.css";

const Navbar = ({ setColumnType, setOrderType }) => {
  const [display, setDisplay] = useState(false);

  const handleGrouping = (e) => {
    setColumnType(e.target.value);
    setDisplay(false);
  };

  const handleOrdering = (e) => {
    setOrderType(e.target.value);
    setDisplay(false);
  };

  return (
    <nav>
      <div className="nav_display" onClick={() => setDisplay(!display)}>
        <i className="fa-solid fa-sliders" />
        <span>Display</span>
        <i className={`fa-solid fa-angle-down ${display && "active"}`} />
      </div>
      <div className={`nav_details ${display && "active"}`}>
        <div className="nav_detail">
          <div className="detail_name">Grouping</div>
          <div className="detail_drop">
            <select onChange={handleGrouping} defaultValue={"status"}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
        </div>
        <div className="nav_detail">
          <div className="detail_name">Ordering</div>
          <div className="detail_drop">
            <select onChange={handleOrdering}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

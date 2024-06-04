import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Column from "../Column/Column";
import "./home.css";

const Home = ({ apiData }) => {
  const [columnType, setColumnType] = useState("status");
  const [orderType, setOrderType] = useState("priority");

  const [columnNames, setColumnNames] = useState([]);

  const updateColumnGrouping = () => {
    if (columnType === "status") {
      const filStatus = apiData.tickets?.map((ticket) => ticket.status);
      const uniqueColNames = [...new Set(filStatus)];
      setColumnNames(uniqueColNames);
    } else if (columnType === "priority") {
      const filPriority = apiData.tickets?.map((ticket) => ticket.priority);
      const uniqueColNames = [...new Set(filPriority)];
      let priorityNames = uniqueColNames.map((val) => {
        if (val === 0) {
          return {
            value: val,
            name: (
              <span>
                <i className="fa-solid fa-ellipsis" /> No priority
              </span>
            ),
          };
        } else if (val === 1) {
          return {
            value: val,
            name: (
              <span>
                <i className="fa-solid fa-signal" /> Low
              </span>
            ),
          };
        } else if (val === 2) {
          return {
            value: val,
            name: (
              <span>
                <i className="fa-solid fa-signal" /> Medium
              </span>
            ),
          };
        } else if (val === 3) {
          return {
            value: val,
            name: (
              <span>
                <i className="fa-solid fa-signal" /> High
              </span>
            ),
          };
        } else if (val === 4) {
          return {
            value: val,
            name: (
              <span>
                <i className="fa-solid fa-circle-exclamation" /> Urgent
              </span>
            ),
          };
        }
      });
      setColumnNames(priorityNames);
    } else if (columnType === "user") {
      setColumnNames(apiData.users);
    }
  };

  useEffect(() => {
    updateColumnGrouping();
  }, [apiData, columnType]);

  return (
    <div className="home_container">
      <div className="home_wrapper">
        <Navbar setColumnType={setColumnType} setOrderType={setOrderType} />
        <main className="main_container">
          {columnNames?.map((colName, i) => (
            <div className="main_column" key={i}>
              <Column
                columnType={columnType}
                orderType={orderType}
                colName={colName}
                tickets={apiData.tickets}
              />
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Home;

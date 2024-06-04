import React, { useEffect, useState } from "react";
import "./column.css";
import Card from "../Card/Card";

const Column = ({ columnType, orderType, colName, tickets }) => {
  const [columnData, setColumnData] = useState([]);

  const FilterColumnData = () => {
    if (columnType === "user") {
      const filData = tickets.filter((ticket) => ticket.userId === colName.id);
      const sortedData = sortedCards(orderType, filData);
      setColumnData(sortedData);
    } else if (columnType === "status") {
      const filData = tickets.filter((ticket) => ticket.status === colName);
      const sortedData = sortedCards(orderType, filData);
      setColumnData(sortedData);
    } else if (columnType === "priority") {
      const filData = tickets.filter(
        (ticket) => ticket.priority === colName.value
      );
      const sortedData = sortedCards(orderType, filData);
      setColumnData(sortedData);
    }
  };

  const sortedCards = (type, data) => {
    let sortedCards =
      type === "title"
        ? data.sort((a, b) => b.title - a.title)
        : data.sort((a, b) => b.priority - a.priority);
    return sortedCards;
  };

  useEffect(() => {
    FilterColumnData();
  }, [colName.value, orderType]);

  return (
    <div className="column_container">
      <div className="column_head">
        <div className="column_left">
          {columnType === "user" && <i className="fa-solid fa-user" />}

          <span className="column_name">
            {typeof colName === "object" ? colName.name : colName}
          </span>
        </div>
        <div className="column_right">
          <i className="fa-solid fa-plus"></i>
          <i className="fa-solid fa-ellipsis" />
        </div>
      </div>

      <div className="column_cards">
        {columnData.map((data, i) => (
          <span key={i}>
            <Card cardData={data} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Column;

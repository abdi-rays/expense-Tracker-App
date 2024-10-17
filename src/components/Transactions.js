import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
const Transactions = ({
  item,
  deleteTransaction,
  isEditing,
  setIsEditing,
  id,
  setID,
}) => {
  const sign = item.amount < 0 ? "-" : "+";
  const amount = Math.abs(item.amount);
  return (
    <div>
      <li
        style={
          item.amount < 0
            ? { borderRight: "6px solid #c0392b" }
            : { borderRight: "6px solid #2ecc71" }
        }
      >
        <span className="Exname">{item.name}</span>
        <div>
          <span>{`${sign}${amount}`}</span>
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="edit"
            style={
              item.amount < 0 ? { color: "#c0392b" } : { color: "#2ecc71" }
            }
            onClick={() => {
              setIsEditing(!isEditing);
              setID(item.id)
            }}
          />
        </div>
        <button className="delete-btn" onClick={deleteTransaction}>
          x
        </button>
      </li>
    </div>
  );
};

export default Transactions;

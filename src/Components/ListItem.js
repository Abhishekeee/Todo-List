import React from "react";

export default function ListItem(props) {
  return (
    <li
      className="bi bi-x-circle-fill ms-1 my-1"
      onClick={() => {
        props.onSelect(props.id);
      }}
    >
      <span className="list ms-2"> {props.items}</span>
    </li>
  );
}

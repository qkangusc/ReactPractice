import * as React from "react";
import "./styles.css";

export const DialogBase: React.FC<{}> = props => {
  return (
    <div className={"dialog"}>
      <h2>{props.title}</h2>
      <p>{props.subText}</p>
      <button>OK</button>
      <button>Cancel</button>
    </div>
  );
};

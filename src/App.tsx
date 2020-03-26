import * as React from "react";
import "./styles.css";
import { DialogBase } from "./DialogBase";
import { extendDialog } from "./HOC";

const SuperDialog = extendDialog(DialogBase, (title, subText) => {
  return {
    title: "Super Dialog",
    subText: "This is super dialog"
  };
});

export default function App() {
  return (
    <div className="App">
      <SuperDialog />
    </div>
  );
}

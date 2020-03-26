import * as React from "react";
import "./styles.css";

// code inside HOC is the logic that can be shared among different wrapped
// component
export const extendDialog = (
  WrappedComponent: React.FC<{}>,
  setDialogParam: () => Object
) => {
  // props here is the prop that will be set in HOC
  // i.e <HOC prop={} />
  const NewDialog: React.FC<{}> = props => {
    const [title, setTitle] = React.useState("");
    const [subText, setSubText] = React.useState("");

    React.useEffect(() => {
      setTitle(setDialogParam().title);
      setSubText(setDialogParam().subText);
    }, []);

    return (
      <div className={"wrapper"}>
        <WrappedComponent title={title} subText={subText} />
      </div>
    );
  };

  return NewDialog;
};

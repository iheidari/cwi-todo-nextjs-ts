import React from "react";
import Toast from "../toast";

type Props = {
  error?: string;
};

const Error = (props: Props) => {
  if (!props.error) {
    return null;
  }
  return <Toast message={props.error} error />;
};

export default Error;

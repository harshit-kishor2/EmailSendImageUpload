import React from "react";

const ErrorLabel = (props) => {
  return <p className="text-danger">{props.message}</p>;
};

export default ErrorLabel;

import React from "react";
import "./style.css";

interface ToastProps {
  message: string;
  error?: boolean;
  warning?: boolean;
}

const getbgColor = (warning?: boolean, error?: boolean) => {
  if (warning) {
    return "#ff8539";
  }
  if (error) {
    return "#f75d5d";
  }
  return "#65f78e";
};

const Toast: React.FC<ToastProps> = ({ message, warning, error }) => {
  return (
    <div
      className="toast"
      style={{ backgroundColor: getbgColor(warning, error) }}
    >
      <div className="toast-content">{message}</div>
    </div>
  );
};

export default Toast;

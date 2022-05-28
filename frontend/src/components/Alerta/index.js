import React from "react";
import "./alerta.css";

const Alerta = ({ alerta }) => {
  return <div className={`${alerta.error ? "error" : "true"} "msg"`}>{alerta.msg}</div>;
};

export default Alerta;

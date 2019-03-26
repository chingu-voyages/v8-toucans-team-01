import React from "react";
import style from "./title.module.css";

const title = props => {
  return <h1 className={style.title}>{props.name}</h1>;
};

export default title;

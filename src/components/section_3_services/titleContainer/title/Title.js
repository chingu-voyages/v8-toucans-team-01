import React from "react";
import style from "./title.module.css";

const title = props => {
  return (
    <div className={style.container}>
      <h4 className={style.title}>{props.name}</h4>
      <p className={style.bar} />
    </div>
  );
};

export default title;

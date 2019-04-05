import React from "react";
import style from "./info.module.css";
const info = props => {
  return (
    <div className={style.container}>
      <img className={style.image} src={props.image} alt="" />
      <h1 className={style.title}>{props.title}</h1>
      <p className={style.p}>{props.info}</p>
      <div className={style.viewMore}>View More &#10095;</div>
    </div>
  );
};
export default info;

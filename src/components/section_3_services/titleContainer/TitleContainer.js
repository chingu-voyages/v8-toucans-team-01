import React from "react";
import style from "./title.module.css";
import Title from "./title/Title";

const titleContainer = () => {
  return (
    <div className={style.container}>
      <Title className={style.title} name="Services" />
      <Title name="Technologies" />
      <Title name="Industries" />
    </div>
  );
};

export default titleContainer;

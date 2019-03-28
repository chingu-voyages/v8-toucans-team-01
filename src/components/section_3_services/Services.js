import React from "react";
import style from "./services.module.css";
import Title from "../title/Title";
import SectionTitle from "./titleContainer/TitleContainer";

const services = () => {
  return (
    <div className={style.background}>
      <Title name="What We Offer" />
      <SectionTitle />
    </div>
  );
};
export default services;

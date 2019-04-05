import React from "react";
import style from "./services.module.css";
import Title from "../title/Title";
import SectionTitle from "./titleContainer/TitleContainer";
import InfoContainer from "../section_3_services/infoContainer/InfoContainer";

const services = () => {
  return (
    <div className={style.background}>
      <Title name="What We Offer" />
      <SectionTitle />
      <InfoContainer />
    </div>
  );
};
export default services;

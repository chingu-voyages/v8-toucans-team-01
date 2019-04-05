import React from "react";
import style from "./info.module.css";
import Info from "./Info";

const container = () => {
  return (
    <div className={style.maincontainer}>
      <Info
        images=""
        title="Enterprise Software Development"
        info="Create complex intersprise software, ensure reliable software
        interation, modernise your legacy system."
      />
      <Info
        images=""
        title="Mobile App Development"
        info="Create an impactful mobile app that fits your brand and industry within a shorter time frame."
      />
      <Info
        images=""
        title="IT Consulting"
        info="Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app portfolios."
      />
      <Info
        images=""
        title="Dedicated Development Team"
        info="Hire a loyal software development team with niche skills and deep expertise."
      />
      <Info
        images=""
        title="UX / UI Design"
        info="Build the project you need on time with an experianced team that uses a clear and effective design process."
      />
      <Info
        images=""
        title="QA & Testing"
        info="Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software."
      />
    </div>
  );
};

export default container;

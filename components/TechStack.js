import React, { useRef } from "react";
import { stackArr } from "../localData";
import TechStackItem from "./TechStackItem";
import SectionHeadlineItem from "./SectionHeadlineItem";

const TechStack = () => {
  return (
    <div className="section-container">
      <SectionHeadlineItem headlineText="Tech stack" />
      <div className={"stack_cards"}>
        {stackArr.map((stackEl, index) => {
          return <TechStackItem stackEl={stackEl} key={stackEl.id} />;
        })}
      </div>
    </div>
  );
};

export default TechStack;

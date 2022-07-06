import React from "react";

const SectionHeadlineItem = ({ headlineText }) => {
  return (
    <div>
      <div className="headlineName">
        <h2 className="headlineText">{headlineText}</h2>
      </div>
    </div>
  );
};

export default SectionHeadlineItem;

import React from "react";
import Image from "next/image";

const TechStackItem = ({ stackEl }) => {
  return (
    <div className="stack_item">
      <div className="stack_item_photo"></div>
      <Image src={stackEl.img} width={300} height={300} />
      <div className="stack_item_content">{stackEl.hoverText}</div>
      <style jsx>
        {`
          .stack_item_content {
            background-color: rgba(${stackEl.color});
          }
        `}
      </style>
    </div>
  );
};

export default TechStackItem;

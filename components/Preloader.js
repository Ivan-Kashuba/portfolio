import React from "react";

const Preloader = () => {
  return (
    <>
      <div className="preloader">
        <img src="/spinner.svg" alt="Loading..." />
      </div>
      <style jsx>{`
        .preloader {
          margin: 0 auto;
          text-align: center;
          width: 100%;
          position: absolute;
          top: 40%;
        }
      `}</style>
    </>
  );
};

export default Preloader;

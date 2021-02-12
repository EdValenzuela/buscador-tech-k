import React from "react";

const Container = ({ children }) => (
  <>
    <div className="flex flex-wrap flex-col justify-between md:flex-row">
      {children}
    </div>
  </>
);

export default Container;

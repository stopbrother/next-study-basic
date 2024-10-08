import React, { PropsWithChildren } from "react";

const Todolayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen">
      <main className="max-w-[768px] mx-auto p-4">{children}</main>
    </div>
  );
};

export default Todolayout;

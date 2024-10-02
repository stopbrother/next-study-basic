import Link from "next/link";
import React from "react";

const RootPage = () => {
  return (
    <div>
      Rootpage
      <Link href="/todo/1">detail</Link>
    </div>
  );
};

export default RootPage;

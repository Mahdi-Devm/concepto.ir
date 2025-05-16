import React, { ReactNode } from "react";
import Nabarsearch from "@/components/search/Nabarsearch";
interface LayoutProps {
  children: ReactNode;
}

function layout({ children }: LayoutProps) {
  return (
    <section>
      <Nabarsearch />
      <div>{children}</div>
    </section>
  );
}

export default layout;

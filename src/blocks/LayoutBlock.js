import React from "react";
import HeaderBlock from "./HeaderBlock";
import FooterBlock from "./FooterBlock";

//Reusable layout component

export default function LayoutBlock({ children }) {
  return (
    <div className="layout-container">
      <HeaderBlock />
      <div className="layout-children">{children}</div>
      <FooterBlock />
    </div>
  );
}

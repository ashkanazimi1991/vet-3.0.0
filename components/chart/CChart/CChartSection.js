import React from "react";
// import ComboChart from "./ComboChart";
import SEO from "./SEO";
import Performance from "./Performance";
import Accessibility from "./Accessibility"
import BestPractices from "./BestPractices";

export default function CChartSection() {
  return (
    <div className="grid grid-cols-2">   
      <SEO/>
      <Performance/>
      <Accessibility/>
      <BestPractices/>
      {/* <ComboChart/> */}
    </div>
   
  );
}

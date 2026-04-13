import { createIcon } from "../create-icon.js";

export const ArrowsMerge = createIcon("arrows-merge", [
  [
    "path",
    {
      d: "M10 18.125V12.5L5.625 8.125V3.125",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M12.5 15.625L10 18.125L7.5 15.625",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M14.375 3.125V8.125L10 12.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default ArrowsMerge;

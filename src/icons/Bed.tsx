import { createIcon } from "../create-icon.js";

export const Bed = createIcon("bed", [
  [
    "path",
    {
      d: "M8.75 13.125V6.25H16.875C17.5381 6.25 18.1739 6.51338 18.6427 6.98225C19.1116 7.45106 19.375 8.08694 19.375 8.75V13.125",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M1.875 16.25V3.75",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M1.875 13.125H19.375V16.25",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M8.75 6.25H1.875",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "rect",
    {
      width: "20",
      height: "20",
      fill: "currentColor",
      stroke: "none"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default Bed;

import { createIcon } from "../create-icon.js";

export const FlowArrow = createIcon("flow-arrow", [
  [
    "path",
    {
      d: "M3.75 16.25C5.13071 16.25 6.25 15.1307 6.25 13.75C6.25 12.3693 5.13071 11.25 3.75 11.25C2.36929 11.25 1.25 12.3693 1.25 13.75C1.25 15.1307 2.36929 16.25 3.75 16.25Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M16.25 3.75L18.75 6.25L16.25 8.75",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M6.25 13.75C13.125 13.75 9.375 6.25 16.25 6.25H18.75",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20,
  strokeWidthBase: 1.6
});

export default FlowArrow;

import { createIcon } from "../create-icon.js";

export const StackMinus = createIcon("stack-minus", [
  [
    "path",
    {
      d: "M14.375 15.625H18.125",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M2.5 10L10 14.375L17.5 10",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M2.5 6.25L10 10.625L17.5 6.25L10 1.875L2.5 6.25Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M2.5 13.75L10 18.125L11.25 17.3961",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default StackMinus;

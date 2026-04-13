import { createIcon } from "../create-icon.js";

export const Stack = createIcon("stack", [
  [
    "path",
    {
      d: "M2.5 13.75L10 18.125L17.5 13.75",
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
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default Stack;

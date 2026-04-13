import { createIcon } from "../create-icon.js";

export const StackSimple = createIcon("stack-simple", [
  [
    "path",
    {
      d: "M1.25 8.125L10 13.125L18.75 8.125L10 3.125L1.25 8.125Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M1.25 11.25L10 16.25L18.75 11.25",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default StackSimple;

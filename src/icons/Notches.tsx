import { createIcon } from "../create-icon.js";

export const Notches = createIcon("notches", [
  [
    "path",
    {
      d: "M16.25 10L10 16.25",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M15 3.125L3.125 15",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default Notches;

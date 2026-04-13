import { createIcon } from "../create-icon.js";

export const Notches = createIcon("notches", [
  [
    "path",
    {
      d: "M26 16L16 26",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M24 5L5 24",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
]);

export default Notches;

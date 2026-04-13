import { createIcon } from "../create-icon.js";

export const X = createIcon("x", [
  [
    "path",
    {
      d: "M25 7L7 25",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M25 25L7 7",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
]);

export default X;

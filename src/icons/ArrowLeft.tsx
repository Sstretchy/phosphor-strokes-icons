import { createIcon } from "../create-icon.js";

export const ArrowLeft = createIcon("arrow-left", [
  [
    "path",
    {
      d: "M27 16H5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M14 7L5 16L14 25",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
]);

export default ArrowLeft;

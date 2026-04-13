import { createIcon } from "../create-icon.js";

export const Copy = createIcon("copy", [
  [
    "path",
    {
      d: "M21 21H27V5H11V11",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M21 11H5V27H21V11Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
]);

export default Copy;

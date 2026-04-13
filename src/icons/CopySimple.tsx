import { createIcon } from "../create-icon.js";

export const CopySimple = createIcon("copy-simple", [
  [
    "path",
    {
      d: "M23 9H5V27H23V9Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M9 5H27V23",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
]);

export default CopySimple;

import { createIcon } from "../create-icon";

export const CornersOut = createIcon("corners-out", [
  [
    "path",
    {
      d: "M21 6H26V11",
      stroke: "currentColor"
    }
  ],
  [
    "path",
    {
      d: "M11 26H6V21",
      stroke: "currentColor"
    }
  ],
  [
    "path",
    {
      d: "M26 21V26H21",
      stroke: "currentColor"
    }
  ],
  [
    "path",
    {
      d: "M6 11V6H11",
      stroke: "currentColor"
    }
  ]
]);

export default CornersOut;

import { createIcon } from "../create-icon";

export const CornersIn = createIcon("corners-in", [
  [
    "path",
    {
      d: "M26 12H20V6",
      stroke: "currentColor"
    }
  ],
  [
    "path",
    {
      d: "M6 20H12V26",
      stroke: "currentColor"
    }
  ],
  [
    "path",
    {
      d: "M20 26V20H26",
      stroke: "currentColor"
    }
  ],
  [
    "path",
    {
      d: "M12 6V12H6",
      stroke: "currentColor"
    }
  ]
]);

export default CornersIn;

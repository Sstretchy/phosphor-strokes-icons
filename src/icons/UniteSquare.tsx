import { createIcon } from "../create-icon.js";

export const UniteSquare = createIcon("unite-square", [
  [
    "path",
    {
      d: "M7.5 16.875H16.875V7.5H12.5V3.125H3.125V12.5H7.5V16.875Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M3.125 3.125L16.875 16.875",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M8.125 3.125L16.875 11.875",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M3.125 8.125L11.875 16.875",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default UniteSquare;

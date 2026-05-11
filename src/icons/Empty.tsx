import { createIcon } from "../create-icon.js";

export const Empty = createIcon("empty", [
  [
    "path",
    {
      d: "M10 16.875C13.7969 16.875 16.875 13.7969 16.875 10C16.875 6.20304 13.7969 3.125 10 3.125C6.20304 3.125 3.125 6.20304 3.125 10C3.125 13.7969 6.20304 16.875 10 16.875Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M16.25 3.125L3.75 16.875",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20,
  strokeWidthBase: 1.6
});

export default Empty;

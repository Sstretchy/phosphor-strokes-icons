import { createIcon } from "../create-icon.js";

export const SquareSplitVertical = createIcon("square-split-vertical", [
  [
    "path",
    {
      d: "M15.625 3.75H4.375C4.02982 3.75 3.75 4.02982 3.75 4.375V15.625C3.75 15.9702 4.02982 16.25 4.375 16.25H15.625C15.9702 16.25 16.25 15.9702 16.25 15.625V4.375C16.25 4.02982 15.9702 3.75 15.625 3.75Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M3.75 10H16.25",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default SquareSplitVertical;

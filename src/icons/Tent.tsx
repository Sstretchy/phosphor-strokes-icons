import { createIcon } from "../create-icon.js";

export const Tent = createIcon("tent", [
  [
    "path",
    {
      d: "M5.625 3.75L0.625 15H10.625L5.625 3.75Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M10.625 15H19.375L14.375 3.75H5.625V15",
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

export default Tent;

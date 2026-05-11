import { createIcon } from "../create-icon.js";

export const ArrowFatLineRight = createIcon("arrow-fat-line-right", [
  [
    "path",
    {
      d: "M10.625 2.5L18.125 10L10.625 17.5V13.75H5.625V6.25H10.625V2.5Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M3.125 13.75V6.25",
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

export default ArrowFatLineRight;

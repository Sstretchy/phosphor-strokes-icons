import { createIcon } from "../create-icon.js";

export const Sailboat = createIcon("sailboat", [
  [
    "path",
    {
      d: "M1.25 13.75H18.75L16.4375 16.6406C16.379 16.7137 16.3048 16.7727 16.2204 16.8133C16.1361 16.8539 16.0436 16.8749 15.95 16.875H4.05C3.95638 16.8749 3.86396 16.8539 3.77958 16.8133C3.6952 16.7727 3.62101 16.7137 3.5625 16.6406L1.25 13.75Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M10.625 10.625H16.875L10.625 3.75",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M10.625 13.75V0.625L2.5 10.625H10.625",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "rect",
    {
      width: "20",
      height: "20",
      fill: "currentColor",
      stroke: "none"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default Sailboat;

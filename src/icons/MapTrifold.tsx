import { createIcon } from "../create-icon.js";

export const MapTrifold = createIcon("map-trifold", [
  [
    "path",
    {
      d: "M7.5 14.375V3.125",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M12.5 5.625V16.875",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M7.5 14.375L2.5 15.625V4.375L7.5 3.125L12.5 5.625L17.5 4.375V15.625L12.5 16.875L7.5 14.375Z",
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

export default MapTrifold;

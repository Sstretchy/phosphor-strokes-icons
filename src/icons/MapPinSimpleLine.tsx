import { createIcon } from "../create-icon.js";

export const MapPinSimpleLine = createIcon("map-pin-simple-line", [
  [
    "path",
    {
      d: "M10 10C12.0711 10 13.75 8.32106 13.75 6.25C13.75 4.17893 12.0711 2.5 10 2.5C7.92894 2.5 6.25 4.17893 6.25 6.25C6.25 8.32106 7.92894 10 10 10Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M10 16.875V10",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M3.125 16.875H16.875",
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

export default MapPinSimpleLine;

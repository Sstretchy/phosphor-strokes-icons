import { createIcon } from "../create-icon.js";

export const MapPinSimpleArea = createIcon("map-pin-simple-area", [
  [
    "path",
    {
      d: "M10 7.5C11.3807 7.5 12.5 6.38069 12.5 5C12.5 3.61929 11.3807 2.5 10 2.5C8.61931 2.5 7.5 3.61929 7.5 5C7.5 6.38069 8.61931 7.5 10 7.5Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M10 7.5V13.75",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M13.125 10.865C16.0609 11.3337 18.125 12.4501 18.125 13.7501C18.125 15.4759 14.4875 16.8751 10 16.8751C5.5125 16.8751 1.875 15.4759 1.875 13.7501C1.875 12.4501 3.93906 11.3353 6.875 10.865",
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

export default MapPinSimpleArea;

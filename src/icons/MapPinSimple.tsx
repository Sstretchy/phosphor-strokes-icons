import { createIcon } from "../create-icon.js";

export const MapPinSimple = createIcon("map-pin-simple", [
  [
    "path",
    {
      d: "M10 9.375C12.0711 9.375 13.75 7.69606 13.75 5.625C13.75 3.55393 12.0711 1.875 10 1.875C7.92894 1.875 6.25 3.55393 6.25 5.625C6.25 7.69606 7.92894 9.375 10 9.375Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M10 18.125V9.375",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default MapPinSimple;

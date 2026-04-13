import { createIcon } from "../create-icon.js";

export const MapTrifold = createIcon("map-trifold", [
  [
    "path",
    {
      d: "M12 23V5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M20 9V27",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M12 23L4 25V7L12 5L20 9L28 7V25L20 27L12 23Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
]);

export default MapTrifold;

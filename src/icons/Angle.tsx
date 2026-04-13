import { createIcon } from "../create-icon.js";

export const Angle = createIcon("angle", [
  [
    "path",
    {
      d: "M8.125 5.625C10.1141 5.625 12.0218 6.41519 13.4283 7.82169C14.8348 9.22825 15.625 11.1359 15.625 13.125",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M5.625 2.5V15.625H18.75",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M2.5 5.625H5.625",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default Angle;

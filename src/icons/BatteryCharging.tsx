import { createIcon } from "../create-icon.js";

export const BatteryCharging = createIcon("battery-charging", [
  [
    "path",
    {
      d: "M25 8H4C2.89543 8 2 8.89543 2 10V22C2 23.1046 2.89543 24 4 24H25C26.1046 24 27 23.1046 27 22V10C27 8.89543 26.1046 8 25 8Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M31 12V20",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M14.5 20L16.5 16H12.5L14.5 12",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
]);

export default BatteryCharging;

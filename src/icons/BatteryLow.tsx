import { createIcon } from "../create-icon.js";

export const BatteryLow = createIcon("battery-low", [
  [
    "path",
    {
      d: "M25 8H4C2.89543 8 2 8.89543 2 10V22C2 23.1046 2.89543 24 4 24H25C26.1046 24 27 23.1046 27 22V10C27 8.89543 26.1046 8 25 8Z",
      stroke: "currentColor"
    }
  ],
  [
    "path",
    {
      d: "M7 12V20",
      stroke: "currentColor"
    }
  ],
  [
    "path",
    {
      d: "M31 12V20",
      stroke: "currentColor"
    }
  ]
]);

export default BatteryLow;

import { createIcon } from "../create-icon";

export const BatteryWarning = createIcon("battery-warning", [
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
      d: "M31 12V20",
      stroke: "currentColor"
    }
  ],
  [
    "path",
    {
      d: "M14.5 12V15.5",
      stroke: "currentColor"
    }
  ],
  [
    "path",
    {
      d: "M14.5 20.75C15.1904 20.75 15.75 20.1904 15.75 19.5C15.75 18.8096 15.1904 18.25 14.5 18.25C13.8096 18.25 13.25 18.8096 13.25 19.5C13.25 20.1904 13.8096 20.75 14.5 20.75Z",
      fill: "currentColor",
      stroke: "none"
    }
  ]
]);

export default BatteryWarning;

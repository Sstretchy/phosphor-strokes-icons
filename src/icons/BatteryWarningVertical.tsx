import { createIcon } from "../create-icon.js";

export const BatteryWarningVertical = createIcon("battery-warning-vertical", [
  [
    "path",
    {
      d: "M16 12V17",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M16 22.75C16.6904 22.75 17.25 22.1904 17.25 21.5C17.25 20.8096 16.6904 20.25 16 20.25C15.3096 20.25 14.75 20.8096 14.75 21.5C14.75 22.1904 15.3096 22.75 16 22.75Z",
      fill: "currentColor",
      stroke: "none"
    }
  ],
  [
    "path",
    {
      d: "M12 1H20",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M22 5H10C8.89543 5 8 5.89543 8 7V28C8 29.1046 8.89543 30 10 30H22C23.1046 30 24 29.1046 24 28V7C24 5.89543 23.1046 5 22 5Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
]);

export default BatteryWarningVertical;

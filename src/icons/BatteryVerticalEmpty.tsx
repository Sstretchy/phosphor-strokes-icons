import { createIcon } from "../create-icon.js";

export const BatteryVerticalEmpty = createIcon("battery-vertical-empty", [
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

export default BatteryVerticalEmpty;

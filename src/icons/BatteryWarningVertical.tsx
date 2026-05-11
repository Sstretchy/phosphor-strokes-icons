import { createIcon } from "../create-icon.js";

export const BatteryWarningVertical = createIcon("battery-warning-vertical", [
  [
    "path",
    {
      d: "M10 7.5V10.625",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M10.0005 13.4375L9.99995 13.4376L9.99945 13.4375H10.0005Z",
      stroke: "currentColor",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M7.5 0.625H12.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M13.75 3.125H6.25C5.55964 3.125 5 3.68464 5 4.375V17.5C5 18.1904 5.55964 18.75 6.25 18.75H13.75C14.4404 18.75 15 18.1904 15 17.5V4.375C15 3.68464 14.4404 3.125 13.75 3.125Z",
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

export default BatteryWarningVertical;

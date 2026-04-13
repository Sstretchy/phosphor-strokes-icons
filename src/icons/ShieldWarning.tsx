import { createIcon } from "../create-icon.js";

export const ShieldWarning = createIcon("shield-warning", [
  [
    "path",
    {
      d: "M10 10.625V7.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M10 14.2188C10.4315 14.2188 10.7812 13.869 10.7812 13.4375C10.7812 13.006 10.4315 12.6562 10 12.6562C9.5685 12.6562 9.21875 13.006 9.21875 13.4375C9.21875 13.869 9.5685 14.2188 10 14.2188Z",
      fill: "currentColor",
      stroke: "none"
    }
  ],
  [
    "path",
    {
      d: "M16.875 8.75V4.375C16.875 4.20924 16.8091 4.05027 16.6919 3.93306C16.5747 3.81585 16.4157 3.75 16.25 3.75H3.75C3.58424 3.75 3.42527 3.81585 3.30806 3.93306C3.19085 4.05027 3.125 4.20924 3.125 4.375V8.75C3.125 16.25 10 18.125 10 18.125C10 18.125 16.875 16.25 16.875 8.75Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default ShieldWarning;

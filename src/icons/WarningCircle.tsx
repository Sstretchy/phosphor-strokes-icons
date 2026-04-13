import { createIcon } from "../create-icon.js";

export const WarningCircle = createIcon("warning-circle", [
  [
    "path",
    {
      d: "M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M10 10.625V6.25",
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
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default WarningCircle;

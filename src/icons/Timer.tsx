import { createIcon } from "../create-icon.js";

export const Timer = createIcon("timer", [
  [
    "path",
    {
      d: "M10 17.5C13.7969 17.5 16.875 14.4219 16.875 10.625C16.875 6.82806 13.7969 3.75 10 3.75C6.20304 3.75 3.125 6.82806 3.125 10.625C3.125 14.4219 6.20304 17.5 10 17.5Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M10 10.625L13.125 7.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M8.125 1.25H11.875",
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

export default Timer;

import { createIcon } from "../create-icon.js";

export const ToggleLeft = createIcon("toggle-left", [
  [
    "path",
    {
      d: "M13.75 5H6.25C3.48857 5 1.25 7.23856 1.25 10C1.25 12.7614 3.48857 15 6.25 15H13.75C16.5114 15 18.75 12.7614 18.75 10C18.75 7.23856 16.5114 5 13.75 5Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M6.25 12.5C7.63069 12.5 8.75 11.3807 8.75 10C8.75 8.61931 7.63069 7.5 6.25 7.5C4.86929 7.5 3.75 8.61931 3.75 10C3.75 11.3807 4.86929 12.5 6.25 12.5Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default ToggleLeft;

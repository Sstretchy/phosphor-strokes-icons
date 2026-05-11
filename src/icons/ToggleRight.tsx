import { createIcon } from "../create-icon.js";

export const ToggleRight = createIcon("toggle-right", [
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
      d: "M13.75 12.5C15.1307 12.5 16.25 11.3807 16.25 10C16.25 8.61931 15.1307 7.5 13.75 7.5C12.3693 7.5 11.25 8.61931 11.25 10C11.25 11.3807 12.3693 12.5 13.75 12.5Z",
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

export default ToggleRight;

import { createIcon } from "../create-icon.js";

export const Cylinder = createIcon("cylinder", [
  [
    "path",
    {
      d: "M10 7.5C12.7614 7.5 15 6.2408 15 4.6875C15 3.1342 12.7614 1.875 10 1.875C7.23856 1.875 5 3.1342 5 4.6875C5 6.2408 7.23856 7.5 10 7.5Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M5 4.6875V15.3125C5 16.8656 7.23831 18.125 10 18.125C12.7617 18.125 15 16.8656 15 15.3125V4.6875",
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

export default Cylinder;

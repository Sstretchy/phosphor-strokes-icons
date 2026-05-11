import { createIcon } from "../create-icon.js";

export const Stairs = createIcon("stairs", [
  [
    "path",
    {
      d: "M3.75 13.75H8.125V10.625H11.875V7.5H16.25",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M15.625 2.5H4.375C4.02982 2.5 3.75 2.77982 3.75 3.125V16.875C3.75 17.2202 4.02982 17.5 4.375 17.5H15.625C15.9702 17.5 16.25 17.2202 16.25 16.875V3.125C16.25 2.77982 15.9702 2.5 15.625 2.5Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M8.125 13.75H16.25",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M11.875 10.625H16.25",
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

export default Stairs;

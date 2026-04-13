import { createIcon } from "../create-icon.js";

export const MouseScroll = createIcon("mouse-scroll", [
  [
    "path",
    {
      d: "M11.25 1.875H8.75C6.33375 1.875 4.375 3.83376 4.375 6.25V13.75C4.375 16.1662 6.33375 18.125 8.75 18.125H11.25C13.6662 18.125 15.625 16.1662 15.625 13.75V6.25C15.625 3.83376 13.6662 1.875 11.25 1.875Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M11.875 6.875L10 5L8.125 6.875",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M11.875 13.125L10 15L8.125 13.125",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M10 5V15",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default MouseScroll;

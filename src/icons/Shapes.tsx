import { createIcon } from "../create-icon.js";

export const Shapes = createIcon("shapes", [
  [
    "path",
    {
      d: "M5 5L1.875 14.375H8.125L5 5Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M12.1875 9.375C14.086 9.375 15.625 7.836 15.625 5.9375C15.625 4.03902 14.086 2.5 12.1875 2.5C10.289 2.5 8.75 4.03902 8.75 5.9375C8.75 7.836 10.289 9.375 12.1875 9.375Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M17.5 11.875H10.625V16.25H17.5V11.875Z",
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

export default Shapes;

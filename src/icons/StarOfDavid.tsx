import { createIcon } from "../create-icon.js";

export const StarOfDavid = createIcon("star-of-david", [
  [
    "path",
    {
      d: "M10 18.75L17.5 5.625L2.5 5.62813L10 18.75Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M10 1.25L17.5 14.375L2.5 14.3719L10 1.25Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default StarOfDavid;

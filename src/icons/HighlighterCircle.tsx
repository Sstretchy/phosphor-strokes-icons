import { createIcon } from "../create-icon.js";

export const HighlighterCircle = createIcon("highlighter-circle", [
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
      d: "M8.125 11.25V7.5L11.875 5.625V11.25",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M13.125 16.8203V11.875C13.125 11.7093 13.0591 11.5503 12.9419 11.4331C12.8247 11.3159 12.6657 11.25 12.5 11.25H7.5C7.33425 11.25 7.17525 11.3159 7.05806 11.4331C6.94088 11.5503 6.875 11.7093 6.875 11.875V16.8203",
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

export default HighlighterCircle;

import { createIcon } from "../create-icon.js";

export const ArrowURightDown = createIcon("arrow-u-right-down", [
  [
    "path",
    {
      d: "M9.375 13.75L13.125 17.5L16.875 13.75",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M4.375 13.75V6.875C4.375 5.71467 4.83594 4.60188 5.65641 3.78141C6.47688 2.96094 7.58969 2.5 8.75 2.5C9.91031 2.5 11.0231 2.96094 11.8436 3.78141C12.6641 4.60188 13.125 5.71467 13.125 6.875V17.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default ArrowURightDown;

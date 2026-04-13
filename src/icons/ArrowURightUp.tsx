import { createIcon } from "../create-icon.js";

export const ArrowURightUp = createIcon("arrow-u-right-up", [
  [
    "path",
    {
      d: "M9.375 6.25L13.125 2.5L16.875 6.25",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M4.375 6.25V13.125C4.375 14.2853 4.83594 15.3981 5.65641 16.2186C6.47688 17.0391 7.58969 17.5 8.75 17.5C9.91031 17.5 11.0231 17.0391 11.8436 16.2186C12.6641 15.3981 13.125 14.2853 13.125 13.125V2.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default ArrowURightUp;

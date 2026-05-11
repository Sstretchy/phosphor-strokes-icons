import { createIcon } from "../create-icon.js";

export const SubsetOf = createIcon("subset-of", [
  [
    "path",
    {
      d: "M15.625 16.25H3.75",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M15.625 4.375H8.125C6.96469 4.375 5.85188 4.83594 5.03141 5.65641C4.21094 6.47688 3.75 7.58969 3.75 8.75C3.75 9.91031 4.21094 11.0231 5.03141 11.8436C5.85188 12.6641 6.96469 13.125 8.125 13.125H15.625",
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

export default SubsetOf;

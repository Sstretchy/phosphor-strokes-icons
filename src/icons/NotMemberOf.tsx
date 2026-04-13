import { createIcon } from "../create-icon.js";

export const NotMemberOf = createIcon("not-member-of", [
  [
    "path",
    {
      d: "M16.25 3.125L3.75 16.875",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M15.625 3.75H10C8.34238 3.75 6.75269 4.40848 5.58058 5.58058C4.40848 6.75269 3.75 8.34238 3.75 10C3.75 11.6576 4.40848 13.2473 5.58058 14.4194C6.75269 15.5915 8.34238 16.25 10 16.25H15.625",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M15.625 10H3.75",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default NotMemberOf;

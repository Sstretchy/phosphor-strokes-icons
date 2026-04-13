import { createIcon } from "../create-icon.js";

export const SignOut = createIcon("sign-out", [
  [
    "path",
    {
      d: "M8.75 3.125H3.75V16.875H8.75",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M8.75 10H17.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M14.375 6.875L17.5 10L14.375 13.125",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default SignOut;

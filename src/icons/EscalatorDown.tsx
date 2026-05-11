import { createIcon } from "../create-icon.js";

export const EscalatorDown = createIcon("escalator-down", [
  [
    "path",
    {
      d: "M13.75 6.25L15.625 8.125L17.5 6.25",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M15.625 3.75V8.125",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M2.5 3.75H6.875L14.375 11.875H17.5C17.6657 11.875 17.8247 11.9409 17.9419 12.0581C18.0591 12.1753 18.125 12.3343 18.125 12.5V15.625C18.125 15.7907 18.0591 15.9497 17.9419 16.0669C17.8247 16.1841 17.6657 16.25 17.5 16.25H13.125L5.625 8.125H2.5C2.33424 8.125 2.17527 8.05912 2.05806 7.94194C1.94085 7.82475 1.875 7.66575 1.875 7.5V4.375C1.875 4.20924 1.94085 4.05027 2.05806 3.93306C2.17527 3.81585 2.33424 3.75 2.5 3.75Z",
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

export default EscalatorDown;

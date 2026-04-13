import { createIcon } from "../create-icon.js";

export const EscalatorUp = createIcon("escalator-up", [
  [
    "path",
    {
      d: "M2.5 16.25H6.875L14.375 8.125H17.5C17.6657 8.125 17.8247 8.05912 17.9419 7.94194C18.0591 7.82475 18.125 7.66575 18.125 7.5V4.375C18.125 4.20924 18.0591 4.05027 17.9419 3.93306C17.8247 3.81585 17.6657 3.75 17.5 3.75H13.125L5.625 11.875H2.5C2.33424 11.875 2.17527 11.9409 2.05806 12.0581C1.94085 12.1753 1.875 12.3343 1.875 12.5V15.625C1.875 15.7907 1.94085 15.9497 2.05806 16.0669C2.17527 16.1841 2.33424 16.25 2.5 16.25Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M13.75 13.75L15.625 11.875L17.5 13.75",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M15.625 11.875V16.25",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default EscalatorUp;

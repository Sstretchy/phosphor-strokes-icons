import { createIcon } from "../create-icon.js";

export const BoxArrowDown = createIcon("box-arrow-down", [
  [
    "path",
    {
      d: "M16.25 16.875H3.75C3.58424 16.875 3.42527 16.8091 3.30806 16.6919C3.19085 16.5747 3.125 16.4157 3.125 16.25V5.625L4.375 3.125H15.625L16.875 5.625V16.25C16.875 16.4157 16.8091 16.5747 16.6919 16.6919C16.5747 16.8091 16.4157 16.875 16.25 16.875Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M3.125 5.625H16.875",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M10 8.125V14.375",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M7.5 11.875L10 14.375L12.5 11.875",
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

export default BoxArrowDown;

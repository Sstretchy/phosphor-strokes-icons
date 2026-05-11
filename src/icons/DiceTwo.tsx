import { createIcon } from "../create-icon.js";

export const DiceTwo = createIcon("dice-two", [
  [
    "path",
    {
      d: "M15 3.125H5C3.96447 3.125 3.125 3.96447 3.125 5V15C3.125 16.0356 3.96447 16.875 5 16.875H15C16.0356 16.875 16.875 16.0356 16.875 15V5C16.875 3.96447 16.0356 3.125 15 3.125Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M8.43801 8.4375L8.43751 8.4376L8.43701 8.4375H8.43801Z",
      stroke: "currentColor",
      strokeWidth: 2.176,
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M11.563 11.5625L11.5625 11.5626L11.562 11.5625H11.563Z",
      stroke: "currentColor",
      strokeWidth: 2.176,
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20,
  strokeWidthBase: 1.6
});

export default DiceTwo;

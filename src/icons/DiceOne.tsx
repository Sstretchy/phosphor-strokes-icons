import { createIcon } from "../create-icon.js";

export const DiceOne = createIcon("dice-one", [
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
      d: "M10.0005 10L10 10.0001L9.99951 10H10.0005Z",
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

export default DiceOne;

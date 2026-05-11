import { createIcon } from "../create-icon.js";

export const QuestionMark = createIcon("question-mark", [
  [
    "path",
    {
      d: "M10 12.5V11.25C12.4164 11.25 14.375 9.57113 14.375 7.5C14.375 5.42891 12.4164 3.75 10 3.75C7.58356 3.75 5.625 5.42891 5.625 7.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M10.0005 16.25L10 16.2501L9.99951 16.25H10.0005Z",
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

export default QuestionMark;

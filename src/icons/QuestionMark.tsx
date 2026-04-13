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
      d: "M10 17.3438C10.6041 17.3438 11.0938 16.8541 11.0938 16.25C11.0938 15.6459 10.6041 15.1562 10 15.1562C9.39594 15.1562 8.90625 15.6459 8.90625 16.25C8.90625 16.8541 9.39594 17.3438 10 17.3438Z",
      fill: "currentColor",
      stroke: "none"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default QuestionMark;

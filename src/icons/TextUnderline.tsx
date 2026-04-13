import { createIcon } from "../create-icon.js";

export const TextUnderline = createIcon("text-underline", [
  [
    "path",
    {
      d: "M5 17.5H15",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M14.375 4.375V10.625C14.375 11.7853 13.9141 12.8981 13.0936 13.7186C12.2731 14.5391 11.1603 15 10 15C8.83969 15 7.72687 14.5391 6.90644 13.7186C6.08594 12.8981 5.625 11.7853 5.625 10.625V4.375",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default TextUnderline;

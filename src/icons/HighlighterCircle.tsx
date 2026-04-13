import { createIcon } from "../create-icon.js";

export const HighlighterCircle = createIcon("highlighter-circle", [
  [
    "path",
    {
      d: "M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z",
      stroke: "currentColor"
    }
  ],
  [
    "path",
    {
      d: "M13 18V12L19 9V18",
      stroke: "currentColor"
    }
  ],
  [
    "path",
    {
      d: "M21 26.9125V19C21 18.7348 20.8946 18.4804 20.7071 18.2929C20.5196 18.1054 20.2652 18 20 18H12C11.7348 18 11.4804 18.1054 11.2929 18.2929C11.1054 18.4804 11 18.7348 11 19V26.9125",
      stroke: "currentColor"
    }
  ]
]);

export default HighlighterCircle;

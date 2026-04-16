import { createIcon } from "../create-icon.js";

export const Flag = createIcon("flag", [
  [
    "path",
    {
      d: "M3.75 17.5V4.375",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M3.75 13.7498C8.75 9.41941 12.5 18.0803 17.5 13.7498V4.37485C12.5 8.70534 8.75 0.0443856 3.75 4.37485",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default Flag;

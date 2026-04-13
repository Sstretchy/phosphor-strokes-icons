import { createIcon } from "../create-icon.js";

export const Power = createIcon("power", [
  [
    "path",
    {
      d: "M10 3.75V10",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M13.75 4.375C15.6312 5.60156 16.875 7.58675 16.875 10C16.875 11.8234 16.1507 13.5721 14.8614 14.8614C13.5721 16.1507 11.8234 16.875 10 16.875C8.17663 16.875 6.42794 16.1507 5.13864 14.8614C3.84933 13.5721 3.125 11.8234 3.125 10C3.125 7.58675 4.36875 5.60156 6.25 4.375",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default Power;

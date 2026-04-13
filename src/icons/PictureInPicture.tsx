import { createIcon } from "../create-icon.js";

export const PictureInPicture = createIcon("picture-in-picture", [
  [
    "path",
    {
      d: "M16.875 4.375H3.125C2.77982 4.375 2.5 4.65482 2.5 5V15C2.5 15.3452 2.77982 15.625 3.125 15.625H16.875C17.2202 15.625 17.5 15.3452 17.5 15V5C17.5 4.65482 17.2202 4.375 16.875 4.375Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M10.625 15.625V10H17.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default PictureInPicture;

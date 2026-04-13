import { createIcon } from "../create-icon.js";

export const UploadSimple = createIcon("upload-simple", [
  [
    "path",
    {
      d: "M10 11.25V2.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M16.875 11.25V16.25H3.125V11.25",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M6.875 5.625L10 2.5L13.125 5.625",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default UploadSimple;

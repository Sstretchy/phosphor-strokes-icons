import { createIcon } from "../create-icon.js";

export const Waves = createIcon("waves", [
  [
    "path",
    {
      d: "M3.125 14.5008C8.75 9.83751 11.25 18.9125 16.875 14.2493",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M3.125 10.1258C8.75 5.46251 11.25 14.5375 16.875 9.87424",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M3.125 5.7508C8.75 1.08752 11.25 10.1625 16.875 5.49924",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20,
  strokeWidthBase: 1.6
});

export default Waves;

import { createIcon } from "../create-icon.js";

export const GitCommit = createIcon("git-commit", [
  [
    "path",
    {
      d: "M10 13.75C12.0711 13.75 13.75 12.0711 13.75 10C13.75 7.92894 12.0711 6.25 10 6.25C7.92894 6.25 6.25 7.92894 6.25 10C6.25 12.0711 7.92894 13.75 10 13.75Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M0.625 10H6.25",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M13.75 10H19.375",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "rect",
    {
      width: "20",
      height: "20",
      fill: "currentColor",
      stroke: "none"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default GitCommit;

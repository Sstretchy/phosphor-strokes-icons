import { createIcon } from "../create-icon.js";

export const Door = createIcon("door", [
  [
    "path",
    {
      d: "M1.875 17.5H18.125",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M4.375 17.5V3.125C4.375 2.95924 4.44085 2.80027 4.55806 2.68306C4.67527 2.56585 4.83424 2.5 5 2.5H15C15.1657 2.5 15.3247 2.56585 15.4419 2.68306C15.5591 2.80027 15.625 2.95924 15.625 3.125V17.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M12.188 10.3125L12.1875 10.3126L12.187 10.3125H12.188Z",
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

export default Door;

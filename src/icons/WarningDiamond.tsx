import { createIcon } from "../create-icon.js";

export const WarningDiamond = createIcon("warning-diamond", [
  [
    "path",
    {
      d: "M10 10.625V6.25",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M10 14.2188C10.4315 14.2188 10.7812 13.869 10.7812 13.4375C10.7812 13.006 10.4315 12.6562 10 12.6562C9.5685 12.6562 9.21875 13.006 9.21875 13.4375C9.21875 13.869 9.5685 14.2188 10 14.2188Z",
      fill: "currentColor",
      stroke: "none"
    }
  ],
  [
    "path",
    {
      d: "M9.56007 2.05716L2.05643 9.56077C1.81387 9.80333 1.81387 10.1966 2.05643 10.4391L9.56007 17.9428C9.80263 18.1853 10.1959 18.1853 10.4384 17.9428L17.942 10.4391C18.1846 10.1966 18.1846 9.80333 17.942 9.56077L10.4384 2.05716C10.1959 1.81461 9.80263 1.81461 9.56007 2.05716Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default WarningDiamond;

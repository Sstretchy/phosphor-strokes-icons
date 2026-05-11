import { createIcon } from "../create-icon.js";

export const CastleTurret = createIcon("castle-turret", [
  [
    "path",
    {
      d: "M15 17.5V8.75L16.0672 7.68281C16.1842 7.56569 16.2499 7.40694 16.25 7.24144V3.75C16.25 3.58424 16.1841 3.42527 16.0669 3.30806C15.9497 3.19085 15.7907 3.125 15.625 3.125H13.75V5.625H11.25V3.125H8.75V5.625H6.25V3.125H4.375C4.20924 3.125 4.05027 3.19085 3.93306 3.30806C3.81585 3.42527 3.75 3.58424 3.75 3.75V7.24144C3.75007 7.40694 3.81583 7.56569 3.93281 7.68281L5 8.75V17.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M8.125 17.5V13.125C8.125 12.6278 8.32256 12.1508 8.67419 11.7992C9.02581 11.4476 9.50275 11.25 10 11.25C10.4972 11.25 10.9742 11.4476 11.3258 11.7992C11.6774 12.1508 11.875 12.6278 11.875 13.125V17.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M3.125 17.5H16.875",
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

export default CastleTurret;

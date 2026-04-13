import { createIcon } from "../create-icon.js";

export const FrameCorners = createIcon("frame-corners", [
  [
    "path",
    {
      d: "M20 10H24V14",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M12 22H8V18",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M27 6H5C4.44772 6 4 6.44772 4 7V25C4 25.5523 4.44772 26 5 26H27C27.5523 26 28 25.5523 28 25V7C28 6.44772 27.5523 6 27 6Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
]);

export default FrameCorners;

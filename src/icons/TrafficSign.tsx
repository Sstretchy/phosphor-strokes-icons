import { createIcon } from "../create-icon.js";

export const TrafficSign = createIcon("traffic-sign", [
  [
    "path",
    {
      d: "M6.875 11.875V11.25C6.875 10.7528 7.07256 10.2758 7.42419 9.92419C7.77581 9.57256 8.25275 9.375 8.75 9.375H13.125",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M9.52783 1.44563L1.44636 9.52709C1.1852 9.78828 1.1852 10.2117 1.44636 10.4728L9.52783 18.5543C9.78895 18.8155 10.2124 18.8155 10.4736 18.5543L18.555 10.4728C18.8162 10.2117 18.8162 9.78828 18.555 9.52709L10.4736 1.44563C10.2124 1.18446 9.78895 1.18446 9.52783 1.44563Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M11.25 7.5L13.125 9.375L11.25 11.25",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default TrafficSign;

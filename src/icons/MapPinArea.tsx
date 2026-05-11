import { createIcon } from "../create-icon.js";

export const MapPinArea = createIcon("map-pin-area", [
  [
    "path",
    {
      d: "M10.0005 6.25L10 6.2501L9.99951 6.25H10.0005Z",
      stroke: "currentColor",
      strokeWidth: 2.176,
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M14.375 6.25C14.375 10.625 10 13.125 10 13.125C10 13.125 5.625 10.625 5.625 6.25C5.625 5.08967 6.08594 3.97688 6.90644 3.15641C7.72687 2.33594 8.83969 1.875 10 1.875C11.1603 1.875 12.2731 2.33594 13.0936 3.15641C13.9141 3.97688 14.375 5.08967 14.375 6.25Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M15.625 12.1204C17.1656 12.6891 18.125 13.4891 18.125 14.375C18.125 16.1008 14.4875 17.5 10 17.5C5.5125 17.5 1.875 16.1008 1.875 14.375C1.875 13.4891 2.83438 12.6891 4.375 12.1204",
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

export default MapPinArea;

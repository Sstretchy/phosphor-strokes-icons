import { createIcon } from "../create-icon";

export const FlowArrow = createIcon("flow-arrow", [
  [
    "path",
    {
      d: "M6 26C8.20914 26 10 24.2091 10 22C10 19.7909 8.20914 18 6 18C3.79086 18 2 19.7909 2 22C2 24.2091 3.79086 26 6 26Z",
      stroke: "currentColor"
    }
  ],
  [
    "path",
    {
      d: "M26 6L30 10L26 14",
      stroke: "currentColor"
    }
  ],
  [
    "path",
    {
      d: "M10 22C21 22 15 10 26 10H30",
      stroke: "currentColor"
    }
  ]
]);

export default FlowArrow;

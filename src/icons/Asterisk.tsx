import { createIcon } from "../create-icon.js";

export const Asterisk = createIcon("asterisk", [
  [
    "path",
    {
      d: "M16 5V27",
      stroke: "currentColor"
    }
  ],
  [
    "path",
    {
      d: "M6 10L26 22",
      stroke: "currentColor"
    }
  ],
  [
    "path",
    {
      d: "M6 22L26 10",
      stroke: "currentColor"
    }
  ]
]);

export default Asterisk;

import { createIcon } from "../create-icon.js";

export const Shapes = createIcon("shapes", [
  [
    "path",
    {
      d: "M8 8L3 23H13L8 8Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M19.5 15C22.5376 15 25 12.5376 25 9.5C25 6.46243 22.5376 4 19.5 4C16.4624 4 14 6.46243 14 9.5C14 12.5376 16.4624 15 19.5 15Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M28 19H17V26H28V19Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
]);

export default Shapes;

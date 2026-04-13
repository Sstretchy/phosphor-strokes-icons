import { createIcon } from "../create-icon.js";

export const ArrowsVertical = createIcon("arrows-vertical", [
  [
    "path",
    {
      d: "M12 7L16 3L20 7",
      stroke: "currentColor"
    }
  ],
  [
    "path",
    {
      d: "M16 29V3",
      stroke: "currentColor"
    }
  ],
  [
    "path",
    {
      d: "M20 25L16 29L12 25",
      stroke: "currentColor"
    }
  ]
]);

export default ArrowsVertical;

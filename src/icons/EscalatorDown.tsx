import { createIcon } from "../create-icon.js";

export const EscalatorDown = createIcon("escalator-down", [
  [
    "path",
    {
      d: "M22 10L25 13L28 10",
      stroke: "currentColor"
    }
  ],
  [
    "path",
    {
      d: "M25 6V13",
      stroke: "currentColor"
    }
  ],
  [
    "path",
    {
      d: "M4 6H11L23 19H28C28.2652 19 28.5196 19.1054 28.7071 19.2929C28.8946 19.4804 29 19.7348 29 20V25C29 25.2652 28.8946 25.5196 28.7071 25.7071C28.5196 25.8946 28.2652 26 28 26H21L9 13H4C3.73478 13 3.48043 12.8946 3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12V7C3 6.73478 3.10536 6.48043 3.29289 6.29289C3.48043 6.10536 3.73478 6 4 6Z",
      stroke: "currentColor"
    }
  ]
]);

export default EscalatorDown;

import { createIcon } from "../create-icon.js";

export const CurrencyEth = createIcon("currency-eth", [
  [
    "path",
    {
      d: "M10 1.25V18.75",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M16.875 10L10 13.125L3.125 10",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M10 1.25L16.875 10L10 18.75L3.125 10L10 1.25Z",
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

export default CurrencyEth;

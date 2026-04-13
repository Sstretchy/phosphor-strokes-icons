import { createIcon } from "../create-icon.js";

export const CurrencyKrw = createIcon("currency-krw", [
  [
    "path",
    {
      d: "M1.25 10.625H18.75",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M1.875 5.625L5.9375 15.625L10 5.625L14.0625 15.625L18.125 5.625",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default CurrencyKrw;

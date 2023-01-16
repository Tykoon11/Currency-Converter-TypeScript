import React from "react";

type CurrencyProps = {
  baseCurrency: string;
  firstCurrency: string;
  ratesOptions: Array<string>;
  baseValue: number;
  onChange: (value: any) => void;
};

const FromConverter = (props: CurrencyProps) => {
  return (
    <div>
      <input
        type="number"
        value={props.baseValue}
        aria-label="number"
        onChange={props.onChange}
      />

      <select name="rate" id="option"></select>
    </div>
  );
};

export default FromConverter;

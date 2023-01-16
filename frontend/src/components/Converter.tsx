import React from "react";

type CurrencyProps = {
  baseCurrency: string;
  firstCurrency: string;
  ratesOptions: Array<string>;
  baseValue: number;
  onChange: (value: any) => void;
};

const Converter = (props: CurrencyProps) => {
  return (
    <div>
      <div>
        <input
          type="number"
          value={props.baseValue}
          aria-label="number"
          onChange={props.onChange}
        />

        <select name="rate" id="option"></select>
      </div>
    </div>
  );
};

export default Converter;

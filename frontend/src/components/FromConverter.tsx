import React from "react";

type CurrencyProps = {
  baseCurrency: string;
  firstCurrency: string;
  ratesOptions: Array<string>;
  baseValue: number;
  onChange: (value: any) => void;
  onSelect: (value: any) => void;
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

      <select value={props.baseCurrency} onChange={props.onSelect}>
        {props.ratesOptions.map((rate) => (
          <option key={rate} value={rate}>
            {rate}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FromConverter;

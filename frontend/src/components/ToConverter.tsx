import React from "react";

type CurrencyProps = {
  baseCurrency: string;
  firstCurrency: string;
  ratesOptions: Array<string>;
  convertValue: number;
  onChange: (value: any) => void;
  onSelect: (value: any) => void;
};

const ToConverter = (props: CurrencyProps) => {
  return (
    <div>
      <div>
        <input
          type="number"
          value={props.convertValue}
          aria-label="number"
          onChange={props.onChange}
        />

        <select value={props.firstCurrency} onChange={props.onSelect}>
          {props.ratesOptions.map((rate: string) => (
            <option key={rate} defaultValue={rate}>
              {rate}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ToConverter;

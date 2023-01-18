import React from "react";

type CurrencyProps = {
  selectedCurrency: string;
  ratesOptions: Array<string>;
  inputValue: number;
  onChange: (value: any) => void;
  onSelect: (value: any) => void;
};

const Converter = (props: CurrencyProps) => {
  return (
    <div>
      <input
        type="number"
        value={props.inputValue}
        aria-label="number"
        onChange={props.onChange}
      />

      <select value={props.selectedCurrency} onChange={props.onSelect}>
        {props.ratesOptions.map((rate) => (
          <option key={rate} value={rate}>
            {rate}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Converter;

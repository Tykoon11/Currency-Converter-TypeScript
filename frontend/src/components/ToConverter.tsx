import React from "react";

type CurrencyProps = {
  baseCurrency: string;
  firstCurrency: string;
  ratesOptions: Array<string>;
  convertValue: number;
  onChange: (value: any) => void;
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

        <select name="rate" id="option"></select>
      </div>
    </div>
  );
};

export default ToConverter;

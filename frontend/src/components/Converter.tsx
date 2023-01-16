import React from "react";

type CurrencyProps = {
  baseCurrency: string;
  firstCurrency: string;
  ratesOptions: Array<string>;
  currencyOptions: Array<number>;
};

const Converter = (props: CurrencyProps) => {
  return (
    <div>
      <div>
        <input type="number" />
        <select name="rate" id="option"></select>
      </div>
    </div>
  );
};

export default Converter;

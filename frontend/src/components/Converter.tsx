import React from "react";

type CurrencyProps = {
  baseCurrency: string;
  firstCurrency: string;
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

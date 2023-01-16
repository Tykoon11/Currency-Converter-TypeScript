import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Converter from "./components/Converter";

// const BASE_URL = process.env.REACT_BASE_URL as string;

function App() {
  const [baseCurrency, setBaseCurrency] = useState("");
  const [firstCurrency, setFirstCurrency] = useState("");
  const [ratesOptions, setRatesOptions] = useState([]);
  const [currencyOptions, setCurrencyOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(`http://localhost:3000/convert`)
          .then((res) => {
            setCurrencyOptions([res.data.base] as unknown as any);
            setBaseCurrency(res.data.base);
            setFirstCurrency(Object.keys(res.data.rates)[0] as unknown as any);
            setRatesOptions(Object.keys(res.data.rates) as unknown as any);
            setCurrencyOptions(Object.values(res.data.rates) as unknown as any);

            console.log(Object.keys(res.data.rates));
            console.log(Object.values(res.data.rates));
          })
          .catch((err) => {
            console.log(err.message);
          });
      } catch {
        console.log(`err`);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Heading</h1>
      <Converter baseCurrency={baseCurrency} firstCurrency={firstCurrency} ratesOptions = {ratesOptions} currencyOptions= {currencyOptions}/>
    </div>
  );
}

export default App;

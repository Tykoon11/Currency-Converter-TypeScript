import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Converter from "./components/Converter";

// const BASE_URL = process.env.REACT_BASE_URL as string;

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState();
  const [firstCurrency, setFirstCurrency] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(`http://localhost:3000/convert`)
          .then((res) => {
            setCurrencyOptions([res.data.base] as unknown as any);
            setBaseCurrency(res.data.base);
            setFirstCurrency(Object.keys(res.data.rates)[0] as unknown as any);
            // console.log(Object.keys(res.data.rates)[0]);
            // console.log(Object.values(res.data.rates));
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
      <Converter />
    </div>
  );
}

export default App;

// baseCurrency= {baseCurrency} firstCurrency= {firstCurrency} 
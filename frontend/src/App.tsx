import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import FromConverter from "./components/FromConverter";
import ToConverter from "./components/ToConverter";

// const BASE_URL = process.env.REACT_BASE_URL as string;

function App() {
  const [baseCurrency, setBaseCurrency] = useState("");
  const [firstCurrency, setFirstCurrency] = useState("");
  const [ratesOptions, setRatesOptions] = useState([]);
  const [baseValue, setBaseValue] = useState(1);
  const [convertValue, setConvertValue] = useState("" as unknown as number);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(`http://localhost:3000/convert`)
          .then((res) => {
            const first = Object.keys(res.data.rates)[0] as unknown as any;
            setBaseCurrency(res.data.base);
            setConvertValue(Object.values(res.data.rates)[0] as unknown as any);
            setFirstCurrency(first);
            setRatesOptions(Object.keys(res.data.rates) as unknown as any);
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

  const handleToChange = (e: any) => {
    console.log(baseValue);
    setBaseValue(e.target.value);
  };
  const handleFromChange = (e: any) => {
    console.log(baseValue);
    setConvertValue(e.target.value);
  };

  return (
    <div className="App">
      <h1>Heading</h1>
      <FromConverter
        baseCurrency={baseCurrency}
        firstCurrency={firstCurrency}
        ratesOptions={ratesOptions}
        baseValue={baseValue}
        onChange={handleToChange}
        onSelect={(e) => {
          setBaseCurrency(e.target.value);
        }}
      />
      <br />
      <br />
      <ToConverter
        baseCurrency={baseCurrency}
        firstCurrency={firstCurrency}
        ratesOptions={ratesOptions}
        convertValue={convertValue}
        onChange={handleFromChange}
        onSelect={(e) => {
          setFirstCurrency(e.target.value);
        }}
      />
    </div>
  );
}

export default App;

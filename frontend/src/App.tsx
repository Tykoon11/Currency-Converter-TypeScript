import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Converter from "./components/Converter";

// const BASE_URL = process.env.REACT_BASE_URL as string;

function App() {
  const [ratesOptions, setRatesOptions] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState("");
  const [firstCurrency, setFirstCurrency] = useState("");
  const [amount, setAmount] = useState(1);


  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(`http://localhost:3000/convert`)
          .then((res) => {
            setRatesOptions(Object.keys(res.data.rates) as unknown as any);
            const first = Object.keys(res.data.rates)[0] as unknown as any;
            setBaseCurrency(res.data.base);
            setFirstCurrency(first);
            // setConvertValue(Object.values(res.data.rates)[0] as unknown as any);
            // console.log(ratesOptions);
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

  const handleFromChange = (e: any) => {
    // setBaseValue(e.target.value);
  };
  const handleToChange = (e: any) => {
    // setConvertValue(e.target.value);
  };

  useEffect(() => {
    
  }, []);

  return (
    <div className="App">
      <h1>Heading</h1>
      <Converter
        selectedCurrency={baseCurrency}
        ratesOptions={ratesOptions}
        inputValue={amount}
        onChange={handleFromChange}
        onSelect={(e) => {
          setBaseCurrency(e.target.value);
        }}
      />
      <br />
      <br />
      <Converter
        selectedCurrency={firstCurrency}
        ratesOptions={ratesOptions}
        inputValue={amount} 
        onChange={handleToChange}
        onSelect={(e) => {
          setFirstCurrency(e.target.value);
        }}
      />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CurrencyTable from "./CurrencyTable";
import { BeatLoader } from "react-spinners";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.coinbase.com/v2/currencies")
      .then((response) => {
        setData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Currency List</h1>
        {loading ? (
          <div className="loader">
            <BeatLoader color="#00BFFF" loading={loading} size={100} />
          </div>
        ) : (
          <CurrencyTable data={data} />
        )}
      </header>
    </div>
  );
}

export default App;

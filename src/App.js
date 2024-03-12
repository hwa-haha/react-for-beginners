import {useEffect, useState} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectMoney, setSelectMoney] = useState([]);
  const onChange =(event) => setSelectMoney(event.target.value);

  useEffect (() =>{
    fetch("https://api.coinpaprika.com/v1/tickers").then((response) => 
      response.json()
    ).then(json => {
      setCoins(json);
      setLoading(false);
    });
  },[]);

  return (
    <div>
    <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
    <input 
      onChange={onChange}
      value={selectMoney}
      type="number"
      placeholder="Write your USD"
    />
    {loading ? <strong>Loading...</strong> : <select>
      {coins.map((coin) => <option>{coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD</option>)}
      {coins.map((coin) => <option>{coin.name} ({coin.symbol}): 
      {selectMoney / coin.quotes.USD.price} {coin.symbol}</option>)}
    </select> 
    }
    </div>
  );
  
}

export default App;

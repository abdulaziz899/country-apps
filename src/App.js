import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Countries from './components/Countries/Countries';
function App() {
  const [countries,setCountries]=useState([]);
  const [cart,setCart]=useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>
      setCountries(data)
      )
  }, [])
  const handleAddCart=(carts)=>{
    setCart([...cart,carts.population])
  }
  return (
    <div className="App">
      <div className="countriesContainer">
        <div className="countries">
        {
          countries.map(country=><div className="countriesDetails">
            <Countries country={country} key={country.alpha2Code} handleAddCart={handleAddCart}></Countries>
          </div>)
        }
        </div>
        <div>
            <div className="countryCart">
              <h2> country cart add:{countries.length}</h2>
              <Cart cart={cart}></Cart>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './Countries.css';
const Countries = (props) => {
    const country=props.country;

    return (
        <div className="countryDetail" >
            <div className="countryDisplayDetails">
                <h3>{country.name}</h3>
                <p>{country.capital}</p>
                <p>{country.region}</p>
                <p>{country.timezones}</p>
                <p>{country.population}</p>
            </div>
            <div className="countryFlag">
                <img src={country.flag} alt=""/>
                <button onClick={()=>props.handleAddCart(country)}>Add Cart</button>
            </div>
        </div>
    );
};

export default Countries;
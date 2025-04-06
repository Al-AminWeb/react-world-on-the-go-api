import React, {use, useState} from 'react';
import Country from "../Country/Country.jsx";
import './Countries.css'

function Countries({countriesPromise}) {
    const [visitedCountries, setVisitedCountries] = useState([])
    const countries = use(countriesPromise);
    const handleVisitedCountries = () => {
        console.log("country visited");
    }
    return (<div>
        <h1>Travelling Countries</h1>
        <h3>Traveled So far: </h3>
        <div className='countries'>
            {countries.map(country => <Country
                key={country.cca3}
                handleVisitedCountries={handleVisitedCountries}
                country={country}></Country>)}
        </div>
    </div>);
}

export default Countries;
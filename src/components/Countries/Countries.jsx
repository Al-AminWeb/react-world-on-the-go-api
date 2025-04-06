import React, {use, useState} from 'react';
import Country from "../Country/Country.jsx";
import './Countries.css'

function Countries({countriesPromise}) {
    const [visitedCountries, setVisitedCountries] = useState([])

    const countries = use(countriesPromise);

    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
    }
    return (
        <div>
        <h1>Travelling Countries</h1>
        <h3>Traveled So far:{visitedCountries.length}</h3>
        <ol>
            {visitedCountries.map(country => <li>{country.name.common}</li>)}
        </ol>
        <div className='countries'>
            {countries.map(country => <Country
                key={country.cca3}
                handleVisitedCountries={handleVisitedCountries}
                country={country}></Country>)}
        </div>
    </div>
    );
}

export default Countries;
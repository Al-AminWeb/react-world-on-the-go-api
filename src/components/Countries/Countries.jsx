import React, {use} from 'react';
import Country from "../Country/Country.jsx";
import'./Countries.css'

function Countries({countriesPromise}) {
    const countries = use(countriesPromise);
    return (<div>
            <h1>Travelling Countries</h1>
           <div className='countries'>
               {countries.map(country => <Country key={country.cca3} country={country}></Country>)}

           </div>
        </div>);
}

export default Countries;
import React, {useState} from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountries}) => {

    const [visited,setVisited] = useState(false)


    const handleVisited = ()=>{
       // if (visited === true){
       //     setVisited(false)
       // }
       // else setVisited(true)
        setVisited(!visited)
        handleVisitedCountries(country);
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h3>Name : {country.name.common}</h3>
            <img src={country.flags.png} alt=""/>
            <p>Independent : {country.independent ? 'free' : 'not Free'}</p>
            <p>Population: {country.population}</p>
            <button className={visited ? 'btn-visited' : 'btn-not-visited'} onClick={handleVisited} >
                {visited ? 'Visited' : 'Not Visited'}
            </button>
        </div>
    );
};

export default Country;

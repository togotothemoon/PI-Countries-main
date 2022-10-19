import React from 'react';
import { filterByContinent, filterByOrder } from "../../redux/actions/index"
import { useDispatch } from 'react-redux';
import './FilterCountries.css';

function FilterCountries() {
    
    const dispatch = useDispatch()
    function handleFilterByContinent(e) {
        dispatch(filterByContinent(e.target.value))
    }
    function handleFilterByOrder(e) {
        dispatch(filterByOrder(e.target.value))
    }
  return (
    <>
            <li className="list__inside">
                    <select defaultValue={'DEFAULT'} className='select__inside' onChange={e => handleFilterByOrder(e)}>
                            <option value="DEFAULT" disabled>Order by</option>
                            <option value='["name","asc"]'>A ➡️ Z</option>
                            <option value='["name","desc"]'>Z ➡️ A</option>
                            <option value='["population","asc"]'>population➖✖️ </option>
                            <option value='["population","desc"]'>population✖️➖ </option>
                    </select>
            </li>
            <li className="list__inside">
                    <select defaultValue={'DEFAULT'} className='select__inside' onChange={e => handleFilterByContinent(e)}>
                            <option value="DEFAULT" disabled>Filter by Continent</option>
                            <option value="All">All continents</option>
                            <option value="Africa">Africa</option>
                            <option value="Americas">Americas</option>
                            <option value="Antarctic">Antarctic</option>
                            <option value="Asia">Asia</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>
                    </select>
            </li>
    </>
  
  )
}

export default FilterCountries
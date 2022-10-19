import React, {useState} from 'react';
import { getCountryByQuery, filterByName, error } from "../../redux/actions/index.js";
import { useDispatch } from "react-redux";
import './SearchCountry.css'

function SearchCountry() {
  const dispatch = useDispatch();
  const [valueInput, setValueInput] = useState("");

  const handleChange = (e) => {
    dispatch(error(false))
    setValueInput(e.target.value)
    dispatch(filterByName(e.target.value))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getCountryByQuery(valueInput))

  }

  return (
    <div className='searchCountry__container'>
      <form onSubmit={(e) => handleSubmit(e)} >
          <input onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Find country"
            className='SearchCountry__input'
          />
          <button type="submit" className='search__button'>
            Search
          </button>
      </form>
    </div>
  )
}

export default SearchCountry
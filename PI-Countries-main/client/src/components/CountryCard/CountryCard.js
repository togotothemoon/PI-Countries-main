import React from 'react';
import { Link } from "react-router-dom";
import './CountryCard.css'; 

function CountryCard(props) {
  let formated = props.population.toLocaleString("de-DE");
 
  return (
    <div className='container__countryCard'>
            <img  className='card__img' src={props.flags} alt={`${props.name} flag`} />
            <div className='container__infoCard'>
                <p className='card__img__name'> {props.name} </p>
                <p className='card__img__p'>Continent: {props.continent} </p>
                <p className='card__img__p'>Sub Area: {props.subregion} </p>
                <p className='card__img__p'>Population: {formated} </p>
                <Link to={`/countries/${props.id}`} style={{textDecoration:'none'}}>
                    <button className='card__button'>details</button>
                </Link>
            </div>
    </div>
  )
}

export default CountryCard
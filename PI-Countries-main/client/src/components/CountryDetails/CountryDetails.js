import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetails } from "../../redux/actions/index";

function CountryDetails() {

  let { idPais } = useParams();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.countryDetails);

  useEffect(() => {
    dispatch(getCountryDetails(idPais));
  }, [dispatch, idPais]);

  let area = country.area;
  let population = country.population;
  let actividades = country.activities;
  let auxArr = [];

  if (population) population = population.toLocaleString("de-DE");
  if (area) area = area.toLocaleString("de-DE");
  if (actividades) auxArr = [...actividades];

  return (
    <div>
      <img
        src={country.flags}
        alt={`${country.name} flag`}
      />
      <div >
        <h3 > {country.name} </h3>
        <h3 > Code CCA3: {country.id} </h3>
        <h3 > Area: {area} km²</h3>
        <h3 >Continent: {country.continent} </h3>
        <h3 >Sub Area: {country.subregion} </h3>
        <h3 >Population: {population} </h3>
        <h3 >Activities:</h3>
        <ul>
          {auxArr.length > 0 &&
            auxArr.map((el) => (
              <li>
                You can {el.name} in {el.season}
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default CountryDetails
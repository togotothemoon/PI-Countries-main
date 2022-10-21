import React, { useEffect, useState } from "react";
import { getAllCountries, pageSwitcher } from "../../redux/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import CountryCard from "../CountryCard/CountryCard";
import Pagination from "../Pagination/Pagination";
import './Countries.css';

function Countries() {

  const countriesData = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const page = useSelector((state)=> state.currentPage)
  const [countryPerPage] = useState(9);

  const indexTo = page * countryPerPage; 
  const indexFrom = indexTo - countryPerPage; 
  const CardCountryRender = countriesData.slice(indexFrom, indexTo); 
  const paginate = (el) => dispatch(pageSwitcher(el));

  useEffect(() => {
    document.title = "All Countries";
    dispatch(getAllCountries());
  }, [dispatch]);

  return (
    <>
        <div className="countries__container">
            
            {CardCountryRender.map((el) => (
                <CountryCard
                    key={el.id}
                    id={el.id}
                    flags={el.flags}
                    name={el.name}
                    population={el.population}
                    continent={el.continent}
                    subregion={el.subregion}
                />
            ))}
        </div>
        {
            <Pagination
                elementsPerPage={countryPerPage}
                totalCountries={countriesData.length}
                paginate={paginate}
            />
        }
    </>
  )
}

export default Countries
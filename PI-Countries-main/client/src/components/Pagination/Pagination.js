import React from 'react';
//import { useSelector } from "react-redux";
import './Pagination.css';

function Pagination({ elementsPerPage, totalCountries, paginate }) {
  //const page = useSelector((state)=> state.currentPage)
  const numberPages = [];
  for (let i = 1; i <= Math.ceil(totalCountries / elementsPerPage); i++) {
    numberPages.push(i);
  }
  
  return (
    <div className='paginate__container'>
      {numberPages &&
        numberPages.map((el) => (
          <button className='paginate__button'
            key={el}
            onClick={() => paginate(el)}
          >
            {el}
          </button>
        ))}
    </div>
  )
}

export default Pagination
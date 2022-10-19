import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import FilterCountries from '../FilterCountries/FilterCountries';
import FilterActivities from '../FilterActivities/FilterActivities';
import { BiWorld, BiRightArrow } from 'react-icons/bi';
import { IoCreateSharp } from 'react-icons/io5';
import { AiFillHome } from 'react-icons/ai';
import { GiWalkingBoot } from 'react-icons/gi';
import SearchCountry from '../SearchCountry/SearchCountry';

function Navbar() {
   
   const [arrow, setArrow] = useState(false);
   const rotateArrow = () => setArrow(!arrow);

  return (
    <>
        <nav className="nav">
            <ul className="list">
                <li className="list__item">
                    <div className="list__button">
                        <AiFillHome className="list__img" />
                        <Link to={'/countries'} className="nav__link">Inicio</Link>
                    </div>
                </li>
                <li className="list__item list__item--click">
                    <div  onClick={rotateArrow} className="list__button list__button--click" >
                        <BiWorld className="list__img" />
                        <p className='nav__link'>Countries</p>
                        <BiRightArrow className={arrow ? "list__img rotate__arrow" : "list__img list__arrow"} />
                    </div>
                
                    <ul className={arrow ? "list__show list__showHeight" : "list__show"} >
                        <FilterCountries />
                        <FilterActivities />
                    </ul>
                </li>

                <li className="list__item">
                    <div className="list__button">
                        <GiWalkingBoot className="list__img" />
                        <Link to={'/activities'} className="nav__link">Activities</Link>
                    </div>
                </li>

                <li className="list__item">
                    <div className="list__button">
                        <IoCreateSharp className="list__img" />
                        <Link to={'/createActivity'} className="nav__link">Create Activities</Link>
                    </div>
                </li>
                <li className="list__item search__container">
                    <div className="list__button">
                        <SearchCountry />
                    </div>
                </li>

            </ul>
        </nav> 
    </>
  )
}

export default Navbar
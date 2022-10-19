import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import './Home.css'

function Home() {
    
    useEffect(() => {
        document.title = "Welcome API countries"; 
    }, []);

  return (
    <>
        <div className="container">
            <h1 className='welcome'>WELCOME TO API COUNTRIES</h1>
            <div className="container_map">
                <div className="map"></div>
                <Link to={`/countries`} style={{textDecoration:'none'}}>
                    <button
                        type="button"
                        className="my-button"
                    >
                        Start now
                    </button>
                </Link>
            </div>
        </div>
       
    </>
  )
}

export default Home
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createActivity, getAllCountries } from "../../redux/actions/index.js";
import { ControlError } from "../ControlError/ControlError";
import { Link } from 'react-router-dom';
import './ActivityCreate.css';

function ActivityCreate() {

    const [input, setinput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        image: "",
        countries: [],
      });
      const [errors, seterrors] = useState({});
      const [isSubmit, setisSubmit] = useState(false);
      const dispatch = useDispatch();
      const navigate = useHistory();
    
      useEffect(() => {
        document.title = "CreateActivity";
        dispatch(getAllCountries());
      }, [dispatch]);
      const listCountry = useSelector((state) => state.countries);
    
      let validate = (value) => {
        let errores = ControlError(value);
        if (Object.keys(errores).length === 0) {
          setisSubmit(true);
        }
        return errores;
      };
    
      function handleChange(e) {
        setinput({
          ...input,
          [e.target.name]: e.target.value,
        });
        seterrors(
          validate({
            ...input,
            [e.target.name]: e.target.value,
          })
        );
      }
      function handlecheckDifficulty(e) {
        setinput({
          ...input,
          difficulty: e.target.value,
        });
        seterrors(
          validate({
            ...input,
            difficulty: e.target.value,
          })
        );
      }
      function handlecheckSeason(e) {
        setinput({
          ...input,
          season: e.target.value,
        });
        seterrors(
          validate({
            ...input,
            season: e.target.value,
          })
        );
      }
      function handleSelectcountry(e) {
        e.preventDefault();
        if (Object.values(input.countries).includes(e.target.value)) {
          alert("Country already selected");
        } else {
          setinput({
            ...input,
            countries: [...input.countries, e.target.value],
          });
        }
        seterrors(
          validate({
            ...input,
            countries: [...input.countries, e.target.value],
          })
        );
      }
    
      function handleDeleteCountry(e) {
        setinput({
          ...input,
          countries: input.countries.filter((el) => el !== e),
        });
      }
      async function handlesubmit(e) {
        e.preventDefault();
        seterrors(validate(setinput));
        if (Object.keys(errors).length === 0 && isSubmit) {
          if (input.image === "") {
            input.image = null;
          }
          dispatch(createActivity(input)).then(navigate.push("/activities"));
        
          navigate.push("/activities");
        }
        e.preventDefault();
      }

  return (
    <div className="formbg-outer">
        <div className="formbg">
            <div className="formbg-inner padding-horizontal--48">
                <div >
                    <h1 className="formbg-outer__h1">Create Activity</h1>
                </div>
                <form onSubmit={(e) => handlesubmit(e)} className='stripe-login'>
                    <div className="field field-checkbox padding-bottom--24">
                      <label>What Activity?:</label>
                      <input
                          placeholder="Activity name.."
                          type="text"
                          name="name"
                          input={input.name}
                          onChange={(e) => handleChange(e)}
                      />
                      {<p>{errors.name}</p>}
                    </div>
                    
                    <div className="field field-checkbox padding-bottom--24">
                      <label>Difficulty:</label>
                      <select
                          defaultValue={"DEFAULT"}
                          onChange={(e) => handlecheckDifficulty(e)}
                      >
                          <option value="DEFAULT" disabled>
                          Select Difficulty
                          </option>
                          <option name="1" value="1">
                          1
                          </option>
                          <option name="2" value="2">
                          2
                          </option>
                          <option name="3" value="3">
                          3
                          </option>
                          <option name="4" value="4">
                          4
                          </option>
                          <option name="5" value="5">
                          5
                          </option>
                      </select>
                      {<p>{errors.difficulty}</p>}
                    </div>
                    <div className="field field-checkbox padding-bottom--24">
                      <label>How many hours?:</label>
                      <input
                          type="number"
                          name="duration"
                          placeholder="Duration in hours"
                          input={input.duration}
                          onChange={(e) => handleChange(e)}
                      />
                      {<p>{errors.duration}</p>}
                    </div>
                    <div className="field field-checkbox padding-bottom--24">
                      <label>Season:</label>
                      <select
                          defaultValue={"DEFAULT"}
                          onChange={(e) => handlecheckSeason(e)}
                      >
                          <option value="DEFAULT" disabled>
                          Select Season
                          </option>
                          <option name="Summer" value="Summer">
                          Summer
                          </option>
                          <option name="Winter" value="Winter">
                          Winter
                          </option>
                          <option name="Spring" value="Spring">
                          Spring
                          </option>
                          <option name="Autumn" value="Autumn">
                          Autumn
                          </option>
                      </select>
                      {<p>{errors.season}</p>}
                    </div>
                    <div className="field field-checkbox padding-bottom--24">
                      <label>Image Url (no required) :</label>
                      <input
                          type="text"
                          name="image"
                          placeholder="Enter your url"
                          input={input.image}
                          onChange={(e) => handleChange(e)}
                      />
                      {<p>{errors.image}</p>}
                    </div>
                    <div className="field field-checkbox padding-bottom--24">

                      <label>Countries:</label> <br />
                      <select
                          defaultValue={"DEFAULT"}
                          onChange={(e) => handleSelectcountry(e)}
                      >
                          <option disabled value="DEFAULT ">
                          Select Country
                          </option>
                          {listCountry.map((el) => (
                          <option key={el.id} value={el.name}>
                              {el.name}
                          </option>
                          ))}
                      </select>
                      {<p>{errors.countries}</p>}
                    </div>
                    {input.countries.length > 0 && (
                        <ul>
                        {input.countries.map((el, index) => (
                            <div key={index}>
                            <li key={index}>{el}</li>
                            <button
                                type="button"
                                onClick={() => handleDeleteCountry(el)}
                            >
                                X
                            </button>
                            </div>
                        ))}
                        </ul>
                    )}
                    <button
                        type="submit"
                        disabled={Object.keys(errors).length}
                    >
                        Create Activity
                    </button>
                </form>
            </div>
        </div>
        <Link to={`/countries`} style={{textDecoration:'none'}}>
                    <button
                        type="button"
                        className="my-button"
                    >
                        Volver
                    </button>
        </Link>
    </div>
  )
}

export default ActivityCreate
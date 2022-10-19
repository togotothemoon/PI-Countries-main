import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllActivities, deleteActivity, getAllCountries} from "../../redux/actions/index.js";
import ActivitiesCard from '../ActivitiesCard/ActivitiesCard.js';
import './Activities.css';

function Activities() {

  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities)
  const aux = useSelector((state) => state.activitiesAuxiliar)
  const handleDelete = async (id) => {
    dispatch(deleteActivity(id))
  }

  useEffect(() => {
    document.title = "Activities";
    dispatch(getAllActivities())
    dispatch(getAllCountries())
  }, [dispatch, aux]);

  return (
    <>
        <div className="activities__container">
        {activities.length > 0 ? activities.map((el) => (
          <ActivitiesCard onDelete={() => handleDelete(el.id)} key={el.id} id={el.id}
            image={el.image} name={el.name} difficulty={el.difficulty} duration={el.duration} season={el.season} countries={el.countries} />
        )) : <h1>With out activities, you could create one</h1>
        }
      </div>
    </>
  )
}

export default Activities
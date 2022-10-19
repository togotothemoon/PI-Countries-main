import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByActivity } from "../../redux/actions/index"
import './FilterActivities.css';

function FilterActivities() {

  const activities = useSelector(state => state.activities)
  const dispatch = useDispatch()
  
  function handleFilterActivity(e) {
    dispatch(filterByActivity(e.target.value))
  }
  return (
    <>
        <li className="list__inside">
        {
            activities.length > 0 ?
                (<select defaultValue={'DEFAULT'} className='select__inside' onChange={e => handleFilterActivity(e)}>
                    <option value="DEFAULT" disabled>Filter by Activities</option>
                    <option value='All'>All</option>
                        {activities.map((el) =>
                                <option key={el.id} value={el.name}>
                                    {el.name}
                                </option>
                        )}
                </select>)
                        :
                (<select defaultValue={'DEFAULT'} className='select__inside'><option value="DEFAULT" disabled>No activities found</option></select>
                )}
        </li>
    </>
  )
}

export default FilterActivities
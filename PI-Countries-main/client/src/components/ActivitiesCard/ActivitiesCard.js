import React from 'react';
import { BsFillSunFill,BsSnow2,BsFlower1 } from 'react-icons/bs';
import { GiThreeLeaves } from 'react-icons/gi';
import './ActivitiesCard.css';

function ActivitiesCard(props) {
    const seasons = {
        'Summer':<BsFillSunFill className='activitiesCard__icon'/>,
        'Winter':<BsSnow2 className='activitiesCard__icon'/>,
        'Spring':<BsFlower1 className='activitiesCard__icon'/>,
        'Autumn':<GiThreeLeaves className='activitiesCard__icon'/>
    }

  return (
    <div>
        <h3> 
        {!props.image?(seasons[props.season]):(<img className='activitiesCard__img' alt={props.name} src={props.image}></img>)}
        </h3>
            <div>
                <p> {props.name} </p>
                <p>Season: {props.season} </p>
                <p>Difficulty: {props.difficulty}/5 </p>
                <p>Duration: {props.duration} Hours </p>
                <p>Countries Avalaible: </p>
                {props.countries.map((el) => (
                    <p key={el.id}>{el.name}</p>
                ))}
                <button
                    type="button"
                    onClick={props.onDelete}
                >
                    Delete Acticity
                </button>
            </div>
    </div>
  )
}

export default ActivitiesCard
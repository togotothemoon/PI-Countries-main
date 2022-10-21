import axios from 'axios';
import {
  GET_ALL_COUNTRIES,
  PAGE_SWITCHER,
  FILTER_BY_CONTINENT,
  FILTER_BY_ORDER,
  GET_COUNTRY_BY_QUERY,
  FILTER_BY_NAME,
  ERROR,
  FILTER_BY_ACTIVITY,
  GET_ALL_ACTIVITIES,
  DELETE_ACTIVITY,
  CREATE_ACTIVITY,
  GET_COUNTRY_DETAILS
} from "../constants.js";

let url = 'http://localhost:3001';

export const getAllCountries = () => {
    return async function (dispatch) {
      return fetch(`${url}/countries`)
        .then((response) => response.json())
        .then((data) => {
  
          dispatch({ type: GET_ALL_COUNTRIES, payload: data });
        });
    };
};
export const pageSwitcher = (payload) => {
  return { type: PAGE_SWITCHER, payload, }

};
export const filterByContinent = (continent) => {
  return { type: FILTER_BY_CONTINENT, payload: continent }

};
export const filterByOrder = (orderBy) => {
  return { type: FILTER_BY_ORDER, payload: orderBy }

};
export const getCountryByQuery = (query) => {
  return async function (dispatch) {
    return fetch(`${url}/countries?name=${query}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: GET_COUNTRY_BY_QUERY, payload: data });
      }).catch(error => {
        dispatch({ type: GET_COUNTRY_BY_QUERY, payload: error });
      });
  };
};
export const filterByName = (name) => {
  return { type: FILTER_BY_NAME, payload: name }
};
export const error = (payload) => {
  return { type: ERROR, payload, }

};
export const filterByActivity = (activity) => {
  return { type: FILTER_BY_ACTIVITY, payload: activity }
};
export const getAllActivities = () => {
  return async function (dispatch) {
    const response = await fetch(`${url}/activities`);
    const data = await response.json();
    dispatch({ type: GET_ALL_ACTIVITIES, payload: data });
  };
};
export const deleteActivity = (id) => {
  return async function (dispatch) {
    try {
      let res = await axios.delete(`${url}/activities/${id}`);
      return dispatch({
        type: DELETE_ACTIVITY,
        payload: res.data,
      })
    } catch (error) {
      throw (error);
    }
  }
};
export const createActivity = (activity) => {
  return async function (dispatch) {
    try {
      let res = await axios.post(`${url}/activities`, activity);
      return dispatch({
        type: CREATE_ACTIVITY,
        payload: res.data,
      })
    } catch (error) {
      throw (error);
    }
  }
};
export const getCountryDetails = (idPais) => {
  return async function (dispatch) {
    return fetch(`${url}/countries/${idPais}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: GET_COUNTRY_DETAILS, payload: data });
      });
  };
};
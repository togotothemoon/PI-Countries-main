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
    GET_COUNTRY_DETAILS,
} from "../constants.js";

const initialState = {
    countries: [],
    countryFound: [],
    currentPage: 1,
    error: false,
    activities: [],
    activitiesAux: 0,
    countryDetails: {},
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                countryFound: action.payload,
            };
        case PAGE_SWITCHER:
            return {
                ...state,
                currentPage: action.payload,
    
            };
        
        case FILTER_BY_CONTINENT:
            let cont;
            if (action.payload === "All") {
                cont = state.countryFound
    
            } else {
                cont = state.countryFound.filter((el) => el.continent === action.payload)
            }
            return {
                    ...state, countries: cont,
                        currentPage: 1,
            }
        case FILTER_BY_ORDER:
            let order = [...state.countries]
            let key = JSON.parse(action.payload)[0];
            let value = JSON.parse(action.payload)[1];

            if (value === "asc") {
                order.sort(function (a, b) {
                    if (a[key] < b[key]) {
                        return -1;
                    }
                    if (a[key] > b[key]) {
                        return 1
                    }
                        return 0
                    })
            }
            if (value === "desc") {
                order.sort(function (a, b) {
                    if (a[key] > b[key]) {
                        return -1;
                    }
                    if (a[key] < b[key]) {
                            return 1
                    }
                        return 0
                    })
                }
            return {
                    ...state,
                    countries: order
            };
        case GET_COUNTRY_BY_QUERY:
            return {
                    ...state,
                    countryFound: action.payload,
            };
        case FILTER_BY_NAME:

            let arrFiltered = state.countryFound.filter((el) => (el.name.toLowerCase()).includes(action.payload.toLowerCase()))
            if (arrFiltered.length < 1) {
                    arrFiltered =  `country ${action.payload} not found!`
                    
                return {
                        ...state,
                        error: arrFiltered,
                        currentPage:1,
    
                };
            } else
            return {
                ...state,
                countries: arrFiltered,
                currentPage:1,
    
            };
        case ERROR:
            return {
                ...state,
                error: action.payload,
        
            };
        case FILTER_BY_ACTIVITY:

            let filterActivities;
            if (action.payload === "All") {
                filterActivities = state.countryFound

            } else {

                filterActivities = state.countryFound.filter(e => e.activities && e.activities.map(c => c.name).includes(action.payload))

            }
            return {
                ...state,
                countries: filterActivities,
                currentPage: 1,

            };
        case GET_ALL_ACTIVITIES:
            return {
                ...state,
                activities: action.payload,
            };  
        case DELETE_ACTIVITY:
            return {
                ...state,
                activitiesAux: state.activitiesAux + 1,
                activities: state.activities.filter((el) => el.id !== action.payload)
            };
        case CREATE_ACTIVITY:
            return {
                 ...state,
                 activitiesAux: state.activitiesAux - 1,
            };
        case GET_COUNTRY_DETAILS:
            return {
                ...state,
                countryDetails: action.payload,
            }; 
        default:
            return {
                ...state
            };    
    }
};
export default rootReducer;
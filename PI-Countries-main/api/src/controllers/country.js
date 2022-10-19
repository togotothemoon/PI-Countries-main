const { Country, Activity } = require("../db.js");
const { loaderDB } = require("./loaderDB");
const { Op } = require("sequelize");

const getAllCountries = async (query) => {
  
    let lengthDB = await Country.count();
    if (lengthDB < 1) {
      await loaderDB();
    }
    
    if (query) {
        const filterData = await Country.findAll({
            where: {
              name: {
                [Op.iLike]: `%${query}%`,
              },
            },
            include: [
              {
                model: Activity,
                attributes: ["name"], // se relacionan las actividades de cada país
                through: {
                  attributes: [],
                },
              },
            ],
          });
      
          if (filterData < 1) throw new Error(` Country not found named ${query}`);
          else return filterData;
      
    } else {
        const countriesData = await Country.findAll({
            order: 
              ['name'],
            include: [
              {
                model: Activity,
                attributes: ["name"], // se relacionan las actividades de cada país
                through: {
                  attributes: [],
                },
              },
            ],
          });
          return countriesData;
    }
  };
  const getByParam = async (name) => {
    let nameUpper = name.toUpperCase();
    let countCountries = await Country.count();
    if (countCountries < 1) {
      await loaderDB();
    }
    //despues buscamos por ide y lanzamos error si returna null
    if (!name) throw new Error(`${name} not valid code`);
    else {
      const filterCountryDB = await Country.findByPk(nameUpper, {
        include: [
          {
            model: Activity,
            attributes: ["name","season"], // se relacionan las actividades de cada país
            through: {
              attributes: [],
            },
          },
        ],
      });
  
      if (!filterCountryDB)
        throw new Error(`country not found with code ${nameUpper}`);
      else return filterCountryDB;
    }
  };

  module.exports = {
    getAllCountries,
    getByParam,
  };
  
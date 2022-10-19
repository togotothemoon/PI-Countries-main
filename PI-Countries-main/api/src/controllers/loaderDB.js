const axios = require("axios");
const { Country } = require("../db.js");

const loaderDB = async () => {
    let api = await axios.get("https://restcountries.com/v3/all");
    const data = await api.data.map((dataCountry) => {
      return {
        id: dataCountry.cca3,
        name: dataCountry.name.common,
        continent: dataCountry.region,
        capital: dataCountry.capital && dataCountry.capital[0],
        subregion: dataCountry.subregion || dataCountry.region,
        area: dataCountry.area,
        population: dataCountry.population,
        flags: dataCountry.flags[1] || dataCountry.flags[0],
        
      };
    });
    const saver = () => {
        data.map((dataCountry) => {
        Country.findOrCreate({
          where: {
            name: dataCountry.name,
            id: dataCountry.id,
          },
          defaults: {
            continent: dataCountry.continent,
            capital: dataCountry.capital,
            subregion: dataCountry.subregion,
            area: dataCountry.area,
            population: dataCountry.population,
            flags: dataCountry.flags,
            
          },
        }).catch((err) => {
          console.log(err);
        });
      });
    };
  
    console.log("Ready DB!");
    return saver();
  };
  
  module.exports = {
    loaderDB,
  };
  
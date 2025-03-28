import { COUNTRY } from '@/types/country';
import React from 'react';

type PropsType = {
  info: COUNTRY[];
};

const Country = ({ info }: PropsType) => {
  console.log({ info });
  return (
    <div className="p-8">

      <h2 className="text-3xl font-semibold text-center mb-6">Countries</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {info.length > 0 ? (
          info.map((country, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <img
                src={`https://flagsapi.com/${country.altSpellings[0]}/flat/64.png`}
                alt={`${country.name} flag`}
                className="w-32 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-center text-gray-800 mb-2">
                {country.name}
              </h3>
              <p className="text-gray-600 text-center mb-1">
                Capital: {country.capital}
              </p>
              <p className="text-gray-600 text-center mb-1">
                Region: {country.region}
              </p>
              <p className="text-gray-600 text-center mb-1">
                Population: {country.population}
              </p>
              <p className="text-gray-600 text-center">
                Timezone: {country.timezones.join(', ')}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No countries found</p>
        )}
      </div>
    </div>
  );
};

export default Country;

import { COUNTRY } from '@/types/country';
import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { useModel } from '@/context/ModelContextProvider';
import CountryModel from './CountryModel';

type PropsType = {
  info: COUNTRY[];
};

const Country = ({ info }: PropsType) => {
  const { setContent, openModel } = useModel();
  const handleClick = (data: COUNTRY) => {
    setContent(<CountryModel data={data} />);
    openModel();
  };
  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Countries</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {info.length > 0 ? (
          info.map((country, index) => (
            <Card
              key={index}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 "
            >
              <CardContent className="flex justify-between">
                <img
                  src={`https://flagsapi.com/${country.altSpellings[0]}/flat/64.png`}
                  alt={`${country.name} flag`}
                  className="w-32 object-cover rounded-lg mb-4"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-xl font-bold text-center text-gray-800 mb-2">
                    {country.name}
                  </h3>
                  <p className="text-gray-600 text-center mb-1">
                    <span className="font-bold"> Capital:</span>{' '}
                    {country.capital}
                  </p>
                  {/* <p className="text-gray-600 text-center mb-1">
                  Region: {country.region}
                </p> */}
                  <p className="text-gray-600 text-center mb-1">
                    <span className="font-bold"> Population:</span>
                    {country.population}
                  </p>
                  {/* <p className="text-gray-600 text-center">
                    <span className="font-bold"> Timezone: </span>
                    {country.timezones.join(', ')}
                  </p> */}
                </div>
              </CardContent>
              <Button variant="outline" onClick={() => handleClick(country)}>
                More Info
              </Button>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-600">No countries found</p>
        )}
      </div>
    </div>
  );
};

export default Country;

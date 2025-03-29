import { COUNTRY } from '@/types/country';
import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Button } from './ui/button';

const CountryModel = ({ data }: { data: COUNTRY }) => {
  return (
    <Card>
      <CardContent className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-6">
        <CardHeader className="flex items-center space-x-4">
          <img
            src={`https://flagsapi.com/${data.altSpellings[0]}/flat/64.png`}
            alt={`${data.name} flag`}
            className="w-16 h-10"
          />
          <div>
            <CardTitle className="text-3xl font-bold text-gray-800">
              {data.name}
            </CardTitle>
            <CardTitle className="text-lg text-gray-600">
              {data.capital}
            </CardTitle>
          </div>
        </CardHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold text-gray-700">Population</h3>
            <p className="text-gray-600">{data.population.toLocaleString()}</p>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold text-gray-700">Area</h3>
            <p className="text-gray-600">{data.area.toLocaleString()} km²</p>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold text-gray-700">Demonym</h3>
            <p className="text-gray-600">{data.demonym}</p>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold text-gray-700">Region</h3>
            <p className="text-gray-600">{data.region}</p>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold text-gray-700">Subregion</h3>
            <p className="text-gray-600">{data.subregion}</p>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold text-gray-700">Timezone</h3>
            <p className="text-gray-600">{data.timezones.join(', ')}</p>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold text-gray-700">Languages</h3>
            <ul className="text-gray-600">
              {data.languages.map((lang, index) => (
                <li key={index}>
                  {lang.name} ({lang.nativeName})
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold text-gray-700">Currency</h3>
            <p className="text-gray-600">
              {data.currencies[0].name} ({data.currencies[0].symbol})
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700">Borders</h3>
          <CardFooter className="flex space-x-3 text-gray-600">
            {data.borders.length > 0 ? (
              data.borders.map((border, index) => (
                <Button
                  variant="outline"
                  key={index}
                  // className="border px-3 py-1 rounded-full bg-gray-100"
                >
                  {border}
                </Button>
              ))
            ) : (
              <p>No borders</p>
            )}
          </CardFooter>
        </div>
      </CardContent>
    </Card>
  );
};

export default CountryModel;

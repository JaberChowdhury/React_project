import { Suspense, useEffect, useState } from 'react';
import Country from './components/Country';
import './index.css';
import fetchdata from './utils/fetchdata';
import { COUNTRY } from './types/country';

const App = () => {
  const [countries, setCountries] = useState<COUNTRY[]>([]);

  useEffect(() => {
    fetchdata<COUNTRY[]>('https://restcountries.com/v3.1/all')
      .then((data) => setCountries(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="content">
      <h1>Country</h1>

      <Suspense fallback={<div>Loading...</div>}>
        {/* {JSON.stringify(countries[0])} */}
        <Country data={countries} />
      </Suspense>
    </div>
  );
};

export default App;

// https://restcountries.com/v3.1/all

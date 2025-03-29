import { useEffect, useState } from 'react';
import fetchdata from './utils/fetchdata';
import Country from './components/Country';
import { COUNTRY } from './types/country';
import Model from './components/Model';

const App = () => {
  const [data, setData] = useState<COUNTRY[]>([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const result = await fetchdata<COUNTRY>(
          'https://raw.githubusercontent.com/apilayer/restcountries/refs/heads/master/src/main/resources/countriesV2.json',
        );
        const good_data = await result.filter((d) => d.name != 'Israel');
        setData(good_data); // Set the data to state
      } catch (error) {
        console.error('Error fetching countries:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchCountries();
  }, []); // Empty dependency array to run only once when the component mounts

  if (loading) {
    return <div>Loading..........</div>; // Display loading while waiting for the data
  }

  return (
    <>
      <Model />
      <div className="container m-auto relative">
        <Country info={data} />
      </div>
    </>
  );
};

export default App;

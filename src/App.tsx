import { useEffect, useState } from 'react';
import fetchdata from './utils/fetchdata';
import Country from './components/Country';
import { COUNTRY } from './types/country';

const App = () => {
  const [data, setData] = useState<COUNTRY[]>([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const result = await fetchdata<COUNTRY>(
          'https://raw.githubusercontent.com/apilayer/restcountries/refs/heads/master/src/main/resources/countriesV2.json',
        );
        setData(result); // Set the data to state
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
    <div className="container m-auto bg-amber-950">
      <Country info={data} />
    </div>
  );
};

export default App;

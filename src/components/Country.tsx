import { COUNTRY } from '../types/country';
import EachCountry from './EachCountry';

type PropsType = {
  data: COUNTRY[];
};

const Country = ({ data }: PropsType) => {
  return (
    <div className="country_container">
      {data.map((country, id) => (
        <EachCountry key={id} info={country} />
      ))}
    </div>
  );
};

export default Country;

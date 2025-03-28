import { COUNTRY } from '../types/country';

type propsTYpe = {
  info: COUNTRY;
};
const EachCountry = ({ info }: propsTYpe) => {
  return (
      <div className='each_country'>
        <img width={200} height={100} src={info.flags.svg} alt={info.name.common} />
        <h3>{info.name.common}</h3>
      {/* <div>{JSON.stringify(info)}</div> */}
    </div>
  );
};

export default EachCountry;

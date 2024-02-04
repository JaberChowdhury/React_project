import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>Awesome</div>
      <Link to="/colors">Colors</Link>
      <Link to="/quotes">Quotes</Link>
    </div>
  );
};

export default Home;

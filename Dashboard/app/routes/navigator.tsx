import { Link } from "react-router";

const Navigator = () => {
  return (
    <>
    <Link to="/">Home</Link>
    <Link to="/search">Search</Link>
    <Link to="/details">Details</Link>
    </>
  );
}

export default Navigator;

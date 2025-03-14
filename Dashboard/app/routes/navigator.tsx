import { Link } from "react-router";
import "./navigator.css";

const Navigator = () => {
  return (
    <>
    <input></input>
    <Link to="/">Home</Link>
    <Link to="/search">Search</Link>
    <Link to="/details">Details</Link>
    </>
  );
}

export default Navigator;

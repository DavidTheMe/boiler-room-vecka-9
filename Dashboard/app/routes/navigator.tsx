import { Link } from "react-router";

const Navigator = () =>{
  return (
    <>
      <div class='p-5 bg-blue-50'>
        <Link to="/" className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300" >Home</Link>
        <input></input>
      </div>
    </>
  );
}

export default Navigator;

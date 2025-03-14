import { Link } from "react-router";
import { Provider } from "react-redux";
import store from "../redux/store";
import React from "react";
import type { ReactNode } from "react";
import Footer from "../components/Footer/footer"

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

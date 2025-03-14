import { Link } from "react-router";
import { Provider } from "react-redux";
import store from "../redux/store";
import React from "react";
import type { ReactNode } from "react";
import Footer from "../components/Footer/footer"

interface NavigatorProps {
  children: ReactNode;
}

const Navigator: React.FC<NavigatorProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <nav>
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/details">Details</Link>
      </nav>
      <main>{children}</main>

      <Footer/>
    </Provider>
  );
}

export default Navigator;

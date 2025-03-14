import { Link } from "react-router";
import { Provider, useSelector } from "react-redux";
import store from "../redux/store";
import React from "react";
import type { ReactNode } from "react";
import Playlist from "../components/Global/ShowPlaylist";

interface NavigatorProps {
  children: ReactNode;
}

const Navigator: React.FC<NavigatorProps> = ({ children }) => {

  const songs = useSelector((state: any) => state.playlist.songs);

  return (
    <Provider store={store}>
      <div>
      <section>
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/details">Details</Link>
      </section>
      <aside>
        <Playlist songs={songs}/>
      </aside>
      </div>
      <main>{children}</main>
    </Provider>
  );
}

export default Navigator;

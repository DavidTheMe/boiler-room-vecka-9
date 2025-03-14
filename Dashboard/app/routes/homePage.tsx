import useFetchSongs from "../utils/FetchSongs";
import PopularSongs from "../components/Home/ShowPopularSongs";
import NewReleases from "../components/Home/ShowNewReleases";
import ShowStatistics from "../components/Home/ShowStatistics";
import { Provider } from "react-redux";
import store from "../redux/store";
import Navigator from "./navigator.tsx";

const Home = () => {
  const { popularSongs, newReleases } = useFetchSongs();

  return (
    // might need to change provider to router later
    <>
    <Navigator />
    <Provider store={store}>
      <PopularSongs songs={popularSongs} />
      <NewReleases songs={newReleases} />
      <ShowStatistics />
    </Provider>
    
    </>
  );
};

export default Home;
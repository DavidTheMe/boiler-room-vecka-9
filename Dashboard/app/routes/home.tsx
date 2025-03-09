import useFetchSongs from "../utils/FetchSongs";
import PopularSongs from "../components/Home/ShowPopularSongs";
import NewReleases from "../components/Home/ShowNewReleases";
import { Provider } from "react-redux";
import store from "../redux/store";

const Home = () => {
  const { popularSongs, newReleases } = useFetchSongs();

  return (
    // might need to change provider to router later
    <Provider store={store}>
      <PopularSongs songs={popularSongs} />
      <NewReleases songs={newReleases} />
      <section>
        <h2>Statistik</h2>
        {/* Add your bar chart component here */}
      </section>
    </Provider>
  );
};

export default Home;

import useFetchSongs from "../utils/FetchSongs";
import PopularSongs from "../components/Home/ShowPopularSongs";
import NewReleases from "../components/Home/ShowNewReleases";
import ShowStatistics from "../components/Home/ShowStatistics";
import Navigator from "./navigator";

const Home = () => {
  const { popularSongs, newReleases } = useFetchSongs();

  return (

    <Navigator>
      <PopularSongs songs={popularSongs} />
      <NewReleases songs={newReleases} />
      <ShowStatistics />
    </Navigator>
    
  );
};

export default Home;
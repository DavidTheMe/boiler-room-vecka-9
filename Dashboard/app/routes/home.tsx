import useFetchSongs from "../utils/FetchSongs";
import PopularSongs from "../components/Home/ShowPopularSongs";
import NewReleases from "../components/Home/ShowNewReleases";

const Home = () => {
  const { popularSongs, newReleases } = useFetchSongs();

  return (
    <div>
      <PopularSongs songs={popularSongs} />
      <NewReleases songs={newReleases} />
      <section>
        <h2>Statistik</h2>
        {/* Add your bar chart component here */}
      </section>
    </div>
  );
};

export default Home;

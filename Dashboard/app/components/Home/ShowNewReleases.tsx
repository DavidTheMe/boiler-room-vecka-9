import { useDispatch } from "react-redux";
import { addToPlaylist } from "../../redux/slice";

interface Song {
  id: number;
  songTitle: string;
  albumTitle: string;
  artist: string;
  cover: string;
}

interface NewReleasesProps {
  songs: Song[];    
}

const NewReleases: React.FC<NewReleasesProps> = ({ songs }) => {
  const dispatch = useDispatch();

  return (
    <section className="p-6">
      <h2 className="text-2x1 font-bold mb-6">Nya releaser</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {songs.map((song) => (
          <div key={song.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src={song.cover} alt={song.albumTitle} className="w-full h-48 object-cover"/>
            <div className="p-4">
            <h3 className="text-lg font-semibold">{song.albumTitle}</h3>
            <p className="text-gray-600">{song.artist}</p>
            <button 
              onClick={() => dispatch(addToPlaylist(song))}
              className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
            >
              Lägg till i din spellista
            </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewReleases;
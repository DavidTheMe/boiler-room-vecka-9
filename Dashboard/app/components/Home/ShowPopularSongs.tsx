import { useDispatch } from "react-redux";
import { addToPlaylist } from "../../redux/slice";

interface Song {
  id: number;
  songTitle: string;
  albumTitle: string;
  artist: string;
  cover: string;
}

interface PopularSongsProps {
  songs: Song[];
}

const PopularSongs: React.FC<PopularSongsProps> = ({ songs }) => {
  const dispatch = useDispatch();

  return (
    <section className="p-6 max-w-7xl mx-auto">
    <h2 className="text-2xl font-bold mb-6">Nya releaser</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {songs.map((song) => (
        <div
          key={song.id}
          className="card shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={song.cover}
            alt={song.songTitle}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{song.songTitle}</h3>
            <p className="text-gray-600">{song.artist}</p>
            <p className="text-gray-500 text-sm">{song.albumTitle}</p>
            <button
              onClick={() => dispatch(addToPlaylist(song))}
              className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300"
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

export default PopularSongs;

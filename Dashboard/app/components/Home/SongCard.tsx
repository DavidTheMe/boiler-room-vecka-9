import { useDispatch } from "react-redux";
import { addToPlaylist } from "../../redux/slice";

interface Song {
  id: number;
  songTitle: string;
  albumTitle: string;
  artist: string;
  cover: string;
}

interface SongCardProps {
  song: Song;
  isAlbumTitle?: boolean;
}

const SongCard: React.FC<SongCardProps> = ({ song, isAlbumTitle = false }) => {
  const dispatch = useDispatch();

  return (
    <div className="card shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={song.cover} alt={song.songTitle} className="w-full aspect-square object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">
          {isAlbumTitle ? song.albumTitle : song.songTitle}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">{song.artist}</p>
        {!isAlbumTitle && <p className="text-gray-500 text-sm">{song.albumTitle}</p>}
        <button
          onClick={() => dispatch(addToPlaylist(song))}
          className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300"
        >
          Lägg till i din spellista
        </button>
      </div>
    </div>
  );
};

export default SongCard;

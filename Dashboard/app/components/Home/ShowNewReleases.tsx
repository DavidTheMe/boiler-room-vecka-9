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
    <section>
      <h2>Nya releaser</h2>
      <div>
        {songs.map((song) => (
          <div key={song.id}>
            <img src={song.cover} alt={song.albumTitle} />
            <h3>{song.albumTitle}</h3>
            <p>{song.artist}</p>
            <button 
              onClick={() => dispatch(addToPlaylist(song))}
              className=""
            >
              Lägg till i din spellista
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewReleases;
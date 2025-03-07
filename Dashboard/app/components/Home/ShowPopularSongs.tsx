import { useDispatch } from "react-redux";
import { addToPlaylist } from "./redux/slice";

const PopularSongs = ({ songs }) => {
    const dispatch = useDispatch();

    return (
        <section>
            <h2>Heta låtar just nu</h2>
            <div>
                {songs.map((song) => (
                    <div key={song.id}>
                        <img src={song.cover} alt={song.songTitle} />
                        <h3>{song.songTitle}</h3>
                        <p>{song.artist}</p>
                        <p>{song.albumTitle}</p>
                        <button 
                            onClick={() => dispatch(addToPlaylist(song))}
                            className = ""
                        >Lägg till i din spellista</button>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default PopularSongs;
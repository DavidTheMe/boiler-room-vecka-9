import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToPlaylist, removeFromPlaylist } from "../redux/slice";

const Home = () => {
  const [recentlyClicked, setRecentlyClicked] = useState<any[]>([]);
  const [popularSongs, setPopularSongs] = useState<any[]>([]);
  const [newReleases, setNewReleases] = useState<any[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("../data/songs.json")
    .then((response) => response.json())
    .then((data) => {
      setPopularSongs(data.popularSongs);
      setNewReleases(data.newReleases);
    });
  }, []);

  return (
    <div>
      <section>
        <h2>Heta låtar just nu</h2>
        <div>
          {popularSongs.map((song) => (
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

      <section>
        <h2>Nya releaser</h2>
        <div>
          {newReleases.map((song) => (
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

      <section>

      </section>
    </div>
  )
}



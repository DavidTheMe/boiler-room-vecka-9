import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../redux/store'; 
import { removeFromPlaylist } from '../redux/slice'; 
const ShowPlaylist = () => {
  const dispatch = useDispatch();

  const songs = useSelector((state: RootState) => state.playlist.songs);

  const handleRemove = (id: number) => {
    dispatch(removeFromPlaylist(id));
  };

  return (
    <div>
      <h2>Spellista</h2>
      {songs.length === 0 ? (
        <p>Inga låtar i spellistan.</p>
      ) : (
        <ul>
          {songs.map((song) => (
            <li key={song.id}>
              <img src={song.cover} alt={song.songTitle} width={50} />
              <div>
                <strong>{song.songTitle}</strong> – {song.artist}
              </div>
              <button onClick={() => handleRemove(song.id)}>Ta bort</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShowPlaylist;

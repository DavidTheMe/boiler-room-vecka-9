import Navigator from "app/routes/navigator";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import SearchResultSong from "../components/SearchResultSong";
import songsData from '../../public/songs.json';

const SearchPage = () => {
  const location = useLocation();
  const searchQuery = location.state?.query || "";

  function GetSearchResults(query) {
    return songsData.allSongs.filter(song =>
      song.songTitle.toLowerCase().includes(query.toLowerCase()) ||
      song.artist.toLowerCase().includes(query.toLowerCase())
    );
  }

  const searchResults = GetSearchResults(searchQuery);

  return (
    <>
      <Navigator />
      <h1>Results for "{searchQuery}"</h1>
      {searchResults.length > 0 ? (
        searchResults.map(song => (
          <SearchResultSong
            key={song.id}
            songName={song.songTitle}
            artist={song.artist}
            cover={song.cover} // assuming SearchResultSong can take this
          />
        ))
      ) : (
        <p>Inga resultat hittades</p>
      )}
    </>
  );
};

export default SearchPage;
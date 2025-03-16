import React, {useState } from "react";

const songsData = {[]};

const SearchSongs: React.FC = () => {
    const [query, setQuery] = useState("");
  
    const filteredSongs = songs.filter(song =>
      song.songTitle.toLowerCase().includes(query.toLowerCase()) ||
      song.artist.toLowerCase().includes(query.toLowerCase())
    );
}

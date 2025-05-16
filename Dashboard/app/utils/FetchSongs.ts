import { useState, useEffect } from "react";
import songsData from '../../public/songs.json';

interface Song {
  id: number;
  songTitle?: string; // vissa newReleases saknar detta
  albumTitle: string;
  artist: string;
  cover: string;
}

interface Statistics {
  [songTitle: string]: number;
}

interface songsData {
  popularSongs: Song[];
  newReleases: Song[];
  statistics: Statistics;
}

const useFetchSongs = () => {
  const [popularSongs, setPopularSongs] = useState<Song[]>([]);
  const [newReleases, setNewReleases] = useState<Song[]>([]);
  const [statistics, setStatistics] = useState<Statistics>({});

  useEffect(() => {
    fetch("/songs.json")
      .then((res) => res.json())
      .then((data: songsData) => {
        setPopularSongs(data.popularSongs);
        setNewReleases(data.newReleases);
        setStatistics(data.statistics);
      })
      .catch((err) => console.error("Error fetching songs data:", err));
  }, []);

  return { popularSongs, newReleases, statistics };
};

export default useFetchSongs;

import { useState, useEffect } from "react";

const useFetchSongs = () => {
    const [popularSongs, setPopularSongs] = useState<any[]>([]);
    const [newReleases, setNewReleases] = useState<any[]>([]);

    useEffect(() => {
        fetch("../data/songs.json")
        .then((response) => response.json())
        .then((data) => {
            setPopularSongs(data.popularSongs);
            setNewReleases(data.newReleases);
        });
    }, []);

    return { popularSongs, newReleases };
}

export default useFetchSongs;
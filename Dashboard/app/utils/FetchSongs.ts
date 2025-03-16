// import { useState, useEffect } from "react";

// const useFetchSongs = () => {
//     const [popularSongs, setPopularSongs] = useState<any[]>([]);
//     const [newReleases, setNewReleases] = useState<any[]>([]);
//     const [statistics, setStatistics] = useState<any[]>([]);

//     useEffect(() => {
//         fetch("/songs.json")
//         .then((response) => response.json())
//         .then((data) => {
//             setPopularSongs(data.popularSongs);
//             setNewReleases(data.newReleases);
//             setStatistics(data.statistics);
//         })
//         .catch((error) => console.error('Error fetching songs data:', error));
//     }, []);

//     return { popularSongs, newReleases, statistics };
// }

// export default useFetchSongs;

//------ hela dennafil denna behövs inte längre ersatt med async thunk i slice.ts------
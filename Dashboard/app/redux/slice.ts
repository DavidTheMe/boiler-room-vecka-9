import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


interface Song {
    id: number;
    songTitle: string;
    albumTitle: string;
    artist: string;
    cover: string;
}

interface PlaylistState {
    songs: Song[];
    loading: boolean;
    error: string | null;
}

const initialState: PlaylistState = {
    songs: [],
    loading: false,
    error: null,
}


// 1) Async-funktion som hämtar /songs.json
 export const fetchSongs = createAsyncThunk("playlist/fetchSongs", async () => {
   const response = await fetch("/songs.json");
   if (!response.ok) {
     throw new Error("Failed to fetch songs data");
     }
   const data = await response.json();
   // Anpassa hur du vill returnera data (t.ex. data.popularSongs)
   return data.popularSongs as Song[];
 });



const playlistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        addToPlaylist: (state, action: PayloadAction<Song>) => {
            state.songs.push(action.payload);
        },
        removeFromPlaylist: (state, action: PayloadAction<number>) => {
            state.songs = state.songs.filter(song => song.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
builder 
.addCase(fetchSongs.pending, (state) => {
state.loading = true;
state.error = null;
    })
.addCase(fetchSongs.fulfilled, (state, action) => {
state.loading = false;
 // Spara data i state
state.songs = action.payload;
    })
.addCase(fetchSongs.rejected, (state, action) => {
state.loading = false;
state.error = action.error.message || "Something went wrong";
    });
 }
});

export const { addToPlaylist, removeFromPlaylist } = playlistSlice.actions;
export default playlistSlice.reducer;
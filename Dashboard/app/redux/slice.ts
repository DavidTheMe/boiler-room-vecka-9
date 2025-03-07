import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Song {
    id: number;
    songTitle: string;
    albumTitle: string;
    artist: string;
    cover: string;
}

interface PlaylistState {
    songs: Song[];
}

const initialState: PlaylistState = {
    songs: [],
}

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
});

export const { addToPlaylist, removeFromPlaylist } = playlistSlice.actions;
export default playlistSlice.reducer;
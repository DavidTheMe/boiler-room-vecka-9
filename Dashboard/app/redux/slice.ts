import { createSlice } from "@reduxjs/toolkit";
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
}

const initialState: PlaylistState = {
    songs: [],
}

const playlistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
      addToPlaylist: (state, action: PayloadAction<Song>) => {
        // Förhindra dubbletter
        const exists = state.songs.some(song => song.id === action.payload.id);
        if (!exists) {
          state.songs.push(action.payload);
        }
      },
      removeFromPlaylist: (state, action: PayloadAction<number>) => {
        state.songs = state.songs.filter(song => song.id !== action.payload);
      },
    },
  });

export const { addToPlaylist, removeFromPlaylist } = playlistSlice.actions;
export default playlistSlice.reducer;
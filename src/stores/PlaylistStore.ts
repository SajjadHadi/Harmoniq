import { defineStore } from 'pinia';
import { v4 as uuidv4 } from "uuid";

import { Track } from '../types/track';
import { Playlist } from "../types/playlist";

export const usePlaylistStore = defineStore('playlist', {
    state: () => ({
        tracks: [] as Track[],
        loading: false,
        searchQuery: '',
        playlists: [] as Playlist[],
    }),
    actions: {
        async scanLibrary(directory: string) {
            // TODO
            console.log(directory);
        },
        addTrack(track: Track) {
            this.tracks.push(track);
        },
        removeTrack(trackId: string) {
            this.tracks = this.tracks.filter((track: Track) => track.id !== trackId);
        },
        createPlaylist(title: string) {
            const newPlaylist: Playlist = {
                id: uuidv4(),
                title,
                tracks: [],
            };
            this.playlists.push(newPlaylist);
            console.log(this.playlists);
        },
        addToPlaylist(playlistId: string, track: Track) {
            const playlist = this.playlists.find((p) => p.id === playlistId);
            if (playlist) {
                playlist.tracks.push(track);
            }
        },
        removeFromPlaylist(playlistId: string, trackId: string) {
            const playlist = this.playlists.find((p) => p.id === playlistId);
            if (playlist) {
                playlist.tracks = playlist.tracks.filter((t: Track) => t.id !== trackId);
            }
        },
        removePlaylist(playlistId: string) {
            this.playlists = this.playlists.filter((p) => p.id !== playlistId);
        }
    },
    getters: {
        filteredTracks: (state) => {
            // TODO
            console.log(state);
        },
    },
});


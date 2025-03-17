import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import { Track } from '../types/track';
import { Playlist } from '../types/playlist';

export const usePlaylistStore = defineStore('playlist', {
    state: () => ({
        playlists: [] as Playlist[],
    }),
    actions: {
        createPlaylist(title: string) {
            const newPlaylist: Playlist = {
                id: uuidv4(),
                title,
                tracks: [],
            };
            this.playlists.unshift(newPlaylist);
        },
        addToPlaylist(playlistId: string, track: Track) {
            const playlist = this.playlists.find(p => p.id === playlistId);
            if (playlist) {
                playlist.tracks.push(track);
            }
        },
        removeFromPlaylist(playlistId: string, trackId: string) {
            const playlist = this.playlists.find(p => p.id === playlistId);
            if (playlist) {
                playlist.tracks = playlist.tracks.filter(t => t.id !== trackId);
            }
        },
        removePlaylist(playlistId: string) {
            this.playlists = this.playlists.filter(p => p.id !== playlistId);
        },
    },
    getters: {
        getPlaylistById: (state) => {
            return (id: string): Playlist | undefined => state.playlists.find(p => p.id === id);
        },
    },
});

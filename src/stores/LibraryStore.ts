import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import { open } from '@tauri-apps/plugin-dialog';
import { convertFileSrc } from '@tauri-apps/api/core';
import { basename } from '@tauri-apps/api/path';
import { Track } from '../types/track';

export const useLibraryStore = defineStore('library', {
    state: () => ({
        tracks: [] as Track[],
    }),
    actions: {
        createTrack(path: string, title: string): Track {
            const id = uuidv4();
            const track: Track = { id, title, path };
            this.tracks.unshift(track);
            return track;
        },
        async openTracks() {
            try {
                const files = await open({
                    multiple: true,
                    directory: false,
                    filters: [{ name: 'Audio', extensions: ['mp3', 'wav', 'ogg'] }],
                });
                if (files) {
                    const fileArray = Array.isArray(files) ? files : [files];
                    await Promise.all(
                        fileArray.map(async (file) => {
                            const audioPath = convertFileSrc(file as string);
                            const fileName = await basename(file as string);
                            const title = fileName.split('.').shift() || 'Unknown Title';
                            return this.createTrack(audioPath, title);
                        })
                    );
                }
            } catch (error) {
                console.error('Error opening tracks:', error);
            }
        },
        removeTrack(id: string) {
            this.tracks = this.tracks.filter(track => track.id !== id);
        },
    },
});

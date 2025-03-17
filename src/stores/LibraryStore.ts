import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import { open } from "@tauri-apps/plugin-dialog";
import { convertFileSrc } from "@tauri-apps/api/core";
import { basename } from "@tauri-apps/api/path";
import { Track } from "../types/track";

export const useLibraryStore = defineStore('library', {
    state: () => ({
        tracks: [] as Track[],
        currentTrack: {
            path: '',
        } as Track | null
    }),
    actions: {
        createTrack(path: string, title: string): Track {
            const id = uuidv4();
            const track: Track = {
                id,
                title,
                path,
            };
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
            if (this.currentTrack?.id === id) {
                this.currentTrack = {} as Track;
            }
        },
        setCurrentTrack(id: string) {
            this.currentTrack = this.tracks.find((track: Track) => track.id === id) || null;
        },
        skipToNextTrack() {
            const currentIndex = this.tracks.findIndex(track => track.id === this.currentTrack?.id);

            if (currentIndex !== -1) {
                const nextIndex = (currentIndex + 1) % this.tracks.length;
                this.currentTrack = this.tracks[nextIndex];
            }
        },
        skipToPreviousTrack() {
            const currentIndex = this.tracks.findIndex(track => track.id === this.currentTrack?.id);

            if (currentIndex !== -1) {
                const prevIndex = (currentIndex - 1 + this.tracks.length) % this.tracks.length;
                this.currentTrack = this.tracks[prevIndex];
            }
        }

    },
});
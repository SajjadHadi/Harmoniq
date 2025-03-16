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
            this.tracks.push(track);
            return track;
        },
        async openTrack() {
            try {
                const file = await open({
                    multiple: false,
                    directory: false,
                    filters: [{ name: 'Audio', extensions: ['mp3', 'wav', 'ogg'] }],
                });
                if (file) {
                    const audioPath = convertFileSrc(file as string);
                    const fileName = await basename(file as string);
                    const title = fileName.split('.').shift() || 'Unknown Title';
                    const newTrack = this.createTrack(audioPath, title);
                    this.currentTrack = newTrack;
                    console.log(this.tracks);
                }
            } catch (error) {
                console.error('Error opening track:', error);
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
        }
    },
});
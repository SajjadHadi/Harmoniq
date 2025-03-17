import { defineStore } from 'pinia';
import { Track } from '../types/track';

export const usePlaybackStore = defineStore('playback', {
    state: () => ({
        currentQueue: [] as Track[],
        currentTrack: null as Track | null,
        mode: 'library' as 'library' | 'playlist',
    }),
    actions: {
        setQueue(queue: Track[], trackId?: string, mode: 'library' | 'playlist' = 'library') {
            this.currentQueue = queue;
            this.mode = mode;
            this.currentTrack = trackId
                ? queue.find(t => t.id === trackId) || queue[0] || null
                : queue[0] || null;
        },
        skipToNextTrack() {
            if (!this.currentQueue.length || !this.currentTrack) return;
            const currentIndex = this.currentQueue.findIndex(t => t.id === this.currentTrack!.id);
            const nextIndex = (currentIndex + 1) % this.currentQueue.length;
            this.currentTrack = this.currentQueue[nextIndex];
        },
        skipToPreviousTrack() {
            if (!this.currentQueue.length || !this.currentTrack) return;
            const currentIndex = this.currentQueue.findIndex(t => t.id === this.currentTrack!.id);
            const prevIndex = (currentIndex - 1 + this.currentQueue.length) % this.currentQueue.length;
            this.currentTrack = this.currentQueue[prevIndex];
        },
    },
});

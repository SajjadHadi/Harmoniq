import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Playlists from '../pages/Playlists.vue';
import Library from '../pages/Library.vue';
import PlaylistTracks from "../pages/PlaylistTracks.vue";

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/playlist', name: 'Playlist', component: Playlists },
    { path: '/library', name: 'Library', component: Library },
    { path: '/playlist/:id', name: 'PlaylistTracks', component: PlaylistTracks },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

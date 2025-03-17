import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Playlists from '../pages/Playlists.vue';
import Tracks from '../pages/Tracks.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/playlists', name: 'Playlists', component: Playlists },
    { path: '/tracks', name: 'Tracks', component: Tracks },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

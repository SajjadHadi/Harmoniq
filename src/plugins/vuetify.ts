import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

const modernDark = {
    dark: true, // Indicates a dark theme
    colors: {
        primary: '#2d2e37',
        secondary: '#3c3abe',
        accent: '#c4c4c4',
        background: '#000000',
        error: '#E52020',
        success: '#A0C878',
        info: '#6F38C5',
        warning: '#FFB22C',
    },
};

export default createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: { mdi },
    },
    theme: {
        defaultTheme: "modernDark",
        themes: {
            modernDark
        }
    },
})
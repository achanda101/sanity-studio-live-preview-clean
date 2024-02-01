import { buildLegacyTheme, defineConfig } from "sanity"

const props = {
    "--ng-white": "#fcfaf9",
    "--ng-black": "#1a1a1a",
    // "--ng-red": "#d61e28",
    "--ng-red": "#e2363f",
    "--ng-text-red": "#c91d25"
}

// https://www.sanity.io/docs/theming
export const ngTheme = buildLegacyTheme({
    /* Base theme colors */
    '--black': props[ '--ng-black' ],
    '--white': props[ '--ng-white' ],

    '--gray': '#666',
    '--gray-base': '#666',

    '--component-bg': props[ '--ng-white' ],
    '--component-text-color': props[ '--ng-black' ],

    /* Brand */
    '--brand-primary': props[ '--ng-red' ],

    // Default button
    '--default-button-color': '#666',
    '--default-button-primary-color': props[ '--ng-red' ],

    /* State */
    '--state-info-color': props[ '--ng-red' ],

    /* Navbar */
    '--main-navigation-color': props[ '--ng-black' ],
    '--main-navigation-color--inverted': props[ '--ng-white' ],

    '--focus-color': props[ '--ng-red' ],
})

export default defineConfig({
    theme: ngTheme
})


import type {AppProps} from 'next/app'
import {CssBaseline, GeistProvider, Themes} from '@geist-ui/core'

const MyApp = ({Component, pageProps}: AppProps) => {

    const myTheme1 = Themes.createFromLight({
        type: 'coolTheme',
        palette: {
            accents_8: '#a395e5',
            accents_7: '#a395e5',
            accents_6: '#a395e5',
            accents_5: '#a395e5',
            accents_4: '#a395e5',
            accents_3: '#a395e5',
            accents_2: '#a395e5',
        },
    })

    return (
        <GeistProvider themes={[myTheme1]} themeType="coolTheme">
            <CssBaseline/>
            <Component {...pageProps} />
        </GeistProvider>
    )
}
export default MyApp

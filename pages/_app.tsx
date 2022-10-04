import type {AppProps} from 'next/app'
import {CssBaseline, GeistProvider, Themes} from '@geist-ui/core'

const MyApp = ({Component, pageProps}: AppProps) => {

    return (
        <GeistProvider themeType={"dark"}>
            <CssBaseline/>
            <Component {...pageProps} />
        </GeistProvider>
    )
}
export default MyApp

import type {AppProps} from 'next/app'
import Head from "next/head";
import React from "react";
import {isLayoutProvider} from "../components/layout";
import '../styles/globals.css'

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <Head>
            <title>typeof.dev</title>
            <meta name="description" content="Michał Przybyś"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        {isLayoutProvider(Component) ? Component.getLayout(
            <Component {...pageProps} />) : <Component {...pageProps} />}
    </>
}




export default MyApp

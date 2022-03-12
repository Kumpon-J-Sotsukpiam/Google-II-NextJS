import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'

export default function Search() {
    return (
        <div>
            <Head>
                <title>Search Results</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* header */}
            <Header />
            {/* search results */}
        </div>
    )
}

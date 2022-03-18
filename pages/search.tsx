import Head from 'next/head'
import { Router, useRouter } from 'next/router';
import React from 'react'
import Header from '../components/Header'
import SearchResults from '../components/SearchResults';
import { API_KEY, CONTEXT_KEY } from '../keys';
import Response from '../Response';

export default function Search({ results }: any) {
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>{router.query.search} - Google Search</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* header */}
            <Header />
            {/* search results */}
            <SearchResults results={results} />
        </div>
    )
}

export async function getServerSideProps(context: any) {
    const useDummyData = true;
    const startIndex = context.query.start || "0";

    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&&q=${context.query.search}&start=${startIndex}`)
        .then(response => response.json());
    // After the server has rendered.. pass the result to the client ..
    return {
        props: {
            results: data
        }
    }
}
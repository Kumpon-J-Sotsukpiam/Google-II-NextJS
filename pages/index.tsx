import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Avatar from '../components/Avatar';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
        {/* left */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>
        {/* right */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>
          {/* icon */}
          {/* avatar */}
          <Avatar
            url='https://lh3.googleusercontent.com/a-/AOh14GhxFrZThqhiAf90gcAj8gnNdOpWW0Gphr7JuunJ0Sg=s288-p-rw-no'
          />
        </div>
      </header>
      {/* body */}
      {/* footer */}
    </div>
  )
}

export default Home

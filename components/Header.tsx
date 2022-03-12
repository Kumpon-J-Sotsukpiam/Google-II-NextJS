import Image from 'next/image'
import React, { useRef } from 'react'
import { useRouter } from 'next/router'
import { XIcon } from '@heroicons/react/outline'
import { MicrophoneIcon, SearchIcon } from '@heroicons/react/solid'

import Avatar from './Avatar'

export default function () {
    const router = useRouter()
    const searchInputRef = useRef<any>(null)
    const search = (e: any) => {
        e.preventDefault()
        const term = searchInputRef.current.value;
        if (!term) return;

        router.push({
            pathname: '/search',
            query: {
                search: term
            }
        })
    }
    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image
                    src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
                    width={120}
                    height={40}
                    onClick={() => router.push('/')}
                    className='cursor-pointer'
                />
                <form
                    className='flex flex-grow px-6 py-3 ml-10 mr-4
                    border border-gray-200 rounded-full 
                    shadow-lg max-w-3xl items-center'
                >
                    <input
                        className='flex-grow w-full focus:outline-none'
                        ref={searchInputRef}
                        type="text"
                    />
                    <XIcon
                        className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125'
                        onClick={() => searchInputRef.current.value = ''}
                    />
                    <MicrophoneIcon className='mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300' />
                    <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex' />
                    <button hidden type='submit' onClick={search}>Search</button>
                </form>
                {/* avatar */}
                <Avatar
                    className='ml-auto'
                    url='https://lh3.googleusercontent.com/a-/AOh14GhxFrZThqhiAf90gcAj8gnNdOpWW0Gphr7JuunJ0Sg=s288-p-rw-no'
                />
            </div>
        </header>
    )
}

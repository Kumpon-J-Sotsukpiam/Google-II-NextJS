import React from 'react'


export default function Avatar({ url }: { url: string }) {
    return (
        <img
            className='h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110'
            loading='lazy'
            src={url}
        />
    )
}

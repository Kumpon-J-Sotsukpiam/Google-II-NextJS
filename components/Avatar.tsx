import React from 'react'


export default function Avatar({ url, className }: { url: string, className?: string }) {
    return (
        <img
            className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
            loading='lazy'
            src={url}
        />
    )
}

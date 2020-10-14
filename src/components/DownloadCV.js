import React from 'react'



export default function DownloadCV({children,src}) {
    return (
        <a href={src} download="ValkovicCvHlohovec.pdf" className='cv'>{children}</a>


    )
}


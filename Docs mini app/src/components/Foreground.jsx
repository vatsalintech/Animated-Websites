import React, { useRef, useState } from 'react'
import Card from './Card'

function Foreground() {

    const ref = useRef(null);

    const data = [
        {desc: "Download this project, so you can enjoy it :)",
         filesize:"90mb",
         close: false,
         tag: {isOpen: true, tagTitle: "Download now", tagColor: "green"},
        },
        {desc: "This project is made by vatsal.",
         filesize:"0mb",
         close: true,
         tag: {isOpen: false, tagTitle: "Download now", tagColor: "green"},
        },
        {desc: "Feel free to upload your feedback.",
         filesize:"1mb",
         close: true,
         tag: {isOpen: true, tagTitle: "Upload now", tagColor: "blue"},
        },
    ];

  return (
    <>
        <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5">
            {data.map((item, index)=>(
                <Card data={item} reference={ref}/>
            ))}
        </div>
    </>
  )
}

export default Foreground   
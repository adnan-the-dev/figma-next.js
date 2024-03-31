import React from 'react'
import Logo from '../../shared.js'
export default function Header() {
  return (
    <>
    <div className='border-2 flex justify-between p-7'>
        <div>
            {<Logo/>}
        </div>
        <div className='flex gap-2'>
            <div>{<Logo/>}</div>
            <div>{<Logo/>}</div>
            <div>{<Logo/>}</div>
            <div>{<Logo/>}</div>
            <div>{<Logo/>}</div>
            <div>{<Logo/>}</div>
        </div>
    </div>
    </>
  )
}

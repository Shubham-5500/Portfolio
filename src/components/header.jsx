import React from 'react'
import ThemeToggler from './ui/theme-toggle-button'

export default function Header() {
  return (
    <div className='flex items-center justify-between'>
        <div></div>
        <div></div>
        <div>
            <ThemeToggler variant="circle-blur" start="top-right" />
        </div>
    </div>
  )
}

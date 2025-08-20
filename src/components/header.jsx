import React from 'react'
import ThemeToggleButton from "@/components/ui/theme-toggle-button"

export default function Header() {
  return (
    <div className='flex items-center justify-between'>
      <div></div>
      <div></div>
      <div>
        <ThemeToggleButton start='top-right' />
      </div>
    </div>
  )
}

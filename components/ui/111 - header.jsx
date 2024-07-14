import React from 'react'
import { ContactDialog } from './1 - contact-dialog.jsx'
import MobileDrawer from './1 - mobile-drawer.jsx'
import { Button } from './button.jsx'

const links = [
  { href: '/', label: 'Home' },
  { href: 'https://www.foym.org', label: 'Apply' },
]

export default function Header() {
  return (
    // Before you deploy, make sure to change "top-14 xs:top-10" to top-0. This will make the header stick to the top of the page when you remove the banner.
    <header className="overflow-hidden h-fit w-full text-black bg-neutral-100 z-[11] sticky top-14 xs:top-10 border-y border-neutral-200">
      <nav className="flex justify-between items-center max-w-[1140px] w-full px-8 py-6 mx-auto">
        <a href="/" className="text-2xl font-semibold tracking-tighter">Grow <span className="text-green-800">Together</span></a>
        <ul className="md:flex justify-between items-center gap-6 hidden">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a className='tracking-tight text-neutral-600 font-medium' href={href}>{label}</a>
            </li>
          ))}
          <ContactDialog />
        </ul>
        <div className='md:hidden'>
          <MobileDrawer className="" />
        </div>
        <Button variant="outline" className="hidden md:block">Start a Garden</Button>
      </nav>
    </header>
    
  )
}

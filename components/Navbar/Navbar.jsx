import React from 'react'
import { links } from '@/lib/data'
import Link from 'next/link'
const Navbar = () => {
    return (
        <>
            <nav className='max-md:hidden'>
                <ul className='flex gap-10'>
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link href={link.link}>{link.name}</Link>
                        </li>
                    ))
                    }
                </ul>
            </nav>
        </>
    )
}

export default Navbar
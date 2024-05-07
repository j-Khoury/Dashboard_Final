import Image from 'next/image'
import React from 'react'
import MenuItem from './MenuItem'
import { routes } from '@/config/routes'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <nav className="flex flex-col w-64 border-r border-gray-200">
      <Link href={'/'} className="h-16 flex justify-center items-center">
        <Image
          src={'/assets/logos/logo-extended-dark.png'}
          alt="Logo"
          width={1190 / 12}
          height={367 / 12}
          className="p-5 mt-3"
        />
      </Link>
      <div className="flex flex-col mt-4">
        {routes.map((route) => (
          <MenuItem
            key={route.href}
            name={route.name}
            href={route.href}
            icon={<route.icon />}
          />
        ))}
      </div>
    </nav>
  )
}

export default Sidebar

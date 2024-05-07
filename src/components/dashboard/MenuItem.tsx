'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MenuItem = ({
  name,
  href,
  icon,
}: {
  name: string
  href: string
  icon: any
}) => {
  const pathName = usePathname()

  const isActive = pathName === href
  return (
    <Link
      href={href}
      className={`flex justify-start items-center gap-x-4 px-4 py-2 m-2 ${
        !isActive && 'hover:bg-primary/65'
      } hover:text-secondary transition duration-300 ease rounded-md font-semibold ${
        isActive ? 'bg-primary text-white' : ''
      }`}
    >
      {icon}
      {name}
    </Link>
  )
}

export default MenuItem

'use client'
import { signOut } from 'next-auth/react'
import React from 'react'
import { VscSignOut } from 'react-icons/vsc'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <div className="h-12 shadow flex items-center justify-end px-8 font-bold text-primary bg-secondary">
      <Button
        variant={'ghost'}
        className="cursor-pointer flex gap-x-2 items-center font-semibold"
        onClick={() => signOut()}
      >
        <VscSignOut size={18} /> Sign out
      </Button>
    </div>
  )
}

export default Header

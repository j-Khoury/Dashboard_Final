'use client'
import React, { FC } from 'react'
import { SessionProvider } from 'next-auth/react'

interface IProviderProps {
  children: React.ReactNode
}

const NextAuthProvider: FC<IProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default NextAuthProvider

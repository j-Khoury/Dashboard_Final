import Header from '@/components/dashboard/Header'
import Sidebar from '@/components/dashboard/Sidebar'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = getServerSession()
  console.log('session', session)
  if (!session) redirect('/signin')

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <div className="p-8 bg-primary/10 min-h-screen">{children}</div>
      </div>
    </div>
  )
}

export default layout

import Header from '@/components/dashboard/Header'
import Sidebar from '@/components/dashboard/Sidebar'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession()

  if (session) {
    redirect('/')
  }
  return <div className="min-h-screen bg-background">{children}</div>
}

export default layout

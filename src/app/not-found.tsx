'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function NotFound(): JSX.Element {
  const router = useRouter()
  return (
    <section className="flex h-screen flex-col items-center justify-center">
      <Image
        src={'/assets/images/404.svg'}
        width={533 * 0.7}
        height={564 * 0.7}
        alt="not-found"
        priority
      />
      <h1 className="text-4xl font-semibold text-gray-600">Oops!!</h1>
      <p className="mt-3 text-gray-500">
        This page you are looking for could not be found.
      </p>
      <Button className="mt-6 px-6" onClick={() => router.push('/')}>
        Go Back to Home
      </Button>
    </section>
  )
}

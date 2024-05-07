import SigninForm from '@/components/forms/signin/SigninForm'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="w-screen h-screen flex flex-col bg-primary items-center justify-center">
      <SigninForm />
    </div>
  )
}

export default page

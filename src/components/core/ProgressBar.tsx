'use client'

import { ProgressLoader } from 'nextjs-progressloader'
import { Suspense } from 'react'

export default function ProgressBar() {
  return (
    <Suspense>
      <ProgressLoader color="#053654" height={2} showSpinner={false} />
    </Suspense>
  )
}

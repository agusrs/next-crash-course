import Repo from '@/app/components/Repo';
import RepoDirs from '@/app/components/RepoDirs';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import Link from 'next/link';
import React, { Suspense } from 'react'

const RepoPage = ({params: {name}}: Params) => {
  return (
    <div className='card'>
      <Link href='/code/repos' className='btn btn-back'>Back To Repositories</Link>
      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={name}/>
      </Suspense>
      <Suspense fallback={<div>Loading directories...</div>}>
        <RepoDirs name={name}/>
      </Suspense>
    </div>
  )
}

export default RepoPage;
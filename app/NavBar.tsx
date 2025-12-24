'use client';
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    const { status, data: session } = useSession();
    if (status === 'loading') null;
    return (
        <div className='flex bg-fuchsia-700 p-5 space-x-3'>
            <Link href="/" className='mr-5'>Next.js</Link>
            <Link href="/users">Users</Link>
            {status === 'authenticated' &&
                <div>
                    {session.user!.name}
                    <Link href='/api/auth/signout' className='ml-5'>Sign out</Link>
                </div>}
            {status === 'unauthenticated' && <Link href="/api/auth/signin">Log In</Link>}
        </div>
    )
}

export default NavBar
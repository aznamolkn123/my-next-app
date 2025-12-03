'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function NewUserPage() {
    const router = useRouter();
    return (
        <button className='btn bg-slate-300'
            onClick={() => router.push("/users")}>
            Create
        </button>
    )
}

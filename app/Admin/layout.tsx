import React from 'react'

interface Props {
    children: React.ReactNode
}
const Adminlayout = ({ children }: Props) => {
    return (
        <div className="flex">
            <aside className='bg-slate-300 p-5 mr-5'>Admin Sidebar</aside>
            <div>{children}</div>
        </div>
    )
}

export default Adminlayout
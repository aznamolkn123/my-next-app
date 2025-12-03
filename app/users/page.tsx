import React from "react";
import UserTable from "./new/UserTable";
import Link from "next/link";

interface Props {
    searchParams: Promise<{
        sortOrder: string,
    }>
}
const UsersPage = async ({ searchParams }: Props) => {
    const { sortOrder } = await searchParams;

    return (
        <>
            <h1 className="text-yellow font-sans">Users</h1>
            <Link href="/users/new" className="btn bg-fuchsia-700">New User</Link>
            <UserTable sortOrder={sortOrder} />
        </>
    );
};

export default UsersPage;
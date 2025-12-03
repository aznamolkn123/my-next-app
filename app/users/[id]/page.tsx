import { notFound } from "next/navigation";

type UserIdParams = {
    id: string;
};

interface Props {
    params: Promise<UserIdParams>;
}

const UserDetailPage = async ({ params }: Props) => {
    const { id } = await params;
    if (parseInt(id) > 10) notFound();
    return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;

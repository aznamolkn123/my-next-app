type UserIdParams = {
    id: string;
};

interface Props {
    params: Promise<UserIdParams>;
}

const UserDetailPage = async ({ params }: Props) => {
    const { id } = await params;

    return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;

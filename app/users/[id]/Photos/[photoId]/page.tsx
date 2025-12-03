import React from 'react'

interface PhotoPageProps {
    params: Promise<{
        id: string;
        photoid: string;
    }>
}
const PhotoPage = async ({ params }: PhotoPageProps) => {
    const { id, photoid } = await params;
    return (
        <div>PhotoPage {id}{photoid}</div>
    )
}

export default PhotoPage
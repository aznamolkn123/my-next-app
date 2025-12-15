'use client'
import React from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary'

interface CloudinaryResult {
    public_id: string
}
const UploadPage = () => {

    const [publicId, setPublicId] = React.useState('')
    return (
        <>
            {publicId &&
                <CldImage
                    width={270}
                    height={180}
                    src={publicId}
                    alt='a code related image'
                />
            }
            <CldUploadWidget
                uploadPreset='dwh8vtlu5'
                options={
                    {
                        sources: ['local'],
                        multiple: false,
                        maxFiles: 5
                    }
                }
                onSuccess={(result, widget) => {
                    if (result.event === 'success') {
                        const data = result.info as CloudinaryResult
                        setPublicId(data.public_id)
                    }
                }}
            >
                {({ open }) =>
                    <button
                        className='btn btn-secondary'
                        onClick={() => open()}
                    >
                        Upload
                    </button>
                }
            </CldUploadWidget>
        </>
    )
}

export default UploadPage
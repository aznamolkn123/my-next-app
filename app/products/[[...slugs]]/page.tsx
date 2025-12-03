import React from 'react'

interface ProductPageProps {
    params: Promise<{
        slugs: string[];
    }>
    searchParams: Promise<{ sortOrder: string }>
}
const ProductPage = async ({ params, searchParams }: ProductPageProps) => {
    const { slugs } = await params;
    const { sortOrder } = await searchParams;
    return (
        <div>ProductPage {slugs} {sortOrder} </div>
    )
}

export default ProductPage
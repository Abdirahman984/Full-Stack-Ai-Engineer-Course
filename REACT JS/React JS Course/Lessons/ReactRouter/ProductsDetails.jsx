import { useParams } from 'react-router'

export const ProductsDetails = () => {
    const { categoryId, productId } = useParams()
    console.log(categoryId)
    console.log(productId)
    return (
        <div>
            <h1 className='text-2xl font-bold'>ProductsDetails</h1>
            <p>category : {categoryId}</p>
            <p>product  : {productId}</p>

        </div>
    )
}


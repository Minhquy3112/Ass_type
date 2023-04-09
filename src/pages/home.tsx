import { useEffect, useState } from "react"
import Products from "../components/products"
import { IProducts } from "../models"
import { getAll } from "../api/product"

const HomePage = () => {
    const [products, setProducts] = useState<IProducts[]>([])

    const fetchProducts = async () => {
        try {
            const {data} = await getAll()
            setProducts(data)
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className="main-content">
            <div className="title">
                {/* <h1>ĐIỆN THOẠI NỔI BẬT NHẤT</h1> */}
                <div className="products">
                    {products.map(product => <Products
                        data={product}
                        key={product.id}
                    />)}
                </div>
            </div>
        </div>
    )
}

export default HomePage
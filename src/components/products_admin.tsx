import { Link, useParams } from "react-router-dom"
import { IProducts } from "../models"
import { useEffect, useState } from "react"
import { Delete } from "../api/product"

type Props = {
    data: IProducts
}
const ProductsAdminPage = ({ data }: Props) => {
    const [product, setProduct] = useState<IProducts>({} as IProducts)
    const { id } = useParams();
    const removeProduct = async (id: string) => {
       try {
        const data = await Delete(id)
        window.location.reload();
       } catch (error) {
        
       }
    }
    return (
        <>
            <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.price}</td>
                <td>{data.description.substring(0,25)}</td>
                <td>
                    <button  onClick={() => removeProduct(data.id)}><i className="fa-solid fa-trash"></i></button>
                    <Link to={`/admin/products/${data.id}`}><i className="fa-sharp fa-solid fa-wrench"></i></Link>
                </td>
            </tr>
        </>
    )
}

export default ProductsAdminPage
import { IProducts } from "../models"
import {Link} from "react-router-dom"

type Props = {
    data: IProducts
}

const Products = ({data}: Props) => {
    return (
        <div className="product">
            <Link to={`/product/${data.id}`}>
                <img src={data.images?.[0].base_url} alt="" />
                <h2>{data.name}</h2>
            </Link>
            <span className="price_1">{data.price}</span><span className="price_2">1{data.original_price} <br /></span>
            <i className="fa-sharp fa-solid fa-star fa-2xs"></i><i
                className="fa-sharp fa-solid fa-star fa-2xs"></i><i
                    className="fa-sharp fa-solid fa-star fa-2xs"></i><i
                        className="fa-sharp fa-solid fa-star fa-2xs"></i><i
                            className="fa-sharp fa-solid fa-star fa-2xs"></i> 72 đánh giá
        </div>
    )
}

export default Products
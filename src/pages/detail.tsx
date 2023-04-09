import { useEffect, useState } from "react"
import { IProducts } from "../models"
import { useParams } from "react-router-dom"
import { getById } from "../api/product"

const DetailPage = (props: any) => {
    const [product, setProduct] = useState<IProducts>({} as IProducts)
    const { id } = useParams()

    const fetchProductById = async (id: string) => {
        try {
            const { data } = await getById(id)
            setProduct(data)
        } catch (err) {

        }
    }

    useEffect(() => {
        if (id) {
            fetchProductById(id)
        }
    }, [])

    return (
        <div className="detail-main-content">
            <div className="detail-list-category">
                <h3>Trang chủ</h3>
                <h3>Điện thoại</h3>
                <h3>Samsung</h3>
                {/* <h3>{name}</h3> */}
            </div>
            <div className="detail-name">
                <h2>{product.name}</h2>
            </div>
            <div className="detail-main">
                <div className="detail-main-title">
                    <div className="detail-image">
                        <img src={product.images?.[0].base_url} alt="" />
                    </div>
                    <div className="detail-title">
                        <span className="detail-price_1">{product.price}₫</span><span className="detail-price_2">{product.original_price}
                            ₫</span>
                        <p >{product.description}</p>
                    </div>
                </div>
                <div className="detail-images-cart">
                    <div className="detail-images">
                        <img src={product.images?.[0].base_url} alt="" />
                        <img src={product.images?.[0].base_url} alt="" />
                        <img src={product.images?.[0].base_url} alt="" />
                        <img src={product.images?.[0].base_url} alt="" />
                    </div>
                    <div className="detail-cart">
                        <button className="detail-tocart">Mua ngay</button>
                        <a href="">
                            <p>Thêm vào giỏ hàng</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="detail-system">
                <div className="detail-main-system">
                    <h1>ĐẶC ĐIỂM NỔI BẬT</h1>
                    <p>{product.specifications?.[0].attributes[0].value}</p>
                    <p>Thưởng thức không gian giải trí cực đỉnh - Màn hình lớn 6.7 inch, độ phân giải Full HD+,
                        120Hz mượt mà</p>
                    <p>Cấu hình Galaxy A73 5G được nâng cấp mạnh với chip Snapdragon 778G, RAM lên đến 8 GB</p>
                    <p>Chiến game thoải mái không lo gián đoạn - Viên pin lớn 5000 mAh, hỗ trợ sạc nhanh 25 W</p>
                </div>
                <div className="detail-system_2">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et in quod qui
                        itaque quia repellendus officiis. Nihil, quas omnis odit, velit totam,
                        voluptates ea dolores iusto ut possimus adipisci est. Atque aut quidem
                        quis et ullam officia beatae natus reiciendis?</p>
                </div>
                <div className="detail-system_3">
                    <h2>Đánh giá Samsung A73 - Hiệu năng mượt mà, chụp ảnh chuyên nghiệp</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi iste
                        doloremque ad blanditiis! Beatae harum dolore accusantium omnis laudantium
                        molestiae, eveniet accusamus adipisci vero, animi saepe iste officia officiis excepturi!</p>
                </div>
                <div className="detail-system_4">
                    <h2>Thiết kế sang trọng, màn hình Super AMOLED</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Tenetur accusamus harum a veritatis, laborum
                        aperiam natus odit impedit nesciunt iure?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Tenetur accusamus harum a veritatis, laborum
                        aperiam natus odit impedit nesciunt iure?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Tenetur accusamus harum a veritatis, laborum
                        aperiam natus odit impedit nesciunt iure?</p>
                </div>
                <div className="detail-see_more">
                    <button className="detail-more">Xem thêm</button>
                </div>
            </div>
        </div>
    )
}

export default DetailPage
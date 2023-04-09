import { useEffect, useState } from "react"
import ProductsAdminPage from "../../components/products_admin"
import { IProducts } from "../../models"
import { getAll } from "../../api/product";
import { Link } from "react-router-dom";

const AdminProductsPage = () => {
    const [products, setProducts] = useState<IProducts[]>([]);

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
        <>
            <main className="admin-aside">
                <aside>
                    <ul>
                        <li><a href="">Điện thoại</a></li>
                        <li><a href="">Laptop</a></li>
                        <li><a href="">Máy tính bảng</a></li>
                        <li><a href="">Âm thanh</a></li>
                    </ul>
                </aside>
                <div className="admin-main-content">
                    <h1>Điện thoại</h1>
                    <div className="admin-main">
                        <div className="admin-categories">
                            <label>Danh mục sản phẩm</label>
                            <p>Bộ lọc: </p><select>
                                <option value="0">Laptop</option>
                                <option value="1">Điện thoại</option>
                            </select>
                        </div>
                        <div className="admin-create">
                            <Link to="/admin/products">Thêm</Link>
                        </div>
                        <div className="admin-content">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Thành tiền</th>
                                        <th>Mô tả</th>
                                        <th>Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {products.map(product => <ProductsAdminPage
                                        data={product}
                                        key={product.id}
                                    />)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default AdminProductsPage
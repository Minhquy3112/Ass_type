import { useForm } from "react-hook-form"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate, useParams } from "react-router-dom"
import { updateForm, updateSchema } from '../../models';
import { getById, update } from "../../api/product";

const AdminProductUpdate = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<updateForm>({
        resolver: yupResolver(updateSchema),
        defaultValues: async () => {
            if (id) {
                return await fetProductById(id)
            }
        },
    })

    const onSubmit = async (data: updateForm) => {
        try {
            if (id) {
                const response = await update(id, data)
                navigate('/admin')
            }

        } catch (error) {

        }
    }

    const fetProductById = async (id: string) => {
        const { data } = await getById(id)
        return data
    }
    return (
        <>
            <header className="update">
                <div className="admin-logo-search-name">
                    <div className="admin-logo">
                        <img src="/logo.png" width="65px" height="57px" alt="" /><span>Dashbord</span>
                    </div>
                    <div className="admin-search">
                        <input type="text" placeholder="Search" />
                    </div>
                    <div className="admin-name">
                        <p>Xin chào, Nguyễn Minh Qúy</p>
                    </div>
                </div>
            </header>
            <div className="container">
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="title">
                        <h4>Thêm sản phẩm mới</h4>
                        <div className="add-main-content">
                            <div className="add-main">
                                <div className="">
                                    <input type="file" />
                                    <label htmlFor="" className="upImage">Thêm ảnh</label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Mô tả ngắn</label>
                                    <textarea className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="add-content">
                                <h4>Thông tin sản phẩm</h4>
                                <div className="form-group">
                                    <label htmlFor="">Tên sản phẩm</label>
                                    <input type="text" className="form-control" {...register("name")} />
                                    <p className='text-red-600 text-[10px]'>
                                        {errors.name && errors.name.message} </p>
                                </div>
                                <div className="form-group price">
                                    <div className="add-price_1">
                                        <label htmlFor="">Giá gốc</label>
                                        <input type="text" className="form-control"{...register("price")} />
                                    </div>
                                    <div className="add-price_1">
                                        <label htmlFor="">Giá khuyến mãi</label>
                                        <input type="text" className="form-control" {...register("original_price")} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Danh mục</label>
                                    <select name="" id="" className="form-control">
                                        <option value="0">Laptop</option>
                                        <option value="0">Điện thoại</option>
                                        <option value="0">Âm thanh</option>
                                        <option value="0">Máy tính bảng</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Đặc điểm nổi bật</label>
                                    <textarea className="form-control description" {...register("description")}></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Mô tả dài</label>
                                    <textarea className="form-control"></textarea>
                                </div>
                                <div className="form-group">
                                    <button className="add btn btn-primary">Cập nhật</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AdminProductUpdate

import { useForm } from 'react-hook-form'
import { IProducts, updateForm, updateSchema } from '../../models'
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from 'react-router-dom'
import { Create } from '../../api/product'

const AddProductPage = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<updateForm>({
        resolver: yupResolver(updateSchema)
    });

    const onSubmit = async (data: updateForm) => {
        try {
            const response = await Create(data)
            navigate("/admin")

        } catch (error) {
            console.log(error);

        }
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
            </div></>
    )
}
export default AddProductPage
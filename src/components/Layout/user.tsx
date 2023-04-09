// import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const UserLayout = () => {
    return <>
        {/* Header */}
        <header className="bg-red-500">
            <div className="logo-search">
                <div className="logo">
                    <img src="logo.png" width="65px" height="57px" alt="" />
                </div>
                <div className="search">
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="auth">
                <Link className='btn btn-outline-light' to="/signin">Đăng nhập</Link>
                <Link className='btn btn-outline-light' to="/signup">Đăng ký</Link>
            </div>
            <div className="banner">
                <img src="aaaa.png" width="95%" alt="" />
            </div>
        </header>
        {/* Content */}
        <Outlet />
        {/* Footer */}
        <footer>
            <div className="content">
                <div className="item item-content">
                    <h5>Tìm cửa hàng</h5>
                    <a href="">
                        <p>Tìm cửa hàng gần nhất</p>
                    </a>
                    <a href="">
                        <p>Mua hàng từ xa</p>
                    </a>
                    <a href="">
                        <p className="meet">Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)</p>
                    </a>
                    <h5>Phương thức thanh toán</h5>
                    <div className="total">
                        <a href=""><img src="Rectangle-1.png" alt="" /></a>
                        <a href=""><img src="Rectangle-2.png" alt="" /></a>
                        <a href=""><img src="Rectangle-3.png" alt="" /></a>
                        <a href=""><img src="Rectangle-4.png" alt="" /></a>
                        <a href=""><img src="Rectangle-5.png" alt="" /></a>
                    </div>
                </div>
                <div className="item item_item" >
                    <div className="item_1">
                        <p>Gọi mua hàng: 1800.2044 (8h00-22h00)</p>
                        <p>Gọi khiếu nại: 1800.2063(8h00-21h30)</p>
                        <p>Gọi bảo hành: 1800.2064(8h00-21h30)</p>
                    </div>
                    <div className="item_2">
                        <h5>Đối tác dịch vụ bảo hành</h5>
                        <p>Điện Thoại - Máy tính</p>
                        <h5>Trung tâm bảo hành uỷ quyền Apple</h5>
                        <img src="bbb.png" alt="" />
                    </div>
                </div>
                <div className="item">
                    <a href="">
                        <p>Mua hàng và thanh toán Online</p>
                    </a>
                    <a href="">
                        <p>Mua hàng trả góp Online</p>
                    </a>
                    <a href="">
                        <p>Tra thông tin đơn hàng</p>
                    </a>
                    <a href="">
                        <p>Tra điểm Smember</p>
                    </a>
                    <a href="">
                        <p>Tra thông tin bảo hành</p>
                    </a>
                    <a href="">
                        <p className='vat' >Tra cứu hoá đơn VAT điện tử</p>
                    </a>
                    <a href="">
                        <p>Trung tâm bảo hành chính hãng</p>
                    </a>
                    <a href="">
                        <p>Quy định về việc sao lưu dữ liệu</p>
                    </a>
                    <a href="">
                        <p className='service' >Dịch vụ bảo hành điện thoại</p>
                    </a>
                </div>
                <div className="item">
                    <a href="">
                        <p>Quy chế hoạt động</p>
                    </a>
                    <a href="">
                        <p>Chính sách Bảo hành</p>
                    </a>
                    <a href="">
                        <p>Liên hệ hợp tác kinh doanh</p>
                    </a>
                    <a href="">
                        <p>Khách hàng doanh nghiệp (B2B)</p>
                    </a>
                    <a href="">
                        <p className='endow' >Ưu đãi thanh toán</p>
                    </a>
                    <a href="">
                        <p>Tuyển dụng</p>
                    </a>
                </div>
            </div>
            <div className="main-system">
                <div>
                    <p className="system">Điện thoại iPhone 13-Điện thoại iPhone 12
                        -Điện thoại iPhone 11Điện thoại iPhone 13 Pro Max-Điện thoại
                        iPhone 11 Pro MaxiPhone cũ giá rẻ-iPhone 13 cũ-iPhone 12 cũ-iPhone 11 cũ</p>
                </div>
                <div>
                    <p className="system">Điện thoại iPhone-Điện thoại Samsung-Điện
                        thoại Samsung AĐiện thoại OPPO-Điện thoại Xiaomi-Điện thoại
                        Vivo-Điện thoại NokiaSamsung Fold 3-Samsung S22-Samsung A73-Samsung A53</p>
                </div>
                <div>
                    <p className="system">Laptop-Laptop HP-Laptop Dell-Laptop
                        AcerMicrosoft Surface-Laptop Lenovo-Laptop AsusMáy
                        tính để bàn-Màn hình máy tính-Camera-Camera hành trình</p>
                </div>
            </div>
            <div className="copyright">
                <span>Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC -
                    GPĐKKD: 03161 723 72 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020.
                    Địa chỉ: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam. Điện thoại:
                    028.7108.9666.</span>
            </div>
        </footer>



    </>
}

export default UserLayout
import { Outlet } from "react-router-dom"


const AdminLayout = () => {
    return (
        <>
            <header>
                <div className="admin-logo-search-name">
                    <div className="admin-logo">
                        <img src="logo.png" width="65px" height="57px" alt=""/><span>Dashbord</span>
                    </div>
                    <div className="admin-search">
                        <input type="text" placeholder="Search"/>
                    </div>
                    <div className="admin-name">
                        <p>Xin chào, Nguyễn Minh Qúy</p>
                    </div>
                </div>
            </header>
            <Outlet/>
        </>

    )
}

export default AdminLayout
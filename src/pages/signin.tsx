import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import {useNavigate} from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import { SinginForm, signinSchema } from '../models';
import { signin } from '../api/auth';
import { useLocalStorage } from '../hook';

const SigninPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<SinginForm>({
        resolver: yupResolver(signinSchema)
    });

    const navigate = useNavigate();

    const [user, setUser] = useLocalStorage("user", null)

    const onSubmit = async (data: SinginForm) => {
        try {
            const {data: {accessToken, user}} = await signin(data)
            setUser({
                accessToken,
                ...user
            })
            if(user.role){
                navigate('/admin')
            }else{
                navigate('/')
            }
            
        } catch (error) {
            console.log(error);
            
        }
    }
    return (
        <div className="container">
            <div className="form-logo">
                <div className="signup-logo">
                    <img src="/logo.png" alt="" />
                </div>
                <div className="form">
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input  className="form-control" {...register("email")} placeholder="Email" />
                            <p>
                                {/* {errors.email && errors.email.message} */}
                            </p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Mật khẩu</label>
                            <input type="password" {...register("password")}  className="form-control" placeholder="Mật khẩu" />
                            <p>
                                {/* {errors.email && errors.email.message} */}
                            </p>
                        </div>
                        <div className="d-grid gap-2 col-2 mx-auto my-2">
                            <button className="btn btn-danger">Đăng nhập</button>
                        </div>
                        <div className="orther">
                            <h3>Hoặc đăng nhập bằng</h3>
                            <a href=""><i className="fa-brands fa-facebook fa-2xl"></i></a>
                            <a href=""><i className="fa-brands fa-google fa-2xl"></i></a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SigninPage
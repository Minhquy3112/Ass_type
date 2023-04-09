import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import {useNavigate} from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import {  SignupForm, signupSchema } from '../models';
import { signup } from '../api/auth';

const SignupPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<SignupForm>({
        resolver: yupResolver(signupSchema)
    });

    const navigate = useNavigate();


    const onSubmit = async (data: SignupForm) => {
        try {
            const response = await signup(data)
            console.log(response);
            navigate("/signin")
            
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
                            <input {...register('email')} className="form-control" placeholder="Email" />
                            <p>
                                {errors.email && errors.email.message}
                            </p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Số điện thoại</label>
                            <input {...register('phone')} className="form-control" placeholder="Số điện thoại" />
                            <p>
                                {errors.email && errors.email.message}
                            </p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Mật khẩu</label>
                            <input type="password" {...register('password')} className="form-control" placeholder="Mật khẩu" />
                            <p>
                                {errors.email && errors.email.message}
                            </p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Xác nhận mật khẩu</label>
                            <input type="password" {...register('confirmPassword')} className="form-control" placeholder="Xác nhận mật khẩu" />
                            <p>
                                {errors.email && errors.email.message}
                            </p>
                        </div>
                        <div className="d-grid gap-2 col-2 mx-auto my-2">
                            <button className="btn btn-danger">Đăng ký</button>
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

export default SignupPage
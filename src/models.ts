import * as Yup from 'yup'
export interface IProducts {
    id: string,
    name: string,
    price: number,
    original_price: number,
    description: string,
    images: { base_url: string }[],
    brand: { id: number, name: string, slug: string },
    specifications: ISpecification[]
}

export interface ISpecification {
    name: string,
    attributes: { code: string, name: string, value: string }[]
}

export const updateSchema = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    price: Yup.number().required("Trường dữ liệu bắt buộc"),
    original_price: Yup.number().required("Trường dữ liệu bắt buộc"),
    description: Yup.string().required("Trường dữ liệu bắt buộc")
})

export type updateForm = Yup.InferType<typeof updateSchema>

export const signupSchema = Yup.object({
    email: Yup.string().email("Email sai định dạng").required("Trường dữ liệu bắt buộc"),
    phone: Yup.number().required("Trường dữ liệu bắt buộc"),
    password: Yup.string().min(6).required("Trường dữ liệu bắt buộc"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Mật khẩu không khớp")
})
export type SignupForm = Yup.InferType<typeof signupSchema>

export const signinSchema = Yup.object({
    email: Yup.string().email("Email sai định dạng").required("Trường dữ liệu bắt buộc"),
    password: Yup.string().min(6).required("Trường dữ liệu bắt buộc")
})
export type SinginForm = Yup.InferType< typeof signinSchema>
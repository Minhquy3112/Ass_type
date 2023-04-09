import instance from ".";
import { SignupForm, SinginForm } from "../models";
export const signup = (data: SignupForm) => {
    const uri = "/signup"
    return instance.post(uri, data)
}

export const signin = (data: SinginForm) => {
    const uri = "/signin"
    return instance.post(uri, data)
}
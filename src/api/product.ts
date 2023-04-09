import instance from ".";
import { IProducts, updateForm } from "../models";
export const getAll = () => {
    const uri = "/products"
    return instance.get(uri);
}
export const getById = (id: string) => {
    const uri = "/products/" + id
    return instance.get(uri)
}

export const update = (id: string, body: updateForm) => {
    const uri = "/products/" + id
    return instance.put(uri, body)
}

export const Delete = (id: string) => {
    const uri = "/products/" + id
    return instance.delete(uri)
}

export const Create = (data: updateForm) => {
    const uri = "/products/"
    return instance.post(uri, data)
}
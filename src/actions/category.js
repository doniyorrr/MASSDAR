import Axios from "../components/axios/axios"
import { GET_CATEGORY } from "./types"

export const getCategory = () => dispatch =>{
    Axios.get("/product/categories/")
    .then(res => {dispatch({
        type: GET_CATEGORY,
        payload: res.data
    })})
    .catch(err => console.log(err))
}



import { combineReducers } from "redux";
import leads from "./leads"
import products from "./products";
import category from "./category";

export default combineReducers({
    category,
    leads,
    products,
})




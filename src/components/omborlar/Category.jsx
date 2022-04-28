import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../../actions/category';

const Category = () => {

    const dispatch = useDispatch()
    const {category} = useSelector((state) => state.category)
    console.log(category);

    useEffect(()=>{
        dispatch(getCategory())
    } , [])

    return (
        <div>
            Category
        </div>
    );
}

export default Category;

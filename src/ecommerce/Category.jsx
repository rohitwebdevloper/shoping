import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Category = () => {
    // const [arr,setArr]= useState([])
    const navigate = useNavigate([])
    const [value, setValue] = useState([])
    useEffect(() => {
         axios.get("https://fakestoreapi.com/products/categories").then((res) => {
            setValue(res.data)
        })
    })  
    const getCategoryName= async (cName)=>{
        let res=    await axios.get(`https://fakestoreapi.com/products/category/${cName}`);
        localStorage.setItem('category_products', JSON.stringify(res.data))
        navigate("/category_products")
    }
    return (
        <>
            <div className='container'>
                <h2 className='flat text-center mt-4'>CATEGORIES</h2>
                <div className="line"></div>
                <div className="row">
                    {value.map((items, index) => {
                        return (
                            <div className='col-sm-4 text-center mt-5 '>
                                <div class="card  " >
                                    <div class="card-body ">
                                        <h4 class="card-title text-center"><a href='#' onClick={()=>{
                                            getCategoryName(items)
                                        }}>{items} </a></h4>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
           
        </>
    )
}
<script src="js/wow.min.js"></script>
export default Category

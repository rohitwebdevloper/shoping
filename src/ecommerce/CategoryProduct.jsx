import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addCardData } from './cart/cartSlice';
const CategoryProduct = () => {
    let msg = useSelector((state)=>state.addtocart.success)
    const [Pdata, setPData] = useState([]);
     const dispetch= useDispatch()
    useEffect(() => {
        let ProductData = localStorage.getItem('category_products');
        if (ProductData != null) {
            let arr = JSON.parse(ProductData)
            setPData(arr)
        }

    })
    const cartadded=(data)=>{
        dispetch(addCardData(data))
        console.log(data)
  
    //     if(msg == true){
    //         toast.success("success..", "Book succesfully Inserted");
    //     }
    //    else{
    //       toast.error("error", "error")
        
    //    }
        
       
    }
    return (
        <>
            <div className='container'>
                <ToastContainer/>
                <div className="row">
                    {Pdata.map((items, index) => {
                        return (
                            <div className='col-sm-4 mt-5'>
                                <div class="card  mb-4"  >
                                    <img src={items.image} alt="" className='img-fluid ' />
                                    <div class="card-body">
                                        <h4 class="card-title"> {items.category}</h4>
                                        <h6 class="card-title"> {items.description.slice(0,35)}</h6>
                                        <h5 class="card-title">Price:$ {items.price}</h5>
                                        <button href="#" class="btn btn-primary mr-2"><FaEye /></button>
                                        <button href="#" class="btn btn-success  " onClick={()=>cartadded(items) }><CgShoppingCart /></button>
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

export default CategoryProduct
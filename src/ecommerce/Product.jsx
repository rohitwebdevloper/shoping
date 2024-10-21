import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Shop from './Shop'
import Singalproduct from './Singalproduct'
import { useDispatch, useSelector } from 'react-redux'
import { addCardData } from './cart/cartSlice'
import { toast, ToastContainer } from 'react-toastify'
import { FaEye } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
const Product = () => {
    let msg =  useSelector((state)=>state.addtocart.success)
   const dispetch   = useDispatch()
       const [value, setValue] = useState([])
    axios.get("https://fakestoreapi.com/products").then((res) => {
        setValue(res.data)
    })
    const navigate = useNavigate()
    const view = (id) =>{
             navigate(`Singalproduct/${id}`)
    } 
    const AllProduct=()=>{
        navigate('/Shop')
    }
    const cartadded=(data)=>{
        dispetch(addCardData(data))
        // console.log(data)

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
                <h2 className='flat text-center mt-4'>PRODUCT</h2>
                <div className="line"></div>
                <div className="row">
                    {value.slice(0, 6).map((items, index) => {
                        return (
                            <div className='col-sm-4 mt-5'>
                                <div class="card  mb-4"  >
                                    <img src={items.image} alt="" className='img-fluid '/>
                                    <div class="card-body">
                                        <h4 class="card-title"> {items.category}</h4>
                                        <h6 class="card-title"> {items.description.slice(0, 35)}</h6>
                                        <h5 class="card-title">Price:$ {items.price}</h5>
                                        <button href="#" class="btn btn-primary mr-2" onClick={()=>view(items.id)}>{<FaEye />}</button>
                                        <button href="#" class="btn btn-success " onClick={()=>cartadded(items) }><CgShoppingCart /></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div> 
                <div className='text-center m-4'>
                <button className='btn btn-dark ' onClick={()=>AllProduct()}>ALL PRODUCT </button>

                </div>
                 </div>
        </>
    )
}

export default Product

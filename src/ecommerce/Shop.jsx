import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoCall } from "react-icons/io5";
import  image  from "./card img.jpg"
import { MdEmail } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
import { useDispatch, useSelector } from 'react-redux';
import { addCardData } from './cart/cartSlice';
import { toast, ToastContainer } from 'react-toastify';
 const Shop = () => {
  let msg = useSelector((state)=>state.addtocart.success)
  const [value, setValue] = useState([])
  const [data,setdata]=useState([])
  const dispetch= useDispatch()
  axios.get("https://fakestoreapi.com/products").then((res) => {
      setValue(res.data)
  })
  const navigate = useNavigate()
    const view = (id) =>{
             navigate(`/Singalproduct/${id}`)
    } 
   
    const cartadded=(data)=>{
      dispetch(addCardData(data))
      console.log(data)

    //   if(msg == true){
    //       toast.success("success..", "Book succesfully Inserted");
    //   }
    //  else{
    //     toast.error("error", "error")
      
    //  }
      
     
  }
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      setdata(res.data)
    })
  })
  const getCategoryName = async (cName) => {
    await axios.get(`https://fakestoreapi.com/products/category/${cName}`);
    navigate("/category_products")
  }
  return (
    <>
    <div className='container'>
      <ToastContainer/>
                <h2 className='flat text-center mt-4'>SHOP PRODUCT </h2>
                <div className="line"></div>
                <div className="row">
                    {value.map((items, index) => {
                        return (
                            <div className='col-sm-4 mt-5'>
                                <div class="card  mb-4">
                                    <img src={items.image} alt="" className='img-fluid'/>
                                    <div class="card-body">
                                        <h4 class="card-title"> {items.category}</h4>
                                        <h6 class="card-title"> {items.description.slice(0, 35)}</h6>
                                        <h5 class="card-title">Price:$ {items.price}</h5>
                                        <button href="#" class="btn btn-primary mr-2" onClick={()=>view(items.id)}><FaEye /></button>
                                        <button href="#" class="btn btn-success  " onClick={()=>cartadded(items) }><CgShoppingCart /></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                
            </div>
            <div className='footer bg-dark'>
        <div className="footer-logo  text-center m-4">
          E-COMMERCE
        </div>
        {/* <div className='line'></div> */}
        <div className='container'>
          <div className='row'>
            <div className='col-sm-3'>
              <ul>
                <h4>E-CCOMERCE</h4>
                <div className='line1'></div>
              <li> <img src={image} width={"200px"} height={"80px"}/></li>
              </ul>
            </div>
            <div className='col-sm-3'>
              <div className='container'>
                <ul>
                <h4 className='categorydata'>Category</h4>
                </ul>
                {data.map((items, index) => {
                  return (
                    <ul> 
                      <li><a href='#'  onClick={() => {
                        getCategoryName(items)
                      }}>{items} </a></li>
                    </ul>
                  )
                })}
              </div>
            </div>
            <div className='col-sm-3'>
              <ul>
                <h4>ABOUT PAGE</h4>
               <li><a href=''>Home</a></li>
               <li><Link to="/shop">Shop</Link></li>
               <li><Link to="/cart">Cart</Link></li>
              </ul>
            </div>
            <div className='col-sm-3'>
              <ul>
                <h4>CONTECT PAGE</h4>
                <li><a href=''><IoCall /> 91 + 8718822313</a></li>
                <li><a href=''><MdEmail/> rd947071@gmail.com</a></li>
                <li><a href=''></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
            
  )
}

export default Shop

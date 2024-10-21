import React, { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { IoCall } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import  image  from "./card img.jpg"
import { CgShoppingCart } from "react-icons/cg";

export const Singalproduct = () => {
  
  const [productdata, setproductdata] = useState({})
  const [value,setvalue]= useState([])
  const data1 = useParams();
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${data1.pid}`).then((res) => {
      setproductdata(res.data)
    })
  }) 
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      setvalue(res.data)
    })
  })
  const getCategoryName = async (cName) => {
    await axios.get(`https://fakestoreapi.com/products/category/${cName}`);
    Navigate("/category_products")
  }
  return (
    <>
      <div className='container'>

        <div className="row mt-4 ">
          <div class="col-sm-4"  >
            <img src={productdata.image} alt="" className='img-fluid ' />
          </div>
          <div className='col-sm-8 mt-5'>
            <h4 class="card-title"> {productdata.category}</h4>
            <h6 class="card-title"> {productdata.description}</h6>
            <h5 class="card-title">Price:$ {productdata.price}</h5>
            <button href="#" class="btn btn-success  "><CgShoppingCart /></button>
          </div>
        </div>


      </div>
      <div className='footer bg-dark mt-2'>
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
             
                {value.map((items, index) => {
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
                <li><a href=''><IoCall/> 91 + 8718822313</a></li>
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

export default Singalproduct

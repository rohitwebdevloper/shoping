import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useParams } from 'react-router-dom';
import { deletdata } from './cart/cartSlice';
import { IoCall } from "react-icons/io5";
import image from "./card img.jpg"
import { MdEmail } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsFillTrash3Fill } from "react-icons/bs";
export const Cart = () => {
  const [value,setValue]=useState([])
  const dispetch = useDispatch()
  const [sum, setsum] = useState(0)
  const Removedata = (id) => {
    dispetch(deletdata(id))
    toast.error("Deleted..", "data succesfully Deleted");
  }
  
  useEffect(() => {
    let sumdata = sel.reduce((current_value, next_value) => {
      return current_value + next_value.price
    }, 0)
    setsum(sumdata)
  })
  let sel = useSelector((state) => state.addtocart.cartArr)
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      setValue(res.data)
    })
  })
  const getCategoryName = async (cName) => {
    await axios.get(`https://fakestoreapi.com/products/category/${cName}`);
    Navigate("/category_products")
  }
  return (
    <>
      <div className='container '>
      <ToastContainer/>
      <div className='table-responsive'>
        <table className='table mt-4'>

          <thead>
            <th>image</th>
            <th>tittel</th>
            <th>price</th>
            <th>Action</th>
            </thead>
          <tbody >
            {sel.map((items, index) => {
              return (
                <tr key={index} >
                  <img src={items.image} alt='' width={"80px"} height={"80px"}  className='cartimg'/>
                  <td>{items.title}</td>
                  <td>{items.price}</td>
                  <td><button className='btn btn-danger' onClick={() => Removedata(index)}><BsFillTrash3Fill /></button></td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>
                <strong >Total: </strong>
                <span >{sum}</span>
              </td>
            </tr>
          </tfoot>
        
        </table>
        </div>

      </div>
      <div className='footer bg-dark '>
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
                <li> <img src={image} width={"200px"} height={"80px"} /></li>
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
                <li><a href=''><IoCall /> 91 + 8718822313</a></li>
                <li><a href=''><MdEmail /> rd947071@gmail.com</a></li>
                <li><a href=''></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div></>
  )
}

export default Cart

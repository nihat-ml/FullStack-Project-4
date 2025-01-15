import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CiCircleInfo } from "react-icons/ci";
import { MdOutlineCancel, MdFavorite } from "react-icons/md";
import Swal from 'sweetalert2'

function Products() {
  const [products, setProducts] = useState([]);
  function handleDelete(_id){
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        axios.delete(`http://localhost:3005/products/${_id}`)
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          setProducts(products.filter(product => product._id !== _id))
        }
      });
    
  }  
  
  function getProducts() {
    axios.get("http://localhost:3005/products")
      .then((res) => {
        setProducts(res.data); 
      })
     
  }

 
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="ourProducts">
        <h2>Our Products</h2>
        <div className="cards">
          {products.map((product) => (
            <div className="card" key={product._id}>
              <MdOutlineCancel onClick={()=>handleDelete(product._id)} className="cancelIcon" title="Remove" />
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
              <span>${product.price}</span>
              <div className="icons">
                <CiCircleInfo className="infoIcon" title="Details" />
                <MdFavorite className="favoriteIcon" title="Add to Favorites" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewProducts = () => {
    const [productData,setProductData]=useState(
        []
    )

    const apiLink="https://dummyjson.com/products"

    const [isLoading,setIsLoading]=useState(true)

    const getData=()=>{
    axios.get(apiLink).then(
        (Response)=>{
            setProductData(Response.data.products)
            setIsLoading(false)
        }
    )}

    useEffect(()=>{getData()},[])
  return (
    <div>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h1>View Products</h1>
                        </div>
                        {isLoading ? <div class="spinner-border text-info" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div> : <div className="row g-3">

                            {productData.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col lg-4 col-xl-4 col-xxl-4 d-flex align-items-stretch">
                                        <div className="card">
                                            <img height="300px" src={value.thumbnail} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{value.title}</h5>
                                                <p className="card-text">Brand: {value.brand}</p>
                                                <p className="card-text">Description: {value.description}</p>
                                                <p className="card-text">Rating: {value.rating}</p>
                                                <p className="card-text">Discount: {value.discountPercentage} %</p>
                                                <p className="card-text">Stock: {value.stock}</p>
                                                <p className="card-text">Price: {value.price}</p>
                                                <a href="#" className="btn btn-primary">Buy Now</a>
                                            </div>
                                        </div>
                                    </div>
                                }
                            )}
                        </div>}
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ViewProducts
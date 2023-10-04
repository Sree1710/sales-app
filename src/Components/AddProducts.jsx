import React, { useState } from 'react'
import Header from './Header'

const AddProducts = () => {
    const [inputField,setInputField]=useState(
        {id:"",title:"",description:"",price:"",discountPercentage:"",rating:"",stock:"",brand:"",category:"",thumbnail:""}
    )

    const inputHandler=(event)=>{
        setInputField({...inputField,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputField)
    }
  return (
    <div>
        <Header/>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h1>Add Product</h1>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Product ID</label>
                                <input onChange={inputHandler} type="text" className="form-control" name="id" value={inputField.id}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Title</label>
                                <input onChange={inputHandler} type="text" className="form-control" name="title" value={inputField.title}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Description</label>
                                <textarea onChange={inputHandler} name="description" id="" cols="30" rows="10" className="form-control" value={inputField.description}></textarea>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Brand</label>
                                <input onChange={inputHandler} type="text" className="form-control" name="brand" value={inputField.brand}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Category</label>
                                <input onChange={inputHandler} type="text" className="form-control" name="category" value={inputField.category}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Discount</label>
                                <input onChange={inputHandler} type="text" className="form-control" name="discountPercentage" value={inputField.discountPercentage}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Rating</label>
                                <input onChange={inputHandler} type="text" className="form-control" name="rating" value={inputField.rating}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Price</label>
                                <input onChange={inputHandler} type="text" className="form-control" name="price" value={inputField.price}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Stock</label>
                                <input onChange={inputHandler} type="text" className="form-control" name="stock" value={inputField.stock}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Image Link</label>
                                <input onChange={inputHandler} type="text" className="form-control" name="thumbnail" value={inputField.thumbnail}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button onClick={readValue} className="btn btn-primary">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default AddProducts
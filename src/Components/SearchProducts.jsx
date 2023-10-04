import React, { useState } from 'react'
import Header from './Header'

const SearchProducts = () => {
    const [inputField,setInputField]=useState(
        {id:"",title:""} 
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
                            <h1>Search Product</h1>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Product ID</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="id" value={inputField.id}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Title</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="title" value={inputField.title}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-warning">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchProducts
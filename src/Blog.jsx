import React from 'react'

export const Blog = (props) => {
  console.log( props.postsList)
  return (
    <div className='row'>
    { props.postsList.map((item, index)=>(
     <div className='col-md-3' key={index}>
           <div className="card ml-2" style={{ width:'18rem'}}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <a href="#" className="btn btn-primary">Details</a>
        </div>
        </div>
     </div>
    ))
   }
 </div>
 
  )
}

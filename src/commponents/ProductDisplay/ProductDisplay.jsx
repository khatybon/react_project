import React, { useContext } from 'react'
import './ProductDisplay.css'
import { StoreContext } from '../../context/StoreContext.jsx'

const ProductDisplay = ({category}) => {
    const{product_list} = useContext(StoreContext)
  return (
    <div className='product__display' id='product_display'>
        <h2>top product </h2>
        <div className='product-displat-list'>
            {product_list.map((item,index)=>{
                return <ProductItem key={index} id={item.id} name={item.name} description={item.description}price={item.price} image={item.image}/>
            })}

        </div>
    </div>
  )
}

export default ProductDisplay
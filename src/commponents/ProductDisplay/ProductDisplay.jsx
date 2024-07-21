import React, { useContext } from 'react';
import './ProductDisplay.css';
import { StoreContext } from '../../context/StoreContext.jsx';
import ProductItem from '../ProductItem/ProductItem.jsx';
const ProductDisplay = ({ category }) => {
    const { product_list } = useContext(StoreContext);

    if (!product_list) {
        return <div>Loading...</div>;
    }
    console.log("productList from product display = ",product_list);

    return (
        <div className='product-display' id='product-display'>
            <h2>Top Products</h2>
            <div className='product-display-list'>
                {product_list.map((item, index) => {
                    if (category==="All"|| category===item.category) {
                      return <ProductItem
                        key={index}
                        id={item._id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        image={item.image}/>  
                    }
                    
                    })}
            </div>
        </div>
    );
};

export default ProductDisplay;

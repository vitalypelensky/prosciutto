import React from 'react'
import Styles from './styles.module.css'
import './style-product-carousel.css'

const Product = ({slide}) => {
    const {wrapper, product, productName, productDescription, productImage} = Styles

    const {name, description, image} = slide


    return (
        <div className={wrapper}>
            <div className={product}>
                <p className={productName}>{name}</p>
                <p className={productDescription}>{description}</p>
            </div>
            <div className={productImage} style={{backgroundImage: `url(${image})`}}/>
        </div>
    )
}

export default Product

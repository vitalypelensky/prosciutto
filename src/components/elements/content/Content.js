import React from 'react'
import Styles from './styles.module.css'
import Baner from "./sections/baner/Baner";
import Products from "./sections/products/Products";
import Services from "./sections/services/Services";
import Assortments from "./sections/assortment/Assortments";
import CallbackForm from "./sections/callback-form/CallbackForm";
import AboutUs from "./sections/about-us/AboutUs"


 const Content = ({onScrollToElement}) => {
    const {wrapper} = Styles

    return (
        <div className={wrapper}>
            <Baner onScrollToElement={onScrollToElement}/>
            <Services/>
            <Products/>
            <Assortments/>
            <CallbackForm/>
            <AboutUs/>
        </div>
    )
 }

 export default Content

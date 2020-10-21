import React from 'react'
import Styles from './styles.module.css'

 const Service = ({image, title, description}) => {
    const {wrapper, serviceImage, serviceContent, serviceTitle, serviceDescription} = Styles

    return (
        <div className={wrapper}>
            <div className={serviceImage}><img src={image} alt={title}/></div>
            <div className={serviceContent}>
                <div className={serviceTitle}>{title}</div>
                <div className={serviceDescription}>{description}</div>
            </div>
        </div>
    )
 }

 export default Service

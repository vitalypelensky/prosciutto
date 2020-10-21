import React from 'react'
import Styles from './styles.module.css'
import classNames from 'classnames'
import Carousel from 'react-elastic-carousel'
import Product from "./product/Product";
import Title from "../../../title/Title";
import {useTranslation} from "react-i18next";
import prosciutto1 from "../../../../../static/images/Prosciutto2.jpeg";


const Types = () => {
    const {wrapper} = Styles


    const { t } = useTranslation();

    const products = [
        {
            id: 1,
            image: prosciutto1,
            name: t('products.product1.name'),
            description: t('products.product1.description'),
        },
        {
            id: 2,
            image: prosciutto1,
            name: t('products.product2.name'),
            description: t('products.product2.description'),
        },
        {
            id: 3,
            image: prosciutto1,
            name: t('products.product3.name'),
            description: t('products.product3.description'),
        }
    ]

    return (
        <section id="product" className={classNames(wrapper, 'container', 'section-padding')}>
            <Title title={t('titles.product.title')} description={t('titles.product.description')}/>
            <Carousel itemsToShow={1} pagination={false}>
                {products.map(slide => <Product slide={slide} key={slide.id}/>)}
            </Carousel>
        </section>
    )
}

export default Types

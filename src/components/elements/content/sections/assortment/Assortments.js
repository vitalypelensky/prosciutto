import React from 'react'
import Styles from './styles.module.css'
import classNames from 'classnames'
import Title from "../../../title/Title";
import Item from "./item/Item";
import {useTranslation} from "react-i18next";
import two from "../../../../../static/images/two.png";
import first from "../../../../../static/images/first.png";
import three from "../../../../../static/images/three.png";

const Assortments = () => {
    const {wrapper, content} = Styles

    const { t } = useTranslation();

    const assortments = [
        {
            image: two,
            title: t('assortments.assortment1.title'),
            description: t('assortments.assortment1.description')
        },
        {
            image: first,
            title: t('assortments.assortment2.title'),
            description: t('assortments.assortment2.description')
        },
        {
            image: three,
            title: t('assortments.assortment3.title'),
            description: t('assortments.assortment3.description')
        },
    ]

     return (
        <section id="services" className={classNames(wrapper, 'container', 'section-padding')}>
            <Title title={t('titles.services.title')} description={t('titles.services.description')}/>
            <div className={content}>
                { assortments.map((service, index) => <Item number={index+1}
                                                         image={service.image}
                                                         title={service.title}
                                                         description={service.description}
                                                         key={index}/>) }
            </div>
        </section>
    )
 }

 export default Assortments

import React from 'react'
import Styles from './styles.module.css'
import classNames from 'classnames'
import Title from "../../../title/Title";
import Service from "./service/Service";
import {useTranslation} from "react-i18next";
import Delivery from "../../../../../static/images/delivery-truck.png";
import Freshness from "../../../../../static/images/ham.png";
import Quality from "../../../../../static/images/quality.png";
import Reliability from "../../../../../static/images/document.png";

 const Services = () => {
     const {wrapper, content} = Styles


     const { t } = useTranslation();

     const services = [
         {
             image: Delivery,
             title: t('services.service1.title'),
             description: t('services.service1.description')
         },
         {
             image: Freshness,
             title: t('services.service2.title'),
             description: t('services.service2.description')
         },
         {
             image: Quality,
             title: t('services.service3.title'),
             description: t('services.service3.description')
         },
         {
             image: Reliability,
             title: t('services.service4.title'),
             description: t('services.service4.description')
         },
     ]

    return (
        <section id="why_we" className={classNames(wrapper, 'container', 'section-padding')}>
            <Title title={t('titles.services.title')} description={t('titles.services.description')}/>
            <div className={content}>
                { services.map((service, index) => <Service number={index+1}
                                                                      image={service.image}
                                                                      title={service.title}
                                                                      description={service.description}
                                                                      key={index}/>) }
            </div>
        </section>
    )
 }

 export default Services

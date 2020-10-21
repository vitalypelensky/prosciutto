import React from 'react'
import Styles from './styles.module.css'
import classNames from 'classnames'
import Title from "../../../title/Title";
import Achievement from "./achievement/Achievement";
import {useTranslation} from "react-i18next";

const AboutUs = () => {
    const {wrapper, achievementsWrapper} = Styles

    const { t } = useTranslation();

    const data = {
        firstWord: t('aboutUs.firstWord'),
        description: t('aboutUs.description'),
        achievements: [
            {
                value: 1000,
                title: t('aboutUs.achievements.title1')
            },
            {
                value: '5000',
                title: t('aboutUs.achievements.title2')
            },
            {
                value: 50,
                title: t('aboutUs.achievements.title3')
            },
        ]
    }

    return (
        <section id="about_us" className={classNames('container', 'section-padding')}>
            <Title title={t('titles.aboutUs.title')} description={t('titles.aboutUs.description')}/>
            <div className={wrapper}>
               <span>{data.firstWord}</span>{data.description}
           </div>
           <div className={achievementsWrapper}>
               {
                   data.achievements.map((achievement, index) => <Achievement value={achievement.value}
                                                                                   title={achievement.title}
                                                                                   key={index}
                   />)
               }
           </div>
        </section>
    )
}

export default AboutUs

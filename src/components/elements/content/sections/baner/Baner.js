import React from 'react'
import Styles from './styles.module.css'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next';

 const Baner = ({onScrollToElement}) => {
    const {wrapper, content} = Styles

    const { t } = useTranslation();

    const doOrder = () => {
        onScrollToElement('callback')
    }

    return (
        <section className={classNames(wrapper, 'container')}>
            <div className={content}>
                <h1>{t('baner.title')}</h1>
                <p>{t('baner.description')}</p>
                <button onClick={doOrder}>{t('baner.buttonName')}</button>
            </div>
        </section>
    )
 }

 export default Baner

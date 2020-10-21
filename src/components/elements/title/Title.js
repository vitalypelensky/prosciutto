import React from 'react'
import Styles from './styles.module.css'

const Title = ({title, description}) => {
    const {wrapper, sectionTitle, sectionDescription} = Styles

    return (
        <div className={wrapper}>
            <p className={sectionTitle}>{title}</p>
            <p className={sectionDescription}>{description}</p>
            <hr/>
        </div>
    )
}

export default Title

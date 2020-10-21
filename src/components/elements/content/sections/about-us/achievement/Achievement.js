import React from 'react'
import Styles from './styles.module.css'

const Achievement = ({value, title}) => {
    const {wrapper, achievementValue, achievementTitle} = Styles

    return (
        <div className={wrapper}>
            <div className={achievementValue}>{value}</div>
            <div className={achievementTitle}>{title}</div>
        </div>
    )
}

export default Achievement

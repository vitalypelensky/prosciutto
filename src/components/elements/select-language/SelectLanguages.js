import React from 'react'
import Styles from './styles.module.css'
import i18n from 'i18next'

const SelectLanguages = ({selectedLanguages}) => {
    const {wrapper, active} = Styles

    const activeLanguage = i18n.language

    const lngArray = [
        {id: 'uk', name:'Укр'},
        {id: 'ru', name:'Рус'},
    ]

    const changeLanguageHandler = (lng) => {
        i18n.changeLanguage(lng)
        selectedLanguages()
    }

    return(
        <div className={wrapper}>
            {lngArray.map(lng=> <div key={lng.id}
                                               onClick={() => {changeLanguageHandler(lng.id)}}
                                               className={activeLanguage === lng.id ? active : null }>
                                                 {lng.name}
                                          </div>)}
        </div>
    )
}

SelectLanguages.defaultProps = {
    selectedLanguages: ()=>{}
}

export default SelectLanguages

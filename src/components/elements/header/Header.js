import React, {useState} from 'react'
import Styles from './styles.module.css'
import classNames from 'classnames'
import logo from '../../../static/images/pork-leg.png'
import SelectLanguages from "../select-language/SelectLanguages";
import {useTranslation} from "react-i18next";
import {ReactSVG} from "react-svg";
import menu from "../../../static/images/menu.svg";
import close from "../../../static/images/close.svg";

const Header = ({scrollValue, onScrollToElement}) => {
    const {wrapper, fixed, desktop, mobile, icon, mobileMenu, iconWrapper} = Styles

    const { t } = useTranslation();

    const menuItems = [
        {
            id: 'why_we',
            name: t('menu.whyWe'),
        },
        {
            id: 'product',
            name: t('menu.product'),
        },
        {
            id: 'services',
            name: t('menu.services'),
        },
        {
            id: 'callback',
            name: t('menu.callback'),
        },
        {
            id: 'about_us',
            name: t('menu.aboutUs'),
        },
        {
            id: 'contacts',
            name: t('menu.contacts'),
        }
    ]


    let isStaticHeader =  scrollValue > 0

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu)
    }

    const clickHandler = (item, isMobile) => {
        onScrollToElement(item.id)
        if(!isMobile){return}
        toggleMobileMenu()
    }

    return (
        <div className={classNames(wrapper, 'container', {[fixed]: isStaticHeader})}>
            <a href="/"><img src={logo} alt={'Logo'}/></a>
            <div className={desktop}>
                <nav>
                    {
                        menuItems.map(item => <li onClick={()=>{clickHandler(item, false)}} key={item.id}>{item.name}</li>)
                    }
                </nav>
                <SelectLanguages />
            </div>
            <div className={mobile}>
                {
                    showMobileMenu ?
                        <div className={mobileMenu}>
                            <div className={iconWrapper}>
                                <ReactSVG src={close}
                                          className={icon}
                                          onClick={toggleMobileMenu}/>
                            </div>
                            <nav>
                                {
                                    menuItems.map(item => <li onClick={() => {
                                        clickHandler(item, true)
                                    }} key={item.id}>{item.name}</li>)
                                 }
                            </nav>
                            <SelectLanguages selectedLanguages={toggleMobileMenu}/>
                        </div>
                        :
                        <ReactSVG src={menu}
                                  className={icon}
                                  onClick={toggleMobileMenu}/>

                }
            </div>
        </div>
    )
 }

 export default Header

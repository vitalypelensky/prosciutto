import React from 'react'
import Styles from './styles.module.css'
import classNames from 'classnames'
import logo from '../../../static/images/pork-leg.png'
import phone from '../../../static/images/phone-call.svg'
import email from '../../../static/images/email.svg'
import facebook from '../../../static/images/facebook.svg'
import instagram from '../../../static/images/instagram.svg'
import olx from '../../../static/images/olx.svg'
import { ReactSVG } from 'react-svg'


 const Footer = ({contacts}) => {
    const {wrapper, image, topFooter, itemContact, network, icon} = Styles

    return (
        <div id="contacts" className={classNames(wrapper, 'container', 'section-padding')}>
            <div className={topFooter}>
                <div className={itemContact}>
                    <ReactSVG src={phone} className={icon}/>
                    <a href={`tel:${contacts.phone}`}>{contacts.phone}</a>
                </div>
                <div className={image}>
                    <img src={logo} alt=""/>
                </div>
                <div className={itemContact}>
                    <ReactSVG src={email} className={icon}/>
                    <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
                </div>
            </div>
            <div className={network}>
                <a target="_blank" rel="noopener noreferrer" href={contacts.network.facebook}>
                    <ReactSVG src={facebook} className={icon}/>
                </a>
                <a target="_blank" rel="noopener noreferrer" href={contacts.network.instagram}>
                    <ReactSVG src={olx} className={icon}/>
                </a>
                <a target="_blank" rel="noopener noreferrer" href={contacts.network.olx}>
                    <ReactSVG src={instagram} className={icon}/>
                </a>
            </div>
        </div>
    )
 }

 export default Footer

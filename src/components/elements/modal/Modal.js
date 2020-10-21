import React from 'react'
import { createPortal } from "react-dom";
import Styles from './styles.module.css'
import {ReactSVG} from "react-svg";
import close from "../../../static/images/close.svg";


const Modal = ({showModal, toggleModal, title = '', description = ''}) => {
    const {wrapper, content, iconWrapper, icon, titleModal, descriptionModal} = Styles

    let ModalElement =  ( <div className={wrapper}>
                            <div className={content}>
                                <div className={iconWrapper}>
                                    <ReactSVG src={close}
                                              className={icon}
                                              onClick={()=>{toggleModal(false)}}/>
                                </div>
                                { title &&
                                <div className={titleModal}>
                                    {title}
                                </div>
                                }
                                { description &&
                                <div className={descriptionModal}>
                                    {description}
                                </div>
                                }
                            </div>
                        </div> )

    return showModal && createPortal(ModalElement, document.body)
}

export default Modal

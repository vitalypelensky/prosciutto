import React, {useRef} from 'react'
import { CSSTransition } from 'react-transition-group';
import Styles from './styles.module.css'
import preloader from '../../../static/images/pork-leg.png'

const Preloader = ({show}) => {
    const {wrapper, icon} = Styles
    const childRef = useRef(null)

    return (
        <CSSTransition in={show}
                       timeout={1000}
                       classNames="fade"
                       nodeRef={childRef}
                       unmountOnExit>
            <div className={wrapper} ref={childRef}>
                <img className={icon} src={preloader} alt="preloader"/>
            </div>
        </CSSTransition>
    )
}

export default Preloader

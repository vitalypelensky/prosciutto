import React from 'react'
import Styles from './styles.module.css'
import {ReactSVG} from "react-svg";
import classNames from 'classnames'
import exit from "../../../static/images/exit.svg";
import { auth } from '../../../model/firebase';
import {useHistory} from 'react-router-dom'

const AdminHeader = ({}) => {
    const {wrapper, icon} = Styles
    let history = useHistory();

    const exitFromAdmin = async () => {
      try {
          await auth.signOut()
          history.push("/admin")
      } catch (error) {
          console.log(error)
      }
    }

    return (
        <div className={classNames(wrapper, 'container')}>
            <p>Контакти</p>
            <ReactSVG src={exit}
                      className={icon}
                      onClick={exitFromAdmin}/>
        </div>
    )
 }

 export default AdminHeader

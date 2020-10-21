import React, {useState, useContext} from 'react'
import Styles from './styles.module.css'
import classNames from 'classnames'
import Modal from "../../../elements/modal/Modal";
import { auth } from '../../../../model/firebase';
import {useHistory} from 'react-router-dom'
import AuthContext from '../../../../context/AuthContext'

const Login = () => {
    const {wrapper, content} = Styles
    let history = useHistory();
    const { setUserAuthValue }  = useContext(AuthContext)

    const [userData, setUserData] = useState({
        login: '',
        password: '',
    })

    const [showModal, setShowModal] = useState(false)
    const [errorData, setErrorData] = useState({
        title: '',
        description: ''
    })

    const toggleModal = (value) => {
        setShowModal(value)
    }

    const inputHandler = (e) => {
        const nameProperty = e.target.name
        let value = e.target.value
        setUserData({...userData, [nameProperty]: value})
    }

    const successLogIn = () => {
        setUserAuthValue(true)
        history.push("/admin")
    }

    const errorLogIn = (error) => {
        setErrorData({
            title: 'Помилка',
            description: error.message
        })
        toggleModal(true)
    }

    const logInByEmail = (userData) => {
        let {login, password} = userData
        auth.signInWithEmailAndPassword(login, password)
            .then((res)=>{
                successLogIn()
            })
            .catch(error=>{
                errorLogIn(error)
            })
    }


    const submitHandler = (event) => {
        event.preventDefault()
        logInByEmail(userData)
    }


    return (
        <section className={classNames(wrapper, 'container', 'section-padding')}>
            <div className={content}>
                <form onSubmit={submitHandler}>
                    <div>
                        <input value={userData.login} required name="login" onChange={inputHandler} type="text" placeholder="Логін"/>
                    </div>
                    <div>
                        <input value={userData.password} required name="password" onChange={inputHandler} type="password" placeholder="Пароль" />
                    </div>
                    <button type="submit">Увійти</button>
                </form>
            </div>
            <Modal showModal={showModal}
                   toggleModal={toggleModal}
                   title={errorData.title}
                   description={errorData.description}/>
        </section>
    )
}

export default Login

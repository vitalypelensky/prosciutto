import React, {useState} from 'react'
import Styles from './styles.module.css'
import classNames from 'classnames'
import Title from "../../../title/Title";
import { useTranslation } from 'react-i18next';
import Modal from "../../../modal/Modal";
import { db } from '../../../../../model/firebase';
import buttonPreloader from '../../../../../static/images/preloaderCircle.png'

const CallbackForm = () => {
    const {wrapper, icon} = Styles

    const { t } = useTranslation();

    const [messageData, setMessageData] = useState({
        name: '',
        phone: '',
        description: ''
    })

    const [showModal, setShowModal] = useState(false)
    const [modalData, setModalData] = useState({
        title: '',
        description: ''
    })

    const [sending, setSendingValue] = useState(false)


    const toggleModal = (value) => {
        setShowModal(value)
    }


    const clearForm = () => {
        setMessageData({
            name: '',
            phone: '',
            description: ''})
    }

    const inputHandler = (e) => {
        const nameProperty = e.target.name
        let value = e.target.value
        if(nameProperty === 'phone'){
            value = value.replace (/[A-Za-zА-Яа-яЁё]/,'')
        }
        setMessageData({...messageData, [nameProperty]: value})
    }

    const showModalWithData = (title, description) => {
        setModalData({
            title: title,
            description: description
        })
        toggleModal(true)
    }

    const addDataUser = async (dataUser) => {
         setSendingValue(true)
         let data = Date.now().toString()
         let user = {...dataUser, finished:false, data: data}
         try {
             await db.collection("contacts").doc(data).set(user)
             showModalWithData(t('callback.modalAccessTitle'), t('callback.modalAccessDescription'))
             clearForm()
         } catch (error) {
             console.log(error)
             showModalWithData(t('callback.modalErrorTitle'), t('callback.modalErrorDescription'))
         } finally {
             setSendingValue(false)
         }
    }

    const submitHandler = (event) => {
        event.preventDefault()
        addDataUser(messageData)
    }


    return (
        <section id="callback" className={classNames('container', 'section-padding')}>
            <Title title={t('titles.callback.title')} description={t('titles.callback.description')}/>
            <div className={wrapper}>
                <form onSubmit={submitHandler}>
                    <div>
                        <input value={messageData.name} required name="name" onChange={inputHandler} type="text" placeholder={t('callback.namePlaceholder')}/>
                    </div>
                    <div>
                        <input value={messageData.phone} required name="phone" onChange={inputHandler} type="tel" maxLength="21" placeholder={t('callback.phonePlaceholder')} />
                    </div>
                    <div>
                        <textarea value={messageData.description} name="description" onChange={inputHandler} rows="5" placeholder={t('callback.messagePlaceholder')}/>
                    </div>
                    <button type="submit" disabled={sending}>
                        { sending
                            ?
                            <img className={icon} src={buttonPreloader} alt="Preloader"/>
                            :
                                t('callback.buttonName')
                        }
                    </button>
                </form>
            </div>
            <Modal showModal={showModal}
                   toggleModal={toggleModal}
                   title={modalData.title}
                   description={modalData.description}/>
        </section>
    )
}

export default CallbackForm

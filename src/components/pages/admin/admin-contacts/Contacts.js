import React, {useState, useEffect} from 'react'
import Styles from './styles.module.css'
import classNames from 'classnames'
import Modal from "../../../elements/modal/Modal";
import { db } from '../../../../model/firebase';
import AdminHeader from "../../../elements/admin-header/AdminHeader";
import Contact from './contact/Contact'
import preloaderSmall from '../../../../static/images/preloaderSmall.gif'

const Contacts = () => {
    const {wrapper, content, emptyContacts, icon} = Styles

    const [contacts, setContacts] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [preloader, setPreloader] = useState(true)
    const [modalData, setModalData] = useState({
        title: '',
        description: ''
    })

    const toggleModal = (value) => {
        setShowModal(value)
    }

    const setContactsData = (dataContacts) => {
        if(dataContacts.empty){return}
        let contactsList = []
        dataContacts.forEach((doc) => {
            let contact = {id:doc.id, ...doc.data()}
            contactsList = [...contactsList,contact]
        });
        setContacts(contactsList)
    }

    const getContacts = async () => {
        try {
            let querySnapshot =  await db.collection('contacts')
                .orderBy("data", "desc")
                .get()
            setContactsData(querySnapshot)
        } catch (error) {
            console.log(error)
            setModalData({
                title: 'Помилка',
                description: 'Перезагрузи строрінку'
            })
        } finally {
            setPreloader(false)
        }
    }

    useEffect(()=>{
        getContacts()
    },[])


    return (
        <div className={wrapper}>
            <AdminHeader/>
            { preloader
                ?
                    <div className={icon} >
                        <img src={preloaderSmall} alt="preloader"/>
                    </div>
                :
                    <div className={classNames(content, 'container')}>
                            {!!contacts.length ?
                                     contacts.map(contact => <Contact contact={contact} key={contact.id}/>)
                                :
                                <p className={emptyContacts}>Не має контактів, але скоро обовязково буде.</p>
                            }
                        </div>
            }
            <Modal showModal={showModal}
                   toggleModal={toggleModal}
                   title={modalData.title}
                   description={modalData.description}/>
        </div>
    )
}

export default Contacts

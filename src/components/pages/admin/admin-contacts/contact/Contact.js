import React, {useState} from 'react'
import Styles from './styles.module.css'
import { db } from '../../../../../model/firebase';

const Contact = ({contact}) => {
    const {wrapper, title, finishedStyle, dataStyle, nameStyle, phoneStyle, descriptionStyle} = Styles

    const {id, name, phone, description, finished, data} = contact

    const [status, setStatus] = useState(finished)
    const [disabled, setDisabled] = useState(false)

    let dataToLocale = new Date(+data).toLocaleString('uk-Uk')

    const changeStatusContact = () => {
        let newStatus = !status
        setDisabled(true)
        db.collection('contacts')
            .doc(id)
            .update({finished: newStatus})
            .then(()=>{
                setStatus(newStatus)
            })
            .catch((error) => {
                console.log(error)
             })
            .finally(()=>{
                setDisabled(false)
            })
    }

    return (
        <div className={wrapper}>
            <div className={finishedStyle}>
                <input type="checkbox" checked={status} onChange={changeStatusContact} disabled={disabled}/>
            </div>
            <div>
                <div className={dataStyle}>
                    <p className={title}>Дата</p>
                    <p>{dataToLocale}</p>
                </div>
                <div className={nameStyle}>
                    <p className={title}>Ім'я</p>
                    <p>{name}</p>
                </div>
                <div className={phoneStyle}>
                    <p className={title}>Номер</p>
                    <p><a href={`tel:${phone}`}>{phone}</a></p>
                </div>
                <div className={descriptionStyle}>
                    <p className={title}>Повідомлення</p>
                    {
                        description && <p>{description}</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Contact

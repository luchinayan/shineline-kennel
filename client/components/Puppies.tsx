import React, {useRef, useState} from 'react'
import HighlightedTitle from "./HighlightedTitle"
import styles from '../styles/Puppies.module.css'
import 'react-toastify/dist/ReactToastify.css'
import Image from 'next/image'
import TextField from '@mui/material/TextField'
import {Button} from "@mui/material"
import SendIcon from '@mui/icons-material/Send'
import axios from "axios"
import {ToastContainer, toast} from 'react-toastify'
import useTranslation from "next-translate/useTranslation"

const Puppies = (props) => {
    const {dataPuppies, textru, texten, api} = props
    const refEmail = useRef(null)
    const {t, lang} = useTranslation('puppies')
    const notifySuccess = () => toast.success(t('PP-notificationSuccess'))
    const notifyError = () => toast.error(t('PP-notificationError'))

    const [message, setMessage] = useState('')
    const [error, setError] = useState(null)


    function isValidEmail(email) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
    }

    const handleChange = event => {
        if (!isValidEmail(event.target.value) && refEmail.current.value !== '') {
            setError(t('PP-emailError'))
        } else if (refEmail.current.value == '') {
            setError(null)
        } else {
            setError(null)
        }
        setMessage(event.target.value)
    }

    async function sendMail() {
        if (refEmail.current.value !== '') {
            axios.post(`${api}/api/email`, {
                email: refEmail.current.value,
            })
                .then((res) => {
                    setMessage('')
                    notifySuccess()
                })
                .catch((e) => {
                    setMessage('')
                    notifyError()
                })
        } else {
            setError(t('PP-emailError'))
        }

    }

    return (
        <div>
            <div className={styles.puppiesContainer}>
                <div className={styles.puppiesImg}>
                    {dataPuppies.map(el => {
                            if (el.id === 68) return (
                                <Image key={el.id} style={{borderRadius: '1rem'}} width={600} height={400}
                                       src={el.source} alt={'puppies'}/>
                            )
                        }
                    )}

                </div>
                <div className={styles.puppiesTextContainer}>
                    <HighlightedTitle title={t('PP-highlightedTitle')}
                                      highlighted={t('PP-highlighted')}
                                      endText={t('PP-highlightedEndText')}/>
                    <p>{lang === 'ru' ? textru : texten}</p>
                </div>
            </div>
            <div className={styles.puppiesSubContainer}>
                <div className={styles.puppiesSubInput}>
                    <HighlightedTitle title={t('PP-highlightedTitleEmail')}
                                      highlighted={t('PP-highlightedEmail')}/>
                    <p>{t('PP-emailHint')}</p>
                    <TextField onChange={handleChange} inputRef={refEmail} id='outlined-basic' label='Email'
                               color={'warning'}
                               value={message}
                               variant='outlined'
                               className={styles.input}

                    />
                    <div>
                        <div className={styles.invalidEmail}> {error && <p>{error}</p>}</div>
                        <ToastContainer style={{fontSize: '1rem'}}/>
                        <Button
                            onClick={sendMail}
                            variant='outlined'
                            className={styles.btn}
                            endIcon={<SendIcon/>}
                            disabled={!!error}
                        >
                            {t('PP-sendBtn')}
                        </Button>
                    </div>
                </div>
                <div className={styles.puppiesSubImage}>
                    {dataPuppies.map(el => {
                            if (el.id === 69) return (
                                <Image key={el.id} style={{borderRadius: '1rem'}} width={700} height={500}
                                       src={el.source} alt={'puppies'}/>
                            )
                        }
                    )}
                </div>
            </div>
        </div>


    )
}

export default Puppies

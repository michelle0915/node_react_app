import React from 'react'
import { useEffect } from 'react'
import styles from './styles.css'
import axios from 'axios'

export const App = () => {

    useEffect(() => {
        const f = async () => {
            try {
                const { data: responseData } = await axios.get('/api/test')
                console.log(responseData)
            } catch (e) {
                console.log('api error')
            }
        }
        f()
    }, [])

    return (<div className={styles.text}>Hello React!</div>)
}

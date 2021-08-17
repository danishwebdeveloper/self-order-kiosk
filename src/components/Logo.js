import React from 'react'
import { useStyles } from '../styles'

export default function Logo(props) {
    const styles = useStyles();
    return ( <
        img src = "/images/logo.png"
        alt = "Food Order"
        className = { props.largeLogo ? styles.largeLogo : styles.logo } >
        < /img>
    )
}
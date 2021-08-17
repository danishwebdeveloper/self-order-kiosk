import { Box, Card, CardActionArea, CardContent, CardMedia, Fade, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { setOrderType } from '../actions';
import Logo from '../components/Logo'
import { Store } from '../Store';
import { useStyles } from '../styles'

export default function ChooseScreen(props) {
    const styles = useStyles();
    // dipatch store using useContext 
    const { dispatch } = useContext(Store);

    // Now make handler of choosen screen
    const chooseHandler = (orderType) => {
        setOrderType(dispatch, orderType);
        props.history.push('/order');

    }
    return (

        <
        Box className = {
            [styles.root, styles.navy] } >
        <
        Box className = {
            [styles.main, styles.center] } >
        <
        Logo large >
        <
        /Logo> <
        Typography variant = "h3"
        component = "h3"
        className = { styles.center }
        gutterBottom >
        Where will you be eating today ?
        <
        /Typography> <
        Box className = { styles.cards } >
        <
        Card className = {
            [styles.card, styles.space] } >
        <
        CardActionArea onClick = {
            () => chooseHandler('Eat In') } >
        <
        CardMedia component = "img"
        alt = "Eat In"
        image = "/images/eatin.png"
        className = { styles.media }
        /> <
        CardContent >
        <
        Typography gutterBottom variant = "h4"
        color = "textPrimary"
        component = "p" >
        Eat In <
        /Typography> <
        /CardContent> <
        /CardActionArea> <
        /Card> <
        Card className = {
            [styles.card, styles.space] } >
        <
        CardActionArea onClick = {
            () => chooseHandler('Take Out') } >
        <
        CardMedia component = "img"
        alt = "Take Out"
        image = "/images/takeout.png"
        className = { styles.media }
        /> <
        CardContent >
        <
        Typography gutterBottom variant = "h4"
        color = "textPrimary"
        component = "p" >
        Take Out <
        /Typography> <
        /CardContent> <
        /CardActionArea> <
        /Card> <
        /Box> <
        /Box> <
        /Box>

    )
}